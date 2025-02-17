import { HttpException, HttpStatus } from "@nestjs/common";

export class HotdesktopAlreadyExistsError extends HttpException {
    constructor(val: number) {
        super(`Hot desktop with number: ${val} already exists`, HttpStatus.CONFLICT);
    }

    static withValue(val: number) {
        return new HotdesktopAlreadyExistsError(val);
    }
}