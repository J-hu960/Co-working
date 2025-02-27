import { AggregateRoot } from "../../aggregate-root";
import { Id } from "../../id";
import { MeetingRoomId } from "../meeting-room/value-objects/id";
import { ReservationWasCreatedEvent } from "./ReservationCreatedPayload";
import { ReservationDuration } from "./value-objects/duration";
import { ReservationHour } from "./value-objects/hour";
import { ReservationId } from "./value-objects/id";
import { ReservationDate } from "./value-objects/reservationDate";
import { ReservationStatus, ReservationStatusOptions } from "./value-objects/status";
import { ReservationTimestamp } from "./value-objects/timestamp";
export class Reservation extends AggregateRoot{
        readonly createdAt:string;
        readonly updatedAt:string;
        readonly status: ReservationStatus;
    private constructor(
        readonly id:ReservationId,
        readonly date:ReservationDate,
        readonly hour: ReservationHour,
        readonly meetingRoomID: MeetingRoomId,
        readonly userID: string, //TODO: cambiar a un UserID cuando hagamos el modulo
        readonly duration: ReservationDuration,
        
    ){
        super();
        this.id = id;
        this.date = date;
        this.hour = hour;
        this.meetingRoomID = meetingRoomID;
        this.userID = userID;
        this.duration = duration;
        this.createdAt = ReservationTimestamp.getCurrentTimestamp();
        this.updatedAt = ReservationTimestamp.getCurrentTimestamp();
        this.status = ReservationStatus.create(ReservationStatusOptions.ACTIVE)
    }

    static create(datestr:string,hournum:number,meetingRoomID:MeetingRoomId,userID:string,durationnum:number){
        const id = ReservationId.new();
        const date = ReservationDate.create(datestr);
        const hour = ReservationHour.create(hournum);
        const duration = ReservationDuration.create(durationnum);

       const reservation = new Reservation(id,date,hour,meetingRoomID,userID,duration)

       reservation.recordEvent(ReservationWasCreatedEvent.fromReservation(reservation))

       return reservation;
    }
}

