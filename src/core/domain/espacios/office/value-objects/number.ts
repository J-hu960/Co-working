import { InvalidOfficeNumberError } from "../excepcions/InvalidOfficeNumberError"

export class OfficeNumber{
    private constructor(readonly num:number){}

    static create(num:number){
        if(!num || num <= 0){
            throw InvalidOfficeNumberError.withValue(num)
        }

        return new OfficeNumber(num)
    }

    equals(num:OfficeNumber):boolean{
        return num.num === this.num

    }
}