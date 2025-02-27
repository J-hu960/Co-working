import { HotDesktopEntity } from "../../../domain/espacios/hotDesktop/hotDesktop";
import { HotdesktopRepository } from "../../../domain/espacios/hotDesktop/hotdesktop.repository";
import { HotdesktopUniqueNumber } from "../../../domain/espacios/hotDesktop/uniqueNumber";

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

    getRegisters(): HotDesktopEntity[] {
        return this.hotDesktops
    }

   

}