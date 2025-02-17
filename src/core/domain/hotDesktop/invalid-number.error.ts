import { HttpStatusCode } from "axios";
import { HttpException } from "@nestjs/common";

export class InvalidNumberError extends HttpException{
    constructor(n:number){
        super(`Invalid unique number: ${n}`,HttpStatusCode.BadRequest)
    }

    static withInvalidValue(n:number){
        return new InvalidNumberError(n)

    }
}

