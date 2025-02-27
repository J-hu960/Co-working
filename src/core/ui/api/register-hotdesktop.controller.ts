import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { RegisterHotdesktopCommadHandler } from "../../application/espacios/hotDesktop/register-desktop.command-handler";
import { RegisterHotDesktopCommand } from "../../application/espacios/hotDesktop/register-hotDesktop.command";
import { catchError } from "./error-handler";
import { Response } from "express";

class RegisterHotdesktopDTO{
    uniqueNumber:number
}


@Controller('hot-desktops')
export class RegisterHotdesktopController{
    constructor(private readonly registerHotdesktopCommandHandler:RegisterHotdesktopCommadHandler){}

    @Post()
    handle(@Body() request:RegisterHotdesktopDTO, @Res() response:Response){
        try {
            this.registerHotdesktopCommandHandler.handle(
                new RegisterHotDesktopCommand(request.uniqueNumber)
            )

            response.status(HttpStatus.CREATED).send();

            
        } catch (error) {
            catchError(error,response)
            return 
            
        }

       
    }
}