import { MembershipCreatedEven } from "src/core/domain/memberships/membership/events/membership-created.event";
import { MembershipReadModel } from "./memebrship.read-model";
import { Inject, Injectable } from "@nestjs/common";
import { MEMBERSHIP_READMODEL } from "src/core/infrastructure/memberships/inmemory-readmodel";

@Injectable()
export class MembershipCreatedEventHandler{
    constructor(
        @Inject(MEMBERSHIP_READMODEL) private readonly membershipReadModel:MembershipReadModel){} //se le debe inyectar una interfaz para actualizar el read model.

    handle(event:MembershipCreatedEven){
        this.membershipReadModel.addMembership(event.payload.userId)
    }
}