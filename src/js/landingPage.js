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
  ).value;
  const passwordVal = document.getElementById(
    "landingPage-sign-in-password-field"
  ).value;
  console.log(userNameVal);
  console.log(passwordVal);
  if (userNameVal === "user1" && passwordVal === "pwd") {
    window.location.href = "/src/pages/index.html";
  } else {
    userNameField.classList.add("passwordWrong");
    passwordField.classList.add("passwordWrong");

    //console.error;
  }
});
