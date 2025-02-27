import { BaseError } from "../../../error";

export class OfficeAlreadyExistsError extends BaseError{
    constructor(val:number){
        super('duplicate-name',`Name: ${val} for office already exists`)
    }

    static withValue(val:number){
        return new OfficeAlreadyExistsError(val)
    }
}

