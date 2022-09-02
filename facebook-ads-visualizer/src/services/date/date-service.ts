import { Duration } from "date-fns";
//TODO: using Duration of date-fns breaks inversion
export default interface DateService {
  addDurationOnDate(date: Date, duration: Duration): Date;
  subDurationOnDate(date: Date, duration: Duration): Date;
  compareDates(firstDate: Date, secondDate: Date): number;
}
