import { Id } from "../../../id";

export class ReservationId extends Id{
    private constructor(value: string) {
        super(value)
      }
    
      static new(): ReservationId {
        return new ReservationId(this.generate())
      }
}