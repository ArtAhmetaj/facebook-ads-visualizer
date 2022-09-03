import DateService from "@/services/business/date/date-service";
import * as dateFns from "date-fns";

export class FnsDateService implements DateService {
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

  getAllDatesInRangeForDuration(
    firstDate: Date,
    secondDate: Date,
    duration: Duration
  ): Date[] {
    let nextDate = dateFns.add(firstDate, duration);
    const newDates = [firstDate, nextDate];
    while (
      !(
        dateFns.isEqual(nextDate, secondDate) ||
        dateFns.isAfter(dateFns.add(nextDate, duration), secondDate)
      )
    ) {
      nextDate = dateFns.add(nextDate, duration);
      newDates.push(nextDate);
    }

    return newDates;
  }
}

export default new FnsDateService();
