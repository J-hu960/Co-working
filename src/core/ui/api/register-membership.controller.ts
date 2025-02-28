import { Body, Controller, HttpStatus, Post, Res } from "@nestjs/common";
import { catchError } from "./error-handler";
import { Response } from "express";
import { RegisterMembershipCommandHandler } from "src/core/application/memberships/membership/register-membership.command-handler";
import { RegisterMembershipCommand } from "src/core/application/memberships/membership/register-membership.command";
type RegisterMembershipDTO = {
        readonly userId:string
    
}
@Controller()
export class RegisterMembershipController{
    constructor(private readonly registerMembershipCommandHandler:RegisterMembershipCommandHandler){}
    @Post('memberships')
    handle(@Body() registerMembershipDTO:RegisterMembershipDTO, @Res() response:Response){
        try {
            this.registerMembershipCommandHandler.handle(
                new RegisterMembershipCommand(registerMembershipDTO.userId)
            )

            response.status(HttpStatus.CREATED).send();
            
        } catch (error) {
            catchError(error,response)
            return
        }
    }

}