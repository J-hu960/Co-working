import { BaseError } from "../../../error";

export class InvalidMeetingRoomNameError extends BaseError{
    constructor(name:string){
        super('invalid-name',`Invalid name: ${name} for meeting room`)
    }

    static withInvalidName(name:string){
        return new InvalidMeetingRoomNameError(name)
    }
}

