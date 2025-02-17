import { HotDesktopEntity } from "../../domain/hotDesktop/hotDesktop";
import { HotdesktopRepository } from "../../domain/hotDesktop/hotdesktop.repository";
import { HotdesktopUniqueNumber } from "../../domain/hotDesktop/uniqueNumber";

export class HotdesktopInMemory implements HotdesktopRepository{

    private hotDesktops:HotDesktopEntity[] = [];
    save(hotdesktop: HotDesktopEntity): void {
        this.hotDesktops.push(hotdesktop);
    }

    exists(value: HotdesktopUniqueNumber): boolean {
        return this.hotDesktops.some(hotdesktop => hotdesktop.uniqueNumber.equals(value))
    }

    setHotDesktops(hotdesktops:HotDesktopEntity[]):void{
        this.hotDesktops = hotdesktops;
    }

   

}