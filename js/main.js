// input fields selection
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

// form info message display
const firstNameInfo = document.querySelector(".first_name > span");
firstNameInfo.classList.add("info");
const lastNameInfo = document.querySelector(".last_name > span");
lastNameInfo.classList.add("info");
const emailInfo = document.querySelector(".email > span");
emailInfo.classList.add("info");
const phoneNumberInfo = document.querySelector(".phone_number > span");
phoneNumberInfo.classList.add("info");
const passwordInfo = document.querySelector(".password > span");
passwordInfo.classList.add("info");
const confirmPasswordInfo = document.querySelector(".confirm_password > span");
confirmPasswordInfo.classList.add("info");

// regex variables
// const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
// const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

// first name validation
firstName.addEventListener("focusout", () => {
  if (firstName.value.length <= 0) {
    firstNameInfo.textContent = "This input field is required";
  } else if (firstName.value.length <= 1) {
    firstNameInfo.textContent =
      "Input field must be at least 2 characters long";
  } else {
    firstNameInfo.textContent = "This field has been validated validated";
  }
});

// last name validation
lastName.addEventListener("focusout", () => {
  if (lastName.value.length <= 0) {
    lastNameInfo.textContent = "This input field is required";
  } else if (lastName.value.length <= 1) {
    lastNameInfo.textContent = "Input field must be at least 2 characters long";
  } else {
    lastNameInfo.textContent = "This field has been successfully validated";
  }
});

// email address validation
email.addEventListener("focusout", () => {
  // const isValidEmail = emailRegex.test(email.value);
  if (email.value.length === "") {
    emailInfo.textContent = "This input field is required";
  } else if (isValidEmail) {
    emailInfo.textContent = "This field has been successfully validated";
  } else if (email.value.length <= 1) {
    emailInfo.textContent = "Input field must be at least 2 characters long";
  } else {
    emailInfo.textContent = "This field has been successfully validated";
  }
});

// phone number validation
phoneNumber.addEventListener("focusout", () => {
  //  const isValidPhone = emailRegex.test(phoneNumber.value);
  if (phoneNumber.value === "") {
    phoneNumberInfo.textContent = "Please provide a valide phone number";
  } else {
    phoneNumberInfo.textContent = "This field has been successfully validated";
  }
});

const validateForm = () => {
  // password validation
  if (password.value !== confirmPassword.value) {
    passwordInfo.textContent = "Password do not matche !";
    return false;
  } else if (password.value === "" || confirmPassword.value === "") {
    passwordInfo.textContent = "Password field can not be empty";
    return false;
  } else {
    passwordInfo.textContent = "Password has been created successfully!";
    return true;
  }
};