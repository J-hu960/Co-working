import { Inject } from "@nestjs/common";
import { Hotdesktop_REPOSITORY } from "src/core/domain/espacios/hotDesktop/hotdesktop.repository";
import { HotdesktopReservation } from "src/core/domain/espacios/hotdesktopReservation/hotdesktopReservation.entity";
import { HotdesktopReservationRepository } from "src/core/domain/espacios/hotdesktopReservation/hotdesktopReservation.repository";
import { HotdesktopReservationOptions } from "src/core/domain/espacios/hotdesktopReservation/value-objects/status";
import { ReservationRepository } from "src/core/domain/espacios/reservation/reservation.repository";
import { ReservationWasCreatedEvent } from "src/core/domain/espacios/reservation/ReservationCreatedPayload";
import { Id } from "src/core/domain/id";
import { RESERVATION_REPOSITORY } from "src/core/infrastructure/espacios/reservation/inmemory";


export class ReservationCreatedEventHandler{
  constructor(
    @Inject(Hotdesktop_REPOSITORY) private readonly hotdesktopReservationRepository:HotdesktopReservationRepository,
    @Inject(RESERVATION_REPOSITORY) private readonly reservationRepository:ReservationRepository,
){}

handle(command:ReservationWasCreatedEvent):void{

    if(!(this.reservationRepository.getForDay(command.payload.date) > 0)){
       console.log("there are not hot desktops available for this day :(")
       return
    }


    let includedInmembership:boolean = true;
   

    const hotdesktopReservation = HotdesktopReservation.create(
      Id.fromExisting(command.payload.id), command.payload.date,HotdesktopReservationOptions.ACTIVE, includedInmembership
    )

    this.hotdesktopReservationRepository.save(hotdesktopReservation)



    
}



}