import { OfficeRepository } from "../../../domain/espacios/office/repository";
import { RegisterOfficeCommand } from "./register-office.command";
import { OfficeAlreadyExistsError } from "../../../domain/espacios/office/excepcions/OfficeAlreadyExistsError";
import { OfficeNumber } from "../../../domain/espacios/office/value-objects/number";
import { Office } from "../../../domain/espacios/office/Office";
import { Inject } from "@nestjs/common";
import { OFFICE_REPOSITORY } from "../../../infrastructure/espacios/office/office-inmemory";

export class RegisterOfficeCommandHandler{
    constructor( @Inject(OFFICE_REPOSITORY)  private readonly officeRepository:OfficeRepository){}
    
    handle(command:RegisterOfficeCommand){
        const number = OfficeNumber.create(command.number)

        if(this.officeRepository.exists(number)){
            throw OfficeAlreadyExistsError.withValue(command.number)
        }

        const office = Office.new(command.number,command.leasePeriod,command.status)

        this.officeRepository.save(office)
    }
}