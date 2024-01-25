let userName = prompt("Enter Username:");

if (userName === "Admin") {
  let password = prompt("Enter Password:");
  if (password === "TheMaster") {
    alert("Welcome!");
  } else if (password === null || password === "") {
    alert("Canceled.");
  } else {
    alert("Wrong password");
  }
} else if (userName === null || userName === "") {
  alert("Canceled.");
} else {
  alert("i don't know you");
}
