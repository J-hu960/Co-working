import { DuplicateMembershipError } from "src/core/domain/memberships/membership/excepcions/DuplicateMembershipError.error";
import { MembershipReadModel } from "./memebrship.read-model";
import { RegisterMembershipCommand } from "./register-membership.command";
import { Membership } from "src/core/domain/memberships/membership/membership";
import { MembershipEventStorer } from "src/core/domain/memberships/membership/membership.event-store";
import { Inject } from "@nestjs/common";
import { MEMBERSHIP_READMODEL } from "src/core/infrastructure/memberships/inmemory-readmodel";
import { MEMBERSHIP_EVENTSTORE } from "src/core/infrastructure/memberships/inmemory-event-store";
import { EVENTEMMITER_NEST } from "src/core/infrastructure/eventPublisher";
import { EventPublisher } from "src/core/domain/event-publisher";

export class RegisterMembershipCommandHandler{
    constructor(
        @Inject(MEMBERSHIP_READMODEL) private readonly membershipReadModel:MembershipReadModel,
        @Inject(MEMBERSHIP_EVENTSTORE) private readonly membershipEventStore:MembershipEventStorer,
        @Inject(EVENTEMMITER_NEST) private readonly eventPublisher:EventPublisher
    ){} 

    handle(command:RegisterMembershipCommand){
        if(this.membershipReadModel.exists(command.userId)){
            throw  DuplicateMembershipError.withId(command.userId);
        }

        const membership = Membership.create(command.userId,true);
        
        const recordedEvents = membership.releaseEvents()
        this.membershipEventStore.addEvents(recordedEvents);
        console.log(this.membershipEventStore.getEvents())
        this.eventPublisher.publish(recordedEvents)

    }
}