import { Office } from "../../../domain/espacios/office/Office";
import { OfficeRepository } from "../../../domain/espacios/office/repository";
import { OfficeNumber } from "../../../domain/espacios/office/value-objects/number";

export class OfficeInmemory implements OfficeRepository{

    private offices:Office[] = [];
    save(office: Office): void {
        this.offices.push(office);
    }

    exists(num: OfficeNumber): boolean {
        return this.offices.some(office => office.number.equals(num))
    }

    clear():void{
        this.offices = [];
    }

    add(office:Office){
        this.offices.push(office)
    }

    print(){
        console.log(this.offices)
    }


}

export const OFFICE_REPOSITORY = Symbol('officeRepository')