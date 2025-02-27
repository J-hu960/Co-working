import { MeetingroomCapacity } from "./value-objects/capacity";
import { MeetingRoomId } from "./value-objects/id";
import { MeetingroomName } from "./value-objects/name";
import { MeetingRoomStatus, MeetingRoomStatusOptions } from "./value-objects/status";

export class MeetingRoom{
    readonly createdAt:Date; 
    readonly updatedAt:Date;
    readonly id:MeetingRoomId;
    readonly name:MeetingroomName;
    readonly status:MeetingRoomStatus;
    readonly capacity:MeetingroomCapacity;

    private constructor(
        name:MeetingroomName,
        id:MeetingRoomId,
        capacity:MeetingroomCapacity
    ){
        this.name = name;
        this.capacity = capacity;
        this.id = id;
        this.status = MeetingRoomStatusOptions.ACTIVE;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        
    }

    static create(namestr:string,num:number){
        const id = MeetingRoomId.new();
        const capacity = MeetingroomCapacity.create(num);
        const name = MeetingroomName.create(namestr)


        return new MeetingRoom(name,id,capacity)

    }


}