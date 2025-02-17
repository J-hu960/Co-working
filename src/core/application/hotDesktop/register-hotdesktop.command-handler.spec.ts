import { HotdesktopRepository } from "../../domain/hotDesktop/hotdesktop.repository"
import { RegisterHotDesktopCommand } from "./register-hotDesktop.command"
import { RegisterHotdesktopCommadHandler } from "../hotDesktop/register-desktop.command-handler"
import { HotDesktopEntity } from "../../domain/hotDesktop/hotDesktop"
import { HotdesktopInMemory } from "../../infrastructure/hotdesktop/hotdesktop-in-memory"
import { HotdesktopAlreadyExistsError } from "../../domain/hotDesktop/hotdesktop-already-exists.error"
import { InvalidNumberError } from "../../domain/hotDesktop/invalid-number.error"



describe('RegisterUserCommandHandler', () => {
  let repository: HotdesktopRepository
  let handler: RegisterHotdesktopCommadHandler

  const prepareScenario = () => {
    repository = new HotdesktopInMemory()
    handler = new RegisterHotdesktopCommadHandler(repository)

  }

  const createCommandFromNumber = (num: number) => {
    return new RegisterHotDesktopCommand(num)
  }

  afterEach(() => {
    repository.setHotDesktops([])
  })

  describe('When the number is valid', () => {
    beforeEach(() => {
      prepareScenario()
    })

    it('should register the new hot desktop', () => {
    
      const hotDesktop = HotDesktopEntity.create(10)
      const command:RegisterHotDesktopCommand = createCommandFromNumber(10)

      handler.handle(command)

      expect(repository.exists(hotDesktop.uniqueNumber)).toBeTruthy()
    })
  })

  describe('When the hot desktop already exists', () => {
    const hotDesktop = HotDesktopEntity.create(10)

    beforeEach(() => {
      prepareScenario()

      repository.setHotDesktops([hotDesktop])
    })

    it('should throw an error', () => {
     const command = createCommandFromNumber(10)

      expect(() => handler.handle(command)).toThrow(HotdesktopAlreadyExistsError)
 })

    it('should not save the new hot', () => {
      const command = createCommandFromNumber(10)
      try {
        handler.handle(command)
      } catch (error) {
        expect(error).toBeDefined()
      }
    })
 })

 describe('When the hot desktop number is negative', () => {

    beforeEach(() => {
      prepareScenario()
    })

    it('should throw an error', () => {
     const command = createCommandFromNumber(-10)

      expect(() => handler.handle(command)).toThrow()
 })

    it('should not save the new hot', () => {
      const command = createCommandFromNumber(-10)
      
      expect(()=>handler.handle(command)).toThrow(InvalidNumberError)

    })
 })


})