import { BaseError } from "../../error";

export class InvalidNumberError extends BaseError{
    constructor(num:number){
        super('invalid-number',`Invalid unique number: ${num}`)
    }

    static withInvalidValue(n:number){
        return new InvalidNumberError(n)
    }
}

