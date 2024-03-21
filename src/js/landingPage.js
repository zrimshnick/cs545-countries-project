// app.js

const signInButton = document.getElementById("landingPage-sign-in-button");
const userNameField = document.getElementById("landingPage-sign-in-username");
const passwordField = document.getElementById("landingPage-sign-in-password");
const signInEnter = document.getElementById("landingPage-sign-in-enter");

document.addEventListener("DOMContentLoaded", function () {
  signInButton.addEventListener("click", function () {
    signInButton.classList.add("hidden");
    userNameField.classList.remove("hidden");
    passwordField.classList.remove("hidden");
    signInEnter.classList.remove("hidden");
  });
});

signInEnter.addEventListener("click", () => {
  const userNameVal = document.getElementById(
    "landingPage-sign-in-username-field"
  );
  const passwordVal = document.getElementById(
    "landingPage-sign-in-password-field"
  );
  console.log(userNameVal.value);
  console.log(passwordVal.value);
  if (userNameVal.value === "user1" && passwordVal.value === "pwd") {
    window.location.href = "/src/pages/index.html";
  } else {
    console.log("username or password wrong");
    userNameVal.classList.add("passwordWrong");
    passwordVal.classList.add("passwordWrong");

    //console.error;
  }
});

/* function changeHeight() {
  let div = document.getElementById("landingPage-sign-in-container");
  //let currentHeight = div.clientHeight;
  //let newHeight = currentHeight + 5;
  div.style.height = "auto";
} */
