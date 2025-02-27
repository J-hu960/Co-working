import { BaseError } from "../../../error";

export class InvalidOfficeLeasePeriodError extends BaseError{
    constructor(num:number){
        super('invalid-value',`Invalid number: ${num} for office lease period`)
    }

    static withValue(num:number){
        return new InvalidOfficeLeasePeriodError(num)
    }
}

