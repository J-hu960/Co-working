import { Id } from "../id";

export class HotDesktopId extends Id{
    private constructor(value: string) {
        super(value)
      }

      static create(value: string): HotDesktopId {
        this.guardValidId(value)
        return new HotDesktopId(value)
      }
    
      static new(): HotDesktopId {
        return new HotDesktopId(Id.generate())
      }
}