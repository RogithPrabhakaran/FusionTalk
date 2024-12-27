// script.js

// Get elements
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginPopup = document.getElementById("login-popup");
const signupPopup = document.getElementById("signup-popup");
const logintoSignup = document.getElementById("sorrysignup");
// Show login popup
loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "flex";
});

// Show signup popup
signupBtn.addEventListener("click", () => {
  signupPopup.style.display = "flex";
});

logintoSignup.addEventListener("click", () => {
  loginPopup.style.display = "none";
  signupPopup.style.display = "flex";
})

// Close popups when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === loginPopup) loginPopup.style.display = "none";
  if (e.target === signupPopup) signupPopup.style.display = "none";
});