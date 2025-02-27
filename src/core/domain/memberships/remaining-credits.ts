import { GetMembershipCcreditsResponse, MembershipAPI } from "./api";

export class remainingCreditsForUser implements MembershipAPI{
    getRemainingCreditsForUser(userId: string, date: string): GetMembershipCcreditsResponse {
    const response:GetMembershipCcreditsResponse = {
        UserId:userId,
        remainingCredits:10
    }


    return response

    }
}