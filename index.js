function getBirthday() {
  let inputDay = document.getElementById("inputDay").value;
  let inputMonth = document.getElementById("inputMonth").value;
  let inputYear = document.getElementById("inputYear").value;
  errorInputAlert(inputDay);
  errorInputAlert(inputMonth);
  errorInputAlert(inputYear);
  console.log(inputDay, inputMonth, inputYear);
  console.log(calculateTime(inputDay, inputMonth, inputYear));
}

const button = document.getElementById("button");
button.onclick = getBirthday;

function errorInputAlert(element) {
  if (element !== Number) {
    switch (element) {
      case inputDay:
        document.getElementById("inputDay").className += " error";
        break;
      case inputMonth:
        document.getElementById("inputMonth").className += " error";
        break;
      case inputYear:
        document.getElementById("inputYear").className += " error";
        break;
    }
  }
}

let yearsResult = document.getElementById("yearsResult").outerHTML;
let monthsResult = document.getElementById("monthsResult").outerHTML;
let daysResult = document.getElementById("daysResult").outerHTML;

// console.log(yearsResult, monthsResult, daysResult);

function calculateTime(day, month, year) {
  let d = new Date(year, month - 1, day);
  return d && d.getMonth() + 1 == month && d.getDate() == Number(day);
}
