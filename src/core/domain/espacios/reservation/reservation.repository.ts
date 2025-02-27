import { MeetingRoomId } from "../meeting-room/value-objects/id";
import { Reservation } from "./reservation.entity"
import { ReservationDuration } from "./value-objects/duration";
import { ReservationDate } from "./value-objects/reservationDate";


export interface ReservationRepository{
    save(reservation:Reservation):void;
    exists(number:Reservation): boolean;
    checkRoomAvailability(id:MeetingRoomId,start:ReservationDate,duration:ReservationDuration): boolean;
    getForDay(date:string):number;
}


