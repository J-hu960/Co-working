import { Response } from 'express'

import { InvalidIdError } from '../../domain/invalid-id.error'
import { HotdesktopAlreadyExistsError } from '../../domain/espacios/hotDesktop/hotdesktop-already-exists.error'
import { HttpStatus } from '@nestjs/common'
import { BaseError } from '../../domain/error'
import { InvalidNumberError } from '../../domain/espacios/hotDesktop/invalid-number.error'
import { InvalidMeetingRoomCapacityError } from 'src/core/domain/espacios/meeting-room/excepcions/invalid-capacity.error'
import { AlreadyExistsMeetingNameError } from 'src/core/domain/espacios/meeting-room/excepcions/already-exists-name.error'
import { InvalidMeetingRoomNameError } from 'src/core/domain/espacios/meeting-room/excepcions/invalid-name.error'
import { OfficeAlreadyExistsError } from 'src/core/domain/espacios/office/excepcions/OfficeAlreadyExistsError'
import { InvalidOfficeNumberError } from 'src/core/domain/espacios/office/excepcions/InvalidOfficeNumberError'
import { NotAvailableMeetingroom } from 'src/core/domain/espacios/reservation/excepcions/NotAvailableMeetingroom'
import { DuplicateHotdesktopReservationError } from 'src/core/domain/espacios/hotdesktopReservation/excepcions/duplicate-reservatio.error'
import { BadInpurHotdesktopReservationError } from 'src/core/domain/espacios/hotdesktopReservation/excepcions/bad-input.error'
import { BadinputMembershipError } from 'src/core/domain/memberships/membership/excepcions/InvalidMembershipInput.error'
import { DuplicateMembershipError } from 'src/core/domain/memberships/membership/excepcions/DuplicateMembershipError.error'

export class ErrorResponse {
  code: string
  message: string

  static fromBaseError(error: BaseError): ErrorResponse {
    return {
      code: error.code,
      message: error.message,
    }
  }

  static internalServerError(error: Error): ErrorResponse {
    return {
      code: 'internal-server-error',
      message: error.message,
    }
  }
}

export const catchError = (error: Error, response: Response) => {
  if (!(error instanceof BaseError)) {
    response.status(500).json(ErrorResponse.internalServerError(error))
    return
  }

  if (error instanceof InvalidIdError) {
    response.status(409).json(ErrorResponse.fromBaseError(error))
    return
  }

  if (error instanceof HotdesktopAlreadyExistsError) {
    response.status(HttpStatus.CONFLICT).json(ErrorResponse.fromBaseError(error))
    return
  }

  if (error instanceof InvalidNumberError) {
    response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
    return
  }

  if(error instanceof InvalidMeetingRoomCapacityError){
    response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
  }

  if(error instanceof AlreadyExistsMeetingNameError){
    response.status(HttpStatus.CONFLICT).json(ErrorResponse.fromBaseError(error))
  }

  if(error instanceof InvalidMeetingRoomNameError){
    response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
  }

  if(error instanceof OfficeAlreadyExistsError){
    response.status(HttpStatus.CONFLICT).json(ErrorResponse.fromBaseError(error))
  }

  if(error instanceof InvalidOfficeNumberError){
    response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
  } 
//

if(error instanceof InvalidIdError){
  response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
} 

if(error instanceof NotAvailableMeetingroom){
  response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
}

if(error instanceof DuplicateHotdesktopReservationError){
  response.status(HttpStatus.CONFLICT).json(ErrorResponse.fromBaseError(error))
} 

if(error instanceof BadInpurHotdesktopReservationError){
  response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
} 

if(error instanceof BadinputMembershipError){
  response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
} 

if(error instanceof DuplicateMembershipError){
  response.status(HttpStatus.BAD_REQUEST).json(ErrorResponse.fromBaseError(error))
} 


  response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ErrorResponse.fromBaseError(error))


  
  

}