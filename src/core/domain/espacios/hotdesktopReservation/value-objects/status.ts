export type  HotdesktopReservationType =HotdesktopReservationOptions.ACTIVE| HotdesktopReservationOptions.INACTIVE

export enum HotdesktopReservationOptions {
    ACTIVE = "active",
    INACTIVE = "inactive"
}

export class HotdesktopReservationStatus{
    private constructor(status:HotdesktopReservationType){}

    static create(status?:string){
     
        switch (status){
            case HotdesktopReservationOptions.ACTIVE:
                return new HotdesktopReservationStatus(HotdesktopReservationOptions.ACTIVE) 
            case HotdesktopReservationOptions.INACTIVE:
                return new HotdesktopReservationStatus(HotdesktopReservationOptions.INACTIVE)
            default:
                return new HotdesktopReservationStatus(HotdesktopReservationOptions.ACTIVE)
            }
    }
}