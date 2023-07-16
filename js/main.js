// input elements selection
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
// const submitButton = document.querySelector('button[type^=submit');

// message container
const firstNameContainer = document.querySelector(".first_name");
const lastNameContainer = document.querySelector(".last_name");
const emailContainer = document.querySelector(".email");
const phoneNumberContainer = document.querySelector(".phone_number");
const passwordContainer = document.querySelector(".password");
const confirmPasswordContainer = document.querySelector(".confirm_password");

// form info message display
const firstNameUserInfo = document.createElement("span");
firstNameUserInfo.classList.add("info");
firstNameContainer.append(firstNameUserInfo);

const lastNameUserInfo = document.createElement("span");
lastNameUserInfo.classList.add("info");
lastNameContainer.append(lastNameUserInfo);

const emailUserInfo = document.createElement("span");
emailUserInfo.classList.add("info");
emailContainer.append(emailUserInfo);

const phoneNumberUserInfo = document.createElement("span");
phoneNumberUserInfo.classList.add("info");
phoneNumberContainer.append(phoneNumberUserInfo);

const passwordUserInfo = document.createElement("span");
passwordUserInfo.classList.add("info");
passwordContainer.append(passwordUserInfo);

const confirmPasswordUserInfo = document.createElement("span");

confirmPasswordUserInfo.classList.add("info");
confirmPasswordContainer.append(confirmPasswordUserInfo);

// form events listeners
// const filledInMsg = 'Please fill in the field correctly';
// firstName

const validateForm = () => {
  if (password.value !== confirmPassword.value) {
    console.log("Password do not matche !");
    return false;
  } else {
    console.log("Password has been created successfully!");
    return true;
  }
};

document.querySelector("body").addEventListener("submit", (e) => {
  if (
    firstNameUserInfo.textContent.length > 0 ||
    lastNameUserInfo.textContent.length > 0 ||
    emailUserInfo.textContent.length > 0 ||
    passwordUserInfo.textContent.length > 0 ||
    confirmPasswordUserInfo.textContent.length > 0
  ) {
    e.preventDefault();
  }
});
