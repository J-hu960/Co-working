import { DomainEvent } from "../../domain-event";

export interface MembershipEventStorer{
    addEvents(event:DomainEvent[]):void;
    getEvents():DomainEvent[];
}

