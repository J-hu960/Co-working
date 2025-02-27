import { DomainEvent } from "../../domain-event";
import { Reservation } from "./reservation.entity";
import { ReservationId } from "./value-objects/id";


export type ReservationWasCreatedPayload = {
   readonly id:string
   readonly meetingRoomId:string
   readonly date:string
}

export class ReservationWasCreatedEvent extends DomainEvent<ReservationWasCreatedPayload>{
   static Type = 'ReservationWasCreatedEvent'

   private constructor(reservationId:ReservationId,payload:ReservationWasCreatedPayload){
      super(reservationId,ReservationWasCreatedEvent.Type,payload)
   }

   static fromReservation(reservation:Reservation){
      return new ReservationWasCreatedEvent(reservation.id,{
         id:reservation.id.value,
         meetingRoomId:reservation.meetingRoomID.value,
         date:reservation.date.date
      })
   }
}