import { TODAY, DAYS_CONVERTER } from "/globalVariables.js";

export function calculateResult(inputDate) {
  let yearsResult = Math.floor((TODAY - inputDate) / DAYS_CONVERTER / 365);
  let isLeapYear = Math.floor(yearsResult / 4);

  let monthsResult = Math.floor(
    ((TODAY - inputDate) / DAYS_CONVERTER - yearsResult * 365) / 30
  );

  let daysResult = Math.floor(
    (TODAY - inputDate) / DAYS_CONVERTER -
      (yearsResult * 365 + monthsResult * 30) -
      isLeapYear
  );
  if (isLeapYear >= 30) {
    monthsResult = Math.floor(
      ((TODAY - inputDate) / DAYS_CONVERTER - yearsResult * 365) / 30 -
        isLeapYear / 30
    );

    daysResult = Math.floor(
      (TODAY - inputDate) / DAYS_CONVERTER -
        (yearsResult * 365 + monthsResult * 30) -
        isLeapYear
    );
  }

  return [daysResult, monthsResult, yearsResult];
}
