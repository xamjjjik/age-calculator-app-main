let today = new Date();
let toDays = 3600000 * 24;
const button = document.getElementById("button");
button.onclick = getBirthday;

function getBirthday() {
  let inputDay = document.getElementById("inputDay").value;
  let inputMonth = document.getElementById("inputMonth").value;
  let inputYear = document.getElementById("inputYear").value;

  let inputDate = calculateTime(inputDay, inputMonth, inputYear);
  let result = calculateResult(inputDate);

  if (result[0] < 0 || result[1] < 0 || result[2] < 0) {
    resetToDefault();
    document.getElementById(
      "error-text"
    ).innerHTML = `<div class="error-fields">Must be in the past</div> 
      <div class="error-fields">Must be in the past</div>
       <div class="error-fields">Must be in the past</div>`;
  } else {
    setNewInterval(result[0], result[1], result[2]);
    document.getElementById("inputDay").classList.remove("error");
    document.getElementById("inputMonth").classList.remove("error");
    document.getElementById("inputYear").classList.remove("error");
    document.getElementById("error-text").innerHTML = "";
  }
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

function calculateTime(day, month, year) {
  let d = new Date(year, month - 1, day);

  if (d && d.getMonth() + 1 == month && d.getDate() == Number(day)) {
    return d;
  } else {
    document.getElementById("inputDay").className += " error";

    document.getElementById("inputMonth").className += " error";

    document.getElementById("inputYear").className += " error";

    return;
  }
}

function resetToDefault() {
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

function calculateResult(inputDate) {
  if (inputDate !== NaN && !!inputDate) {
    //проверить работает ли эта хуйня которую денчик там
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
        ((today - inputDate) / toDays - yearsResult * 365) / 30 -
          isLeapYear / 30
      );

      daysResult = Math.floor(
        (today - inputDate) / toDays -
          (yearsResult * 365 + monthsResult * 30) -
          isLeapYear
      );
    }
    return [daysResult, monthsResult, yearsResult];
  } else {
    resetToDefault();
    document.getElementById(
      "error-text"
    ).innerHTML = `<div class="error-fields">Enter some number</div> 
  <div class="error-fields">Enter some number</div> 
  <div class="error-fields">Enter some number</div>`;
  }
}
