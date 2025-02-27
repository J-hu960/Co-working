import { Id } from "../../id";
import { OfficeId } from "./value-objects/id";
import { OfficeLeasePeriod } from "./value-objects/lease-period";
import { OfficeNumber } from "./value-objects/number";
import { OfficeStatus } from "./value-objects/status";

export class Office{
    readonly createdAt:Date;
    readonly updatedAt:Date;
    private constructor(
        readonly ID:OfficeId,
        readonly number:OfficeNumber,
        readonly leasePeriod:OfficeLeasePeriod,
        readonly status:OfficeStatus
    ){
        this.ID = ID;
        this.number = number;
        this.leasePeriod = leasePeriod;
        this.status = status
        this.createdAt = new Date;
        this.updatedAt = new Date;

    }

    static new(num:number,leasePeriod?:number,status?:string):Office{
        const id = OfficeId.new()
        const number = OfficeNumber.create(num)
        const lease = OfficeLeasePeriod.create(leasePeriod)
        const stat = OfficeStatus.create(status)

        return new Office(id,number,lease,stat)
    }
}