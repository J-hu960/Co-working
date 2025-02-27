
import { Reservation } from "src/core/domain/espacios/reservation/reservation.entity";
import { MeetingRoomId } from "src/core/domain/espacios/meeting-room/value-objects/id";
import { RegisterReservationCommand } from "./register-reservation.command";
import { EventPublisher } from "src/core/domain/event-publisher";
import { Inject } from "@nestjs/common";
import { EVENTEMMITER_NEST } from "src/core/infrastructure/eventPublisher";
import { MeetingRoomRepository } from "src/core/domain/espacios/meeting-room/meetingRoom.repository";
import { InvalidIdError } from "src/core/domain/invalid-id.error";
import { NotAvailableMeetingroom } from "src/core/domain/espacios/reservation/excepcions/NotAvailableMeetingroom";
import { ReservationRepository } from "src/core/domain/espacios/reservation/reservation.repository";
import { Meetingroom_REPOSITORY } from "src/core/infrastructure/espacios/meeting-room/meetingRoom-inmemory";
import { RESERVATION_REPOSITORY } from "src/core/infrastructure/espacios/reservation/inmemory";

export class RegisterReservationCommadHandler{
    constructor(
        @Inject(Meetingroom_REPOSITORY) private readonly meetingRoomRepository:MeetingRoomRepository,
         @Inject(RESERVATION_REPOSITORY) private readonly reservationRepository:ReservationRepository,
       @Inject(EVENTEMMITER_NEST)  private readonly eventPublisher:EventPublisher
    ){}

    handle(command:RegisterReservationCommand){
        const meetingRoomId = MeetingRoomId.withValue(command.meetingRoomId)
        const reservation = Reservation.create(command.date,command.hour,meetingRoomId,command.userId,command.duration)
        console.log(`New reservation: ${reservation.date.date}`)
         if(!this.meetingRoomRepository.existsId(reservation.meetingRoomID)){
             throw InvalidIdError.withInvalidValue(reservation.meetingRoomID.value)
        }

        if(!this.reservationRepository.checkRoomAvailability(reservation.meetingRoomID,reservation.date,reservation.duration)){
            throw NotAvailableMeetingroom.withIdAndDate(reservation.id,reservation.date)
        }

        this.reservationRepository.save(reservation);
        this.eventPublisher.publish(reservation.releaseEvents())
        console.log('Reservation created and event published')
    }
}