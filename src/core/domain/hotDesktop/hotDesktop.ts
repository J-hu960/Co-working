import { HotDesktopId } from "./id";
import { HotdesktopUniqueNumber } from "./uniqueNumber";

export class HotDesktopEntity{
    createdAt:Date;
    updatedAt:Date;
    private constructor(
        readonly id:HotDesktopId,
        readonly uniqueNumber:HotdesktopUniqueNumber,
    ){
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.id = id;
        this.uniqueNumber = uniqueNumber;
    }


    static create(n:number){
        const id:HotDesktopId = HotDesktopId.new()
        const uniqueNumber:HotdesktopUniqueNumber = HotdesktopUniqueNumber.create(n);

        return new HotDesktopEntity(id,uniqueNumber)

    }
}