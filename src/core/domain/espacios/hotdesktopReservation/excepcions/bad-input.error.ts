import { BaseError } from "src/core/domain/error"
import { Id } from "src/core/domain/id"

export class BadInpurHotdesktopReservationError extends BaseError{
    constructor(val:any){
        super("input-error",`Invalid value: ${val}`)
    }

    static withValue(val:any){
        return new BadInpurHotdesktopReservationError(val)
    }
}