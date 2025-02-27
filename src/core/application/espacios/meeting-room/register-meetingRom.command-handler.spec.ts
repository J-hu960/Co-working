import { MeetingroomInmemoryRepository } from "../../../infrastructure/espacios/meeting-room/meetingRoom-inmemory"
import { RegisterMeetingRoomCommadHandler } from "./register-meetingRoom.command-handler"
import { MeetingRoom } from "../../../domain/espacios/meeting-room/meetingRoom.entity"
import { AlreadyExistsMeetingNameError } from "../../../domain/espacios/meeting-room/excepcions/already-exists-name.error"
import { InvalidMeetingRoomCapacityError } from "../../../domain/espacios/meeting-room/excepcions/invalid-capacity.error"
import { InvalidMeetingRoomNameError } from "../../../domain/espacios/meeting-room/excepcions/invalid-name.error"
import { RegisterReservationCommand } from "../reservation/register-reservation.command"


describe('Register meeting room command handler', () => {
  let repository: MeetingroomInmemoryRepository
  let handler: RegisterMeetingRoomCommadHandler

  const prepareScenario = () => {
    repository = new MeetingroomInmemoryRepository()
    handler = new RegisterMeetingRoomCommadHandler(repository)

  }

  const createCommandFromParams = (name:string,capacity: number) => {
    return new RegisterMeetingRoomCommand(name,capacity)
  }

  afterEach(() => {
    repository.clear()
  })

  describe('When the name and capacity are valid', () => {
    beforeEach(() => {
      prepareScenario()
    })

    it('should register the new meeting room', () => {
    
      const meetingRoom = MeetingRoom.create("test",10)
      const command:RegisterMeetingRoomCommand = createCommandFromParams("test",10)
      handler.handle(command)
      expect(repository.exists(meetingRoom.name)).toBeTruthy()
    })
  })

  describe('When the meeting room name already exists', () => {
    const meetingRoom = MeetingRoom.create("test",10)

    beforeEach(() => {
      prepareScenario()

      repository.add(meetingRoom)
    })

    it('should throw an error', () => {
     const command = createCommandFromParams("test",10)

      expect(() => handler.handle(command)).toThrow(AlreadyExistsMeetingNameError)
 })


 })

 describe('When the meeting room name is invalid', () => {

    beforeEach(() => {
      prepareScenario()

    })

    it('should throw an error', () => {
     const command = createCommandFromParams("",10)

      expect(() => handler.handle(command)).toThrow(InvalidMeetingRoomNameError)
 })


 })


 describe('When the capacity is negative', () => {

    beforeEach(() => {
      prepareScenario()
    })

    it('should throw an error', () => {
     const command = createCommandFromParams("test",-10)

      expect(() => handler.handle(command)).toThrow(InvalidMeetingRoomCapacityError)
 })

    
 })




})