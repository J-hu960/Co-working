import { HotDesktopEntity } from "./hotDesktop";
import { HotdesktopUniqueNumber } from "./uniqueNumber";

export interface HotdesktopRepository{
    save(hotdesktop:HotDesktopEntity):void
    exists(value:HotdesktopUniqueNumber):boolean
    setHotDesktops(hotdesktops:HotDesktopEntity[]):void
}

export const Hotdesktop_REPOSITORY = Symbol('HotdesktopRepository')