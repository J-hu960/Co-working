import { Id } from "../../id";
import { HotdesktopReservationDate } from "./value-objects/date";
import { HotdesktopReservationID } from "./value-objects/id";
import { HotdesktopReservationStatus } from "./value-objects/status";

export class HotdesktopReservation{
    private constructor(
        readonly id: HotdesktopReservationID,
        readonly userId: Id,
        readonly date: HotdesktopReservationDate,
        readonly status: HotdesktopReservationStatus,
        readonly includedMembership:boolean,

    ){
        this.date = date;
        this.userId = id;
        this.status = status;
        this.includedMembership = includedMembership;
        this.id = id;
    }

    static create(userId:Id,datestr:string,status:HotdesktopReservationStatus,includedMembership:boolean):HotdesktopReservation{
        const date = HotdesktopReservationDate.create(datestr);
        const id = HotdesktopReservationID.new();

        return new HotdesktopReservation(id,userId,date,status,includedMembership);

    }
}