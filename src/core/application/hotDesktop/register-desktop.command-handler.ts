import { Inject, Injectable } from "@nestjs/common";
import { RegisterHotDesktopCommand } from "./register-hotDesktop.command";
import { HotDesktopEntity } from "../../domain/hotDesktop/hotDesktop";
import { Hotdesktop_REPOSITORY, HotdesktopRepository } from "../../domain/hotDesktop/hotdesktop.repository";
import { HotdesktopAlreadyExistsError } from "../../domain/hotDesktop/hotdesktop-already-exists.error";
import { HotdesktopUniqueNumber } from "../../domain/hotDesktop/uniqueNumber";

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