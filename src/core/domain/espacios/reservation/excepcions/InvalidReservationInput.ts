import { BaseError } from "../../../error";

export class InvalidReservationInput extends BaseError{
    constructor(){
        super('invalid-input',`invalid input for reservating a meeting room.`)
    }

    static withValue(val:number){
        return new InvalidReservationInput()
    }
}

