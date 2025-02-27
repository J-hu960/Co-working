import { BaseError } from "src/core/domain/error"

export class DuplicateHotdesktopReservationError extends BaseError{
    constructor(userId:string,date:string){
        super("duplicate-reservation",`User with id: ${userId} already has a reservation for day: ${date}`)
    }

    static withIdAndDate(userId:string,date:string){
        return new DuplicateHotdesktopReservationError(userId,date)
    }
}