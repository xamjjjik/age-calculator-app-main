import { TODAY, DAYSCONVERTER } from "/globalVariables.js";

export function calculateResult(inputDate) {
  let yearsResult = Math.floor((TODAY - inputDate) / DAYSCONVERTER / 365);
  let isLeapYear = Math.floor(yearsResult / 4);
  let monthsResult;
  let daysResult;
  if (isLeapYear < 30) {
    monthsResult = Math.floor(
      ((TODAY - inputDate) / DAYSCONVERTER - yearsResult * 365) / 30
    );

    daysResult = Math.floor(
      (TODAY - inputDate) / DAYSCONVERTER -
        (yearsResult * 365 + monthsResult * 30) -
        isLeapYear
    );
  } else {
    monthsResult = Math.floor(
      ((TODAY - inputDate) / DAYSCONVERTER - yearsResult * 365) / 30 -
        isLeapYear / 30
    );

    daysResult = Math.floor(
      (TODAY - inputDate) / DAYSCONVERTER -
        (yearsResult * 365 + monthsResult * 30) -
        isLeapYear
    );
  }
  console.log(isLeapYear);
  return [daysResult, monthsResult, yearsResult];
}
