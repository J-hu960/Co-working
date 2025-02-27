import { BaseError } from "../../../error";

export class NonExistingMeetingroom extends BaseError{
    constructor(val:number){
        super('non-existent-meeting-room',`Meeting room with id: ${val} does not exists.`)
    }

    static withId(val:number){
        return new NonExistingMeetingroom(val)
    }
}

