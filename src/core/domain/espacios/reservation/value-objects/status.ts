export type  ReservationStatusType =ReservationStatusOptions.ACTIVE| ReservationStatusOptions.INACTIVE

export enum ReservationStatusOptions {
    ACTIVE = "active",
    INACTIVE = "inactive"
}

export class ReservationStatus{
    private constructor(status:ReservationStatusType){}

    static create(status?:string){
     
        switch (status){
            case ReservationStatusOptions.ACTIVE:
                return new ReservationStatus(ReservationStatusOptions.ACTIVE) 
            case ReservationStatusOptions.INACTIVE:
                return new ReservationStatus(ReservationStatusOptions.INACTIVE)
            default:
                return new ReservationStatus(ReservationStatusOptions.ACTIVE)
            }
    }
}