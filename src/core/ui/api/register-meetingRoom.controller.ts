import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { RegisterMeetingRoomCommadHandler } from "src/core/application/espacios/meeting-room/register-meetingRoom.command-handler";
import { catchError } from "./error-handler";
import { RegisterMeetingRoomCommand } from "src/core/application/espacios/meeting-room/register-meetingRoom.command";

export class RegisterMeetingroomDTO{
    name:string;
    capacity:number
}

@Controller()
export class RegisterMeetingroomController{
    constructor(private readonly registerMeetingroomHandler:RegisterMeetingRoomCommadHandler){}

    @Post('meeting-rooms')
    handle(@Body() registerMeetingroomDTO:RegisterMeetingroomDTO, @Res() response:Response){
        try {
            const meetingRoom = this.registerMeetingroomHandler.handle(
                new RegisterMeetingRoomCommand(registerMeetingroomDTO.name,registerMeetingroomDTO.capacity)
            );
            response.status(HttpStatus.CREATED).send(meetingRoom);

        } catch (error) {
            catchError(error,response)
            return
        }
    }
}