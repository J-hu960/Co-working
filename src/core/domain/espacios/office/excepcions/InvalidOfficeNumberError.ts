import { BaseError } from "../../../error";

export class InvalidOfficeNumberError extends BaseError{
    constructor(num:number){
        super('invalid-value',`Invalid number: ${num} for office number`)
    }

    static withValue(num:number){
        return new InvalidOfficeNumberError(num)
    }
}

