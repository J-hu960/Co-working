import { BaseError } from "src/core/domain/error"

export class BadinputMembershipError extends BaseError{
    constructor(val:any){
        super("input-error",`Invalid value for creating membership: ${val}`)
    }

    static withValue(val:any){
        return new BadinputMembershipError(val)
    }
}