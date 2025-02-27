import { BaseError } from "../../../error";

export class AlreadyExistsMeetingNameError extends BaseError{
    constructor(name:string){
        super('duplicate-name',`Name: ${name} for meeting room already exists`)
    }

    static withName(name:string){
        return new AlreadyExistsMeetingNameError(name)
    }
}

