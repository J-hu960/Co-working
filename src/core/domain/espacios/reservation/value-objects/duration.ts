import { InvalidReservationInput } from "../excepcions/InvalidReservationInput";

export class ReservationDuration{
    private constructor(val:number){}

    static create(val:number):ReservationDuration{
         if(val < 1 || val > 12){
            throw InvalidReservationInput.withValue(val)
         }

         return new ReservationDuration(val)
    }
}