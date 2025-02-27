import { InvalidMeetingRoomCapacityError } from "../excepcions/invalid-capacity.error";

export class MeetingroomCapacity{

    private constructor(readonly value:number){
        this.value = value;
    }

    static create(n:number){
        if(n<=0){
            throw InvalidMeetingRoomCapacityError.withInvalidValue(n)
        }
        return new MeetingroomCapacity(n)
    }

}