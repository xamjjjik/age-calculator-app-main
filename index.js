import { checkError, removeError, resetToDefault } from "/error.js";
import { calculateResult } from "/calculate.js";

//ПЕРЕДЕЛАТЬ МАТЕМАТИКУ!!!

const button = document.getElementById("button");
button.onclick = getBirthday;

function getBirthday() {
  removeError();
  let inputDay = document.getElementById("inputDay").value;
  let inputMonth = document.getElementById("inputMonth").value;
  let inputYear = document.getElementById("inputYear").value;

  let inputDate = new Date(inputYear, inputMonth, inputDay);
  let result = calculateResult(inputDate);
  if (checkError(inputDay, inputMonth, inputYear)) {
    resetToDefault();
    return;
  }
  setNewInterval(result[0], result[1], result[2]);
}

function setNewInterval(days, months, years) {
  document.getElementById(
    "yearsResult"
  ).innerHTML = `${years} <span class="color-text">years</span>`;
  document.getElementById(
    "monthsResult"
  ).innerHTML = `${months} <span class="color-text">months</span>`;
  document.getElementById(
    "daysResult"
  ).innerHTML = `${days} <span class="color-text">days</span>`;
}
