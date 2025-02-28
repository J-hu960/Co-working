import { AggregateRoot } from "../../aggregate-root";
import { Id } from "../../id";
import { MembershipCreatedEven } from "./events/membership-created.event";

export class Membership extends AggregateRoot{
    private constructor(
        readonly userId:Id,
        readonly active:boolean,
        readonly created_at:Date
    ){
        super()
    }

    static create(userIdStr:string,active:boolean){
        const userId = Id.fromExisting(userIdStr);
        const created_at = new Date;

        const membership = new Membership(userId,active,created_at);

        membership.recordEvent(MembershipCreatedEven.fromMembership(membership))

        return membership
    }
}