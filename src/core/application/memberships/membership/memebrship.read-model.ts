export interface MembershipReadModel{
    exists(userId:string):boolean;
    addMembership(userId:string):void;
    getMemberships():any[]
}