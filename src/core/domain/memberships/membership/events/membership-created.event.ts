import { DomainEvent } from "src/core/domain/domain-event"
import { Id } from "src/core/domain/id"
import { Membership } from "../membership"

export type MembershipCreatedEventPayload = {
    readonly userId:string,
    readonly active:boolean,
    readonly createdAt:Date
}


export class MembershipCreatedEven extends DomainEvent<MembershipCreatedEventPayload>{
    static Type = "membership.created"
    private constructor(membershipId:Id,payload:MembershipCreatedEventPayload,){
        super(membershipId,MembershipCreatedEven.Type,payload)
    }

    static fromMembership(membership:Membership){
        return new MembershipCreatedEven(
            membership.userId,{
                userId:membership.userId.value,
                active:membership.active,
                createdAt:membership.created_at
            }
        )
    }
}