import { InvalidMeetingRoomNameError } from "../excepcions/invalid-name.error";

export class MeetingroomName{
    private readonly name:string;
    private constructor(name:string){
        this.name = name;
    }

    static create(name:string){
       if( !this.name||!this.name.trim() || name===""){
        throw InvalidMeetingRoomNameError.withInvalidName(name) 
       }

       return new MeetingroomName(name)

    }

    equals(name:MeetingroomName):boolean{
        return name.name === this.name;
    }

}