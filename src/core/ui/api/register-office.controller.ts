import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { RegisterOfficeCommand } from "src/core/application/espacios/office/register-office.command";
import { RegisterOfficeCommandHandler } from "src/core/application/espacios/office/register-office.command-handler";
import { catchError } from "./error-handler";
import { Response } from "express";

class RegisterOfficeDTO{
    number:number;
    lease?:number;
    status?:string;
}

@Controller()
export class RegisterOfficeController{
    constructor(private readonly registerOfficeCommandHandler:RegisterOfficeCommandHandler){}

    @Post('office')
    handle(@Body() registerOfficeDTO:RegisterOfficeDTO, @Res() response:Response){
        try {
            this.registerOfficeCommandHandler.handle(
                     new RegisterOfficeCommand(registerOfficeDTO.lease,registerOfficeDTO.number,registerOfficeDTO.status)
            )

            response.status(HttpStatus.CREATED).json({"new-office":"created"})
        } catch (error) {
            catchError(error,response)
            return
        }
    }
}