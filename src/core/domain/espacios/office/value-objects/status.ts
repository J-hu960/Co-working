export type  OffieStatusType =OffieStatusOptions.ACTIVE| OffieStatusOptions.INACTIVE

export enum OffieStatusOptions {
    ACTIVE = "active",
    INACTIVE = "inactive"
}

export class OfficeStatus{
    private constructor(status:OffieStatusType){}

    static create(status?:string){
     
        switch (status){
            case OffieStatusOptions.ACTIVE:
                return new OfficeStatus(OffieStatusOptions.ACTIVE) 
            case OffieStatusOptions.INACTIVE:
                return new OfficeStatus(OffieStatusOptions.INACTIVE)
            default:
                return new OfficeStatus(OffieStatusOptions.ACTIVE)
            }
    }
}