import { BaseError } from "../../../error";

export class InvalidMeetingRoomCapacityError extends BaseError{
    constructor(num:number){
        super('invalid-capacity',`Invalid capacity: ${num} for meeting room`)
    }

    static withInvalidValue(n:number){
        return new InvalidMeetingRoomCapacityError(n)
    }
}

