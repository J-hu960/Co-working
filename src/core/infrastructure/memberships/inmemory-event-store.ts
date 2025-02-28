import { DomainEvent } from "src/core/domain/domain-event";
import { MembershipEventStorer } from "src/core/domain/memberships/membership/membership.event-store";

export class MembershipInmemoryEventStore implements MembershipEventStorer{
    private readonly events:DomainEvent[] = [];
    constructor(){}

    addEvents(events: DomainEvent[]): void {
        events.forEach(
            event=> this.events.push(event)
        );
    }

    getEvents(): DomainEvent[] {
        return this.events;
    }
}

export const MEMBERSHIP_EVENTSTORE = Symbol('membership-eventstore')