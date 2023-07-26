// input fields selection
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone_number");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

// display form info
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

// prevent form submission
let preventPass = false;
let preventConfPass = false;

// first name validation
firstName.addEventListener("focusout", () => {
  if (firstName.value === "") {
    firstNameInfo.textContent = "This input field is required";
    firstNameInfo.style.color = "red"
    firstName.style.borderColor = "red"
  } else if (firstName.value.length <= 1) {
    firstNameInfo.textContent =
      "Input field must be at least 2 characters long";
    firstNameInfo.style.color = "red"
    firstName.style.borderColor = "red"
  } else {
    firstNameInfo.textContent = "This field has been validated";
    firstNameInfo.style.color = "green"
    firstName.style.borderColor = "green"
  }
});

firstName.addEventListener("focusin", () => {
  if (firstNameInfo.textContent.length >= 1) {
    firstNameInfo.textContent = "";
  }
});

// last name validation
lastName.addEventListener("focusout", () => {
  if (lastName.value.length <= 0) {
    lastNameInfo.textContent = "This input field is required";
    lastNameInfo.style.color = "red"
    lastName.style.borderColor = "red"
  } else if (lastName.value.length <= 1) {
    lastNameInfo.textContent = "Input field must be at least 2 characters long";
    lastNameInfo.style.color = "red"
    lastName.style.borderColor = "red"
  } else if (lastName.value.length <= 1) {
  } else {
    lastNameInfo.textContent = "This field has been successfully validated";
    lastNameInfo.style.color = "green"
    lastName.style.borderColor = "green"
  }
});

lastName.addEventListener("focusin", () => {
  if (lastNameInfo.textContent.length >= 1) {
    lastNameInfo.textContent = "";
  }
});

// email address validation
const validateEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
email.addEventListener("focusout", () => {
  if (email.value === "") {
    emailInfo.textContent = "This input field is required";
    emailInfo.style.color = "red"
    email.style.borderColor = "red"
  } else if (validateEmail.test(email.value) === true) {
    emailInfo.textContent = "Email adress validated";
    emailInfo.style.color = "green"
    email.style.borderColor = "green"
  } else if (validateEmail.test(email.value) === false) {
    emailInfo.textContent = "Please provide a valide email adress";
    emailInfo.style.color = "red"
    email.style.borderColor = "red"
  }
});

email.addEventListener("focusin", () => {
  if (emailInfo.textContent.length >= 1) {
    emailInfo.textContent = "";
  }
});

// phone number validation
const validatePhone = /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g
phoneNumber.addEventListener("focusout", () => {
  if (phoneNumber.value === "") {
    phoneNumberInfo.textContent = "This input field is required";
    phoneNumberInfo.style.color = "red"
    phoneNumber.style.borderColor = "red"
  } else if (validatePhone.test(phoneNumber.value) === true) {
    phoneNumberInfo.textContent = "Your phone number has been validated successfully";
    phoneNumberInfo.style.color = "green"
    phoneNumber.style.borderColor = "green"
  } else if (validatePhone.test(phoneNumber) === false) {
    phoneNumberInfo.textContent = "Please provided a valide phone number"
    phoneNumberInfo.style.color = "red"
    phoneNumber.style.borderColor = "red"
  }
});

phoneNumber.addEventListener("focusin", () => {
  if (phoneNumberInfo.textContent.length >= 1) {
    phoneNumberInfo.textContent = "";
  }
});

// password validation
let passIsFocusOut = false
password.addEventListener("focusout", () => {
  passIsFocusOut = true;
  if (password.value === "") {
    passwordInfo.textContent = "This input field is required";
    passwordInfo.style.color = "red"
    password.style.borderColor = "red"
    preventPass = true
  } else if (tetingPassword.test(password.value) === true) {
    passwordInfo.textContent = "Password matched required form"
    if (passIsFocusOut === true && confPassIsFocusOut === true) {
      if (password.value !== confirmPassword.value) {
        passwordInfo.textContent = "Password do not matched"
        confirmPasswordInfo.textContent = "Password do not matched"
        passwordInfo.style.color = "red"
        password.style.borderColor = "red"
        confirmPasswordInfo.style.color = "red"
        confirmPassword.style.borderColor = "red"
        preventPass = true
      } else if (password.value === confirmPassword.value) {
        passwordInfo.textContent = "Password matched successfully"
        passwordInfo.style.color = "green"
        password.style.borderColor = "green"
        confirmPasswordInfo.style.color = "green"
        confirmPassword.style.color = "green"
      }
    }
  } else if (tetingPassword.test(password.value) === false) {
    passwordInfo.textContent = "Sorry password does not matched our requirement"
    preventPass = true
  }
});

password.addEventListener("focusin", () => {
  if (passwordInfo.textContent.length >= 1) {
    passwordInfo.textContent = "";
  }
});

// confirm password validation
let tetingPassword = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
let confPassIsFocusOut = false
confirmPassword.addEventListener("focusout", () => {
  confPassIsFocusOut = true;
  if (confirmPassword.value.length === 0) {
    confirmPasswordInfo.textContent = "This input field is required"
    confirmPasswordInfo.style.color = "red"
    confirmPassword.style.borderColor = "red"
    preventConfPass = true
  } else if (tetingPassword.test(confirmPassword.value) === true) {
    confirmPasswordInfo.textContent = "Password matched required form"
    if (passIsFocusOut === true && confPassIsFocusOut === true) {
      if (password.value !== confirmPassword.value) {
        passwordInfo.textContent = "Password do not matched"
        confirmPasswordInfo.textContent = "Password do not matched"
        passwordInfo.style.color = "red"
        password.style.borderColor = "red"
        confirmPasswordInfo.style.color = "red"
        confirmPassword.style.borderColor = "red"
        preventConfPass = true
      } else if (password.value === confirmPassword.value) {
        confirmPasswordInfo.textContent = "Password matched successfully"
        passwordInfo.style.color = "green"
        password.style.borderColor = "green"
        confirmPasswordInfo.style.color = "green"
        confirmPassword.style.color = "green"
      }
    }
  } else if (tetingPassword.test(confirmPassword.value) === false) {
    confirmPasswordInfo.textContent = "Sorry password does not matched our requirement"
    preventConfPass = true
  }
});

confirmPassword.addEventListener("focusin", () => {
  if (confirmPasswordInfo.textContent.length >= 1) {
    confirmPasswordInfo.textContent = "";
  }
});

//preventing form being submited whith invalid input
const sendForm = document.querySelector("form");
sendForm.addEventListener("click", (e) => {
  if (preventPass === true || preventConfPass === true) {
    e.preventDefault();
  }
})