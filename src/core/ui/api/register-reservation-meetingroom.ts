import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { RegisterReservationCommadHandler } from "src/core/application/espacios/reservation/register-reservation";
import { catchError } from "./error-handler";
import { HttpStatusCode } from "axios";
export class RegisterReservationCommand{
    constructor(
        readonly date:string,
        readonly hour:number,
        readonly meetingRoomId:string,
        readonly userId: string,
        readonly duration:number,
    ){}
}

class RegisterReservationDTO{
    date:string;
    hour:number;
    meetingRoomId:string;
    userId: string;
    duration:number;
}

@Controller()
export class ResgisterMeetingRoomReservationController{
    constructor(private readonly registerReservationCommandHandler:RegisterReservationCommadHandler){}


    @Post('reservations')
    handle(@Body() registerReservationDTO:RegisterReservationDTO, @Res() response:Response){
        try {
            this.registerReservationCommandHandler.handle(
                new RegisterReservationCommand(
                    registerReservationDTO.date,
                    registerReservationDTO.hour,
                    registerReservationDTO.meetingRoomId,
                    registerReservationDTO.userId,
                    registerReservationDTO.duration
                )
            );
            response.status(HttpStatus.CREATED).send("new reservation created")
        } catch (error) {
            console.log(error);
            catchError(error,response);
            return;
        }
    }
}