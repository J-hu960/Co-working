import { HotDesktopStatus, HotDesktopStatusOptions } from "./hotDesktopStatus";
import { HotDesktopId } from "./id";
import { HotdesktopUniqueNumber } from "./uniqueNumber";

export class HotDesktopEntity{
    readonly createdAt:Date; 
    readonly updatedAt:Date;
    readonly id:HotDesktopId;
    readonly status:HotDesktopStatus;
    readonly uniqueNumber:HotdesktopUniqueNumber;
    private constructor(
         id:HotDesktopId,
         uniqueNumber:HotdesktopUniqueNumber,
    ){
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.status = HotDesktopStatusOptions.ACTIVE;
        this.id = id;
        this.uniqueNumber = uniqueNumber;
    }

    static create(n:number){
        const id:HotDesktopId = HotDesktopId.new()
        const uniqueNumber:HotdesktopUniqueNumber = HotdesktopUniqueNumber.create(n);
    
        return new HotDesktopEntity(id,uniqueNumber)
            
       
    }
}