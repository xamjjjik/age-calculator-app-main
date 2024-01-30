import { today, toDays } from "/globalVariables.js";

export function calculateResult(inputDate) {
  let yearsResult = Math.floor((today - inputDate) / toDays / 365);
  let isLeapYear = Math.floor(yearsResult / 4);
  let monthsResult;
  let daysResult;
  if (isLeapYear < 30) {
    monthsResult = Math.floor(
      ((today - inputDate) / toDays - yearsResult * 365) / 30
    );

    daysResult = Math.floor(
      (today - inputDate) / toDays -
        (yearsResult * 365 + monthsResult * 30) -
        isLeapYear
    );
  } else {
    monthsResult = Math.floor(
      ((today - inputDate) / toDays - yearsResult * 365) / 30 - isLeapYear / 30
    );

    daysResult = Math.floor(
      (today - inputDate) / toDays -
        (yearsResult * 365 + monthsResult * 30) -
        isLeapYear
    );
  }
  return [daysResult, monthsResult, yearsResult];
}
