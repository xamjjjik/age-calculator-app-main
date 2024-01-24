let today = new Date();
const button = document.getElementById("button");
button.onclick = getBirthday;

function getBirthday() {
  let inputDay = document.getElementById("inputDay").value;
  let inputMonth = document.getElementById("inputMonth").value;
  let inputYear = document.getElementById("inputYear").value;
  console.log(
    (today - calculateTime(inputDay, inputMonth, inputYear)) / 1000 / 3600 / 24
  );
}

let yearsResult = document.getElementById("yearsResult").outerHTML;
let monthsResult = document.getElementById("monthsResult").outerHTML;
let daysResult = document.getElementById("daysResult").outerHTML;

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
