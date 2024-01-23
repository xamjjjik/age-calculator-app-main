function getBirthday() {
  let inputDay = document.getElementById("day").value;
  let inputMonth = document.getElementById("month").value;
  let inputYear = document.getElementById("year").value;

  console.log(inputDay, inputMonth, inputYear);
}

const button = document.getElementsByClassName("button");
button.addEventListener("click", getBirthday());
