
export interface MembershipAPI{
    getRemainingCreditsForUser(userId:string,date:string): GetMembershipCcreditsResponse
}


export type GetMembershipCcreditsResponse = {
    UserId:string;
    remainingCredits:number;
}

