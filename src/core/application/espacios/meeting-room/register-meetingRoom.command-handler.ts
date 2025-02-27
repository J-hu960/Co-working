import { MeetingRoomRepository } from "src/core/domain/espacios/meeting-room/meetingRoom.repository";
import { MeetingroomName } from "../../../domain/espacios/meeting-room/value-objects/name";
import { RegisterMeetingRoomCommand } from "./register-meetingRoom.command";
import { AlreadyExistsMeetingNameError } from "../../../domain/espacios/meeting-room/excepcions/already-exists-name.error";
import { MeetingRoom } from "../../../domain/espacios/meeting-room/meetingRoom.entity";
import { Inject } from "@nestjs/common";
import { Meetingroom_REPOSITORY } from "../../../infrastructure/espacios/meeting-room/meetingRoom-inmemory";

export class RegisterMeetingRoomCommadHandler{
    constructor(@Inject(Meetingroom_REPOSITORY) private readonly readonlymeetingRoomRepository: MeetingRoomRepository){}

    handle(command:RegisterMeetingRoomCommand){
        const name = MeetingroomName.create(command.name)
        if(this.readonlymeetingRoomRepository.exists(name)){
            throw AlreadyExistsMeetingNameError.withName(command.name);
        }

        const meetingRoom  = MeetingRoom.create(command.name,command.capacity);

        this.readonlymeetingRoomRepository.save(meetingRoom);
        return meetingRoom

    }
}