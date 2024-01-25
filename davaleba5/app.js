let year = prompt("Enter a year:");
if (year % 400 === 0 || (year % 100 != 0 && year % 4 === 0)) {
  alert("It's leap year");
} else {
  alert("It's not leap year");
}
