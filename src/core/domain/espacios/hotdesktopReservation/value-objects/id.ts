import { Id } from "src/core/domain/id"
export class HotdesktopReservationID extends Id{
    private constructor(value: string) {
        super(value)
      }
    
      static new(): HotdesktopReservationID {
        return new HotdesktopReservationID(this.generate())
      }
}