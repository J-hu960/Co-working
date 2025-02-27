import { Office } from "./Office";
import { OfficeNumber } from "./value-objects/number";

export interface OfficeRepository{
    save(office:Office):void
    exists(number:OfficeNumber): boolean
}