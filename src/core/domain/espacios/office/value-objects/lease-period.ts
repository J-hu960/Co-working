import { InvalidOfficeLeasePeriodError } from "../excepcions/InvalidOfficeLeasePeriod";
import { OfficeNumber } from "./number";

export class OfficeLeasePeriod{
    private constructor(private readonly num:number) {}

    static create(num?:number){
        if(num <= 0){
            throw InvalidOfficeLeasePeriodError.withValue(num)
        }

        if(!num){
            return new OfficeLeasePeriod(12)
        }

        return new OfficeLeasePeriod(num)
    }
    
}