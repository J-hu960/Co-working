import { BaseError } from "../../../error";
import { ReservationId } from "../value-objects/id";
import { ReservationDate } from "../value-objects/reservationDate";

export class NotAvailableMeetingroom extends BaseError{
    constructor(val:ReservationId,date:ReservationDate){
        super('non-available-meeting-room',`Meeting room with id: ${val} is not available for the date: ${date}`)
    }

    static withIdAndDate(val:ReservationId,date:ReservationDate){
        return new NotAvailableMeetingroom(val,date)
    }
}

