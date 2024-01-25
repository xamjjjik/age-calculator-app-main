let today = new Date();
const button = document.getElementById("button");
button.onclick = getBirthday;

function getBirthday() {
  let inputDay = document.getElementById("inputDay").value;
  let inputMonth = document.getElementById("inputMonth").value;
  let inputYear = document.getElementById("inputYear").value;
  let toDays = 3600000 * 24 * 365;
  if (calculateTime(inputDay, inputMonth, inputYear) !== NaN) {
    let yearsResult =
      (today - calculateTime(inputDay, inputMonth, inputYear)) / toDays;

    let monthsResult = (yearsResult - Math.floor(yearsResult)) * 12;
    let daysResult = (monthsResult % 30) * 10;
    let newDays = Math.floor(daysResult);
    let newMonths = Math.floor(monthsResult);
    let newYears = Math.floor(yearsResult);
    setNewInterval(newYears, newMonths, newDays);
  } else {
    document.getElementById("error-text").innerHTML = `Must input a valid date`;
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
// let yearsResult = document.getElementById("yearsResult").outerHTML;
// let monthsResult = document.getElementById("monthsResult").outerHTML;
// let daysResult = document.getElementById("daysResult").outerHTML;

function calculateTime(day, month, year) {
  let d = new Date(year, month - 1, day);
  // day === Number && month === Number && year === Number
  // d && d.getMonth() + 1 == month && d.getDate() == Number(day)
  if (d && d.getMonth() + 1 == month && d.getDate() == Number(day)) {
    return d;
  } else {
    document.getElementById("inputDay").className += " error";

    document.getElementById("inputMonth").className += " error";

    document.getElementById("inputYear").className += " error";
  }
}
