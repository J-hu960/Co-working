import { Id } from "../../../id";

export class OfficeId extends Id{
    private constructor(value: string) {
        super(value)
      }
    
      static new(): OfficeId {
        return new OfficeId(this.generate())
      }
}