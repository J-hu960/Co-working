import { BaseError } from "src/core/domain/error"
import { Id } from "src/core/domain/id"

export class DuplicateMembershipError extends BaseError{
    constructor(userid:string){
        super("duplicated-id",`value already exists: ${userid}`)
    }

    static withId(userid:string){
        return new DuplicateMembershipError(userid)
    }
}