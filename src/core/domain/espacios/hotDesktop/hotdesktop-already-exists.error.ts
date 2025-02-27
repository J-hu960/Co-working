import { HttpStatus } from "@nestjs/common";
import { BaseError } from "../../error";


export class HotdesktopAlreadyExistsError extends BaseError {
    constructor(val: number) {
        super( HttpStatus.CONFLICT.toString(),`Hot desktop with number: ${val} already exists`);
    }

    static withValue(val: number) {
        return new HotdesktopAlreadyExistsError(val);
    }
}



