import { InvalidReservationInput } from "../excepcions/InvalidReservationInput"

export class ReservationHour{
    private constructor(readonly hour:number){}

    static create(hour:number){
        if(hour<0 || hour >23){
            throw InvalidReservationInput.withValue(hour)
        }

        return new ReservationHour(hour)

    }


}