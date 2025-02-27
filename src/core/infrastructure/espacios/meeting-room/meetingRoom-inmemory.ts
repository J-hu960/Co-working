import { MeetingRoomRepository } from "src/core/domain/espacios/meeting-room/meetingRoom.repository";
import { HotDesktopEntity } from "../../../domain/espacios/hotDesktop/hotDesktop";
import { HotdesktopUniqueNumber } from "../../../domain/espacios/hotDesktop/uniqueNumber";
import { MeetingroomName } from "src/core/domain/espacios/meeting-room/value-objects/name";
import { MeetingRoom } from "src/core/domain/espacios/meeting-room/meetingRoom.entity";
import { MeetingRoomId } from "src/core/domain/espacios/meeting-room/value-objects/id";

export class MeetingroomInmemoryRepository implements MeetingRoomRepository{

    private meetingRooms:MeetingRoom[] = [];
    save(meetingRoom: MeetingRoom): void {
        this.meetingRooms.push(meetingRoom);
    }

    exists(name: MeetingroomName): boolean {
        return this.meetingRooms.some(meetingRoom => meetingRoom.name.equals(name))
    }

    clear():void{
        this.meetingRooms = [];
    }

    add(meetingRoom:MeetingRoom){
        this.meetingRooms.push(meetingRoom)
    }
    existsId(meetingRoomId: MeetingRoomId): boolean {
        return this.meetingRooms.some(meetingroom=>meetingroom.id.value === meetingRoomId.value)
    }


}

export const Meetingroom_REPOSITORY = Symbol('MeetingroomRepository')