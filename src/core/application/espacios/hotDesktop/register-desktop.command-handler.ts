import { Inject, Injectable } from "@nestjs/common";
import { RegisterHotDesktopCommand } from "./register-hotDesktop.command";
import { HotDesktopEntity } from "../../../domain/espacios/hotDesktop/hotDesktop";
import { Hotdesktop_REPOSITORY, HotdesktopRepository } from "../../../domain/espacios/hotDesktop/hotdesktop.repository";
import { HotdesktopAlreadyExistsError } from "../../../domain/espacios/hotDesktop/hotdesktop-already-exists.error";
import { HotdesktopUniqueNumber } from "../../../domain/espacios/hotDesktop/uniqueNumber";

@Injectable()
export class RegisterHotdesktopCommadHandler {
    constructor(@Inject(Hotdesktop_REPOSITORY) private readonly hotdesktopRepository: HotdesktopRepository) {}

    handle(command: RegisterHotDesktopCommand) {
        
        const uniqueNumber = HotdesktopUniqueNumber.create(command.uniqueNumber)
        if (this.hotdesktopRepository.exists(uniqueNumber)) {
            throw HotdesktopAlreadyExistsError.withValue(command.uniqueNumber);
        }
        const hotDesktop = HotDesktopEntity.create(command.uniqueNumber);
        this.hotdesktopRepository.save(hotDesktop);
    }
}