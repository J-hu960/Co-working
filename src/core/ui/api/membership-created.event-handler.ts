import { Inject, Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { MembershipReadModel } from "src/core/application/memberships/membership/memebrship.read-model";
import { MembershipCreatedEventHandler } from "src/core/application/memberships/membership/register-membership.event-handler";
import { MembershipCreatedEven } from "src/core/domain/memberships/membership/events/membership-created.event";
import { MEMBERSHIP_READMODEL } from "src/core/infrastructure/memberships/inmemory-readmodel";

@Injectable()
export class MembershipCreatedHandler {
    constructor(
       @Inject(MEMBERSHIP_READMODEL) private readonly membershipReadModel:MembershipReadModel
    ) {}
  
    @OnEvent(MembershipCreatedEven.Type,{async:true})
    handle(event: MembershipCreatedEven) {
      this.membershipReadModel.addMembership(event.payload.userId)
      console.log(this.membershipReadModel.getMemberships())
    }
  }
  

