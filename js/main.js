// nav responsive
const tombol = document.querySelector(".nav-click");
const menu = document.querySelector(".menu-items");

tombol.addEventListener("click", () => {
  menu.classList.toggle("aktif");
});

showName();

// Name Home
function showName() {
  let name = prompt("Please enter your name:");

  if (name != "") {
    document.getElementById("name_home").innerHTML = name;
  } else {
    document.getElementById("name_home").innerHTML = "Not Name";
  }
}

const form = document.getElementById("form-message-me");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("full-name").value.trim();
  const birth = document.getElementById("date-birth").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value.trim();

  let date = new Date().toString();
  let outName = name;
  let outBith = birth;
  let outEmail = email;
  let outMessage = message;

  if (outName == "" && outBith == "" && (outEmail == "") & (outMessage == "")) {
    alert("Field not found!");
  } else {
    alert("Current Time: " + date + "\n\n" + "Full Name: " + outName + "\n" + "Date of Birth: " + outBith + "\n" + "Gander: " + "null" + "\n" + "Email: " + outEmail + "\n" + "Message: " + message);
  }
});
