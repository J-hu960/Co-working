import { Id } from "../../id";

export class HotDesktopId extends Id{
    private constructor(value: string) {
        super(value)
      }
    
      static new(): HotDesktopId {
        return new HotDesktopId(this.generate())
      }
}