import { InvalidNumberError } from "./invalid-number.error"

export class HotdesktopUniqueNumber{
    
    constructor(private readonly value:number){}


    static create(value:number):HotdesktopUniqueNumber{
        if(value <= 0){
            throw InvalidNumberError.withInvalidValue(value)
        }
        return new HotdesktopUniqueNumber(value)
    }

     equals(value:HotdesktopUniqueNumber,):boolean{
        return value.value === this.value
    }
}