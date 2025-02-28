import { MembershipReadModel } from "src/core/application/memberships/membership/memebrship.read-model";


export class MembershipReadModelInmemoty implements MembershipReadModel{
    private readonly memebrships:string[]=[];
    exists(userId: string): boolean {
        return this.memebrships.some(id=>id === userId);
    }

    addMembership(userId: string): void {
        this.memebrships.push(userId);
    }

    getMemberships(): string[] {
        return this.memebrships
    }

}

export const MEMBERSHIP_READMODEL = Symbol('membership-READMODEL')