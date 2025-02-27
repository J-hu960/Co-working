import { Id } from "../../../id";

export class MeetingRoomId extends Id{
    private constructor(value: string) {
        super(value)
      }
    
      static new(): MeetingRoomId {
        return new MeetingRoomId(this.generate())
      }

      static withValue(value:string){
        return new MeetingRoomId(value)
      }
}