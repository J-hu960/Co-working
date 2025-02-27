export class ReservationTimestamp {
    
  
    constructor() {}
  
    static getCurrentTimestamp(): string {
      return new Date().toISOString().slice(0, 19); 
    }
  }
  

  