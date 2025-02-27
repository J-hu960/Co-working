import { HotdesktopReservationRepository } from "src/core/domain/espacios/hotdesktopReservation/hotdesktopReservation.repository";
import { RegisterHotdesktopReservationCommand } from "./register-reservation.command";
import { DuplicateHotdesktopReservationError } from "src/core/domain/espacios/hotdesktopReservation/excepcions/duplicate-reservatio.error";
import { MembershipAPI } from "src/core/domain/memberships/api";
import { HotdesktopReservation } from "src/core/domain/espacios/hotdesktopReservation/hotdesktopReservation.entity";
import { HotDesktopStatusOptions } from "src/core/domain/espacios/hotDesktop/hotDesktopStatus";
import { Id } from "src/core/domain/id";

export class RegisterHotdesktopReservationCommandHandler{
    constructor(
        private readonly hotdesktopReservationRepository:HotdesktopReservationRepository,
        private readonly membershipApi:MembershipAPI
    ){}

    handle(command:RegisterHotdesktopReservationCommand){
        if(this.hotdesktopReservationRepository.exists(command.userId,command.date)){
            throw DuplicateHotdesktopReservationError.withIdAndDate(command.userId,command.date)
        }


        const membershipResponse = this.membershipApi.getRemainingCreditsForUser(command.userId,command.date);
        
        let isReservationInclueded:boolean = false;

        if(membershipResponse.remainingCredits > 0 ){
            isReservationInclueded = true;
        }
        const userId = Id.fromExisting(command.userId)

        const reservation = HotdesktopReservation.create(
            userId,command.date,HotDesktopStatusOptions.ACTIVE,isReservationInclueded
        )

        this.hotdesktopReservationRepository.save(reservation)

    }
}