import { MeetingRoomId } from "src/core/domain/espacios/meeting-room/value-objects/id";
import { Reservation } from "src/core/domain/espacios/reservation/reservation.entity";
import { ReservationRepository } from "src/core/domain/espacios/reservation/reservation.repository";
import { ReservationDuration } from "src/core/domain/espacios/reservation/value-objects/duration";
import { ReservationDate } from "src/core/domain/espacios/reservation/value-objects/reservationDate";

export class ReservationInmemoryRepository implements ReservationRepository{
         save(reservation:Reservation):void{}
        exists(number:Reservation): boolean{
            return false;
        }
        checkRoomAvailability(id:MeetingRoomId,start:ReservationDate,duration:ReservationDuration): boolean{
               return true;
        }

        getForDay(date: string): number {
            return 10
        }
           
}

export const RESERVATION_REPOSITORY = Symbol('RESERVATIONR_REPOSITORY') 