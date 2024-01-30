import { TODAY } from "/globalVariables.js";

export function checkError(day, month, year) {
  let checker = new Date(year, month - 1, day);
  let isError = false;

  //Проверка введного дня
  if (day == "") {
    document.getElementById("dayError").innerHTML = "This field is required";
    isError = true;
  } else if (day > 31 || day <= 0) {
    document.getElementById("dayError").innerHTML = "Must be a valid day";
    isError = true;
  } else if (checker.getDate() != Number(day)) {
    document.getElementById("dayError").innerHTML = "Must be a valid date";
    isError = true;
  }

  //Проверка введеного месяца
  if (month == "") {
    document.getElementById("monthError").innerHTML = "This field is required";
    isError = true;
  } else if (month > 12 || month <= 0) {
    document.getElementById("monthError").innerHTML = "Must be a valid month";
    isError = true;
  }

  //Проверка введенного года
  if (year == "") {
    document.getElementById("yearError").innerHTML = "This field is required";
    isError = true;
  } else if (checker >= TODAY) {
    document.getElementById("yearError").innerHTML = "Must be in the past";
    isError = true;
  }

  //Покраска полей
  if (isError) {
    document.getElementById("inputDay").className += " error";

    document.getElementById("inputMonth").className += " error";

    document.getElementById("inputYear").className += " error";
  }
  return isError;
}

//Удаление ошибок при повторном вводе
export function removeError() {
  document.getElementById("inputDay").classList.remove("error");
  document.getElementById("inputMonth").classList.remove("error");
  document.getElementById("inputYear").classList.remove("error");
  document.getElementById("dayError").innerHTML = "";
  document.getElementById("monthError").innerHTML = "";
  document.getElementById("yearError").innerHTML = "";
}

//Сброс к начальному состоянию вывода при ошибке
export function resetToDefault() {
  let defaultHTML = [
    (document.getElementById(
      "yearsResult"
    ).innerHTML = `-- <span class="color-text">years</span>`),
    (document.getElementById(
      "monthsResult"
    ).innerHTML = `-- <span class="color-text">months</span>`),
    (document.getElementById(
      "daysResult"
    ).innerHTML = `-- <span class="color-text">days</span>`),
  ];

  return defaultHTML[0], defaultHTML[1], defaultHTML[2];
}
