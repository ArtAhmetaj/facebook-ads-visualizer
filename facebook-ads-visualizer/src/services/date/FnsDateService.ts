import DateService from "@/services/date/date-service";
import * as dateFns from "date-fns";

class FnsDateService implements DateService {
  addDurationOnDate(date: Date, duration: Duration): Date {
    return dateFns.add(date, duration);
  }

  subDurationOnDate(date: Date, duration: Duration): Date {
    return dateFns.sub(date, duration);
  }

  compareDates(firstDate: Date, secondDate: Date): number {
    if (dateFns.isEqual(firstDate, secondDate)) return 0;
    return dateFns.isBefore(firstDate, secondDate) ? -1 : 1;
  }

  getFormattedDate(date: Date, locale: string): string {
    return date.toLocaleDateString(locale);
  }
}
