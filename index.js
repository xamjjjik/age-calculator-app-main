let today = new Date();
const button = document.getElementById("button");
button.onclick = getBirthday;

function getBirthday() {
  let inputDay = document.getElementById("inputDay").value;
  let inputMonth = document.getElementById("inputMonth").value;
  let inputYear = document.getElementById("inputYear").value;
  let toDays = 3600000 * 24 * 365;
  let inputDate = calculateTime(inputDay, inputMonth, inputYear);
  if (inputDate !== NaN && inputDate !== undefined) {
    let yearsResult = (today - inputDate) / toDays;

    let monthsResult = (yearsResult - Math.floor(yearsResult)) * 12;
    let daysResult = (monthsResult % 30) * 10;
    let newDays = Math.floor(daysResult);
    let newMonths = Math.floor(monthsResult);
    let newYears = Math.floor(yearsResult);
    if (newDays < 0 || newMonths < 0 || newYears < 0) {
      returnToDefault();
      document.getElementById(
        "error-text"
      ).innerHTML = `<div class="error-fields">Must be in the past</div> <div class="error-fields">Must be in the past</div> <div class="error-fields">Must be in the past</div>`;
    } else {
      setNewInterval(newYears, newMonths, newDays);
      document.getElementById("inputDay").classList.remove("error");
      document.getElementById("inputMonth").classList.remove("error");
      document.getElementById("inputYear").classList.remove("error");
      document.getElementById("error-text").innerHTML = "";
    }
  } else {
    returnToDefault();
    document.getElementById(
      "error-text"
    ).innerHTML = `<div class="error-fields">Enter some number</div> <div class="error-fields">Enter some number</div> <div class="error-fields">Enter some number</div>`;
  }
}
function setNewInterval(years, months, days) {
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
  }
}

function returnToDefault() {
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
