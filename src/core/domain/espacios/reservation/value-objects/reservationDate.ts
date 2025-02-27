export class ReservationDate {
  readonly date: string;

  private constructor(date: string) {
      if (!this.isValidDate(date)) {
          throw new Error("La fecha debe tener el formato ISO 8601 (YYYY-MM-DD).");
      }
      this.date = date;
  }

  private isValidDate(date: string): boolean {
      // Asegura que el formato de la fecha sea correcto, pero no valida si la fecha es real
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      return dateRegex.test(date);
  }

  static create(date: string): ReservationDate {
      const dateString = date.trim();
      return new ReservationDate(dateString);
  }


}
