import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { ReservationCreatedEventHandler } from "src/core/application/espacios/reservation/reservation-created.event-handler";
import { ReservationWasCreatedEvent } from "src/core/domain/espacios/reservation/ReservationCreatedPayload";

@Injectable()
export class ReservationCreatedHandler {
    constructor(private readonly reservationCreatedEventHandler:ReservationCreatedEventHandler) {}
  
    @OnEvent(ReservationWasCreatedEvent.Type, { async: true })
    handle(payload: ReservationWasCreatedEvent) {
      this.reservationCreatedEventHandler.handle(payload)
    }
  }
  

