import { HotdesktopReservation } from "./hotdesktopReservation.entity";

export interface HotdesktopReservationRepository{
    exists(userId:string,date:string):boolean;
    save(reservation:HotdesktopReservation):void;
}