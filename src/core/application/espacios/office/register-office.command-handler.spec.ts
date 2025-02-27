import { RegisterOfficeCommandHandler } from "./register-office.command-handler"
import { OfficeInmemory } from "../../../infrastructure/espacios/office/office-inmemory"
import { RegisterOfficeCommand } from "./register-office.command"
import { Office } from "../../../domain/espacios/office/Office"
import { OfficeAlreadyExistsError } from "../../../domain/espacios/office/excepcions/OfficeAlreadyExistsError"
import { InvalidOfficeNumberError } from "../../../domain/espacios/office/excepcions/InvalidOfficeNumberError"

describe('Register meeting room command handler', () => {
  let repository: OfficeInmemory
  let handler: RegisterOfficeCommandHandler

  const prepareScenario = () => {
    repository = new OfficeInmemory()
    handler = new RegisterOfficeCommandHandler(repository)

  }

  const createCommandFromParams = (lease:number,number: number,status:string) => {
    return new RegisterOfficeCommand(lease,number,status)
  }

  afterEach(() => {
    repository.clear()
  })

  describe('When the input is valid', () => {
    beforeEach(() => {
      prepareScenario()
    })

    it('should register the new office', () => {
    
      const office = Office.new(1,10,"active")
      const command:RegisterOfficeCommand = createCommandFromParams(10,1,"active")
      handler.handle(command)
      repository.print()
      expect(repository.exists(office.number)).toBeTruthy()
    })
  })

  describe('When the  office already exists', () => {
    const office = Office.new(1,10,"active")

    beforeEach(() => {
      prepareScenario()
      repository.save(office)
    })

    it('should throw an error', () => {
      const command:RegisterOfficeCommand = createCommandFromParams(1,10,"active")
      handler.handle(command)
      expect(() => handler.handle(command)).toThrow(OfficeAlreadyExistsError)
 })


 })


 describe('When the number is negative', () => {

    beforeEach(() => {
      prepareScenario()
    })

    it('should throw an error', () => {
      const command:RegisterOfficeCommand = createCommandFromParams(1,-10,"active")
      expect(() => handler.handle(command)).toThrow(InvalidOfficeNumberError)
 })

    
 })




})