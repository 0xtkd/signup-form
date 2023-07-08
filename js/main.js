// console.log('empty')
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone_number');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm_password');
const submitButton = document.querySelector('button[type^=submit');

// warning message;
const firstNameWarningMsg = document.querySelector('.first_name > .warning');
const lastNameWarningMsg = document.querySelector('.last_name > .warning');
const emailWarningMsg = document.querySelector('.email > .warning');
const passwordWarningMsg = document.querySelector('.password > .warning');
const confirmPasswordWarningMsg = document.querySelector(
    '.confirm_password > p',
);

submitButton.addEventListener('click', function(e) {
  if (
    firstNameWarningMsg.textContent.length > 0 ||
    lastNameWarningMsg.textContent.length > 0 ||
    emailWarningMsg.textContent.length > 0 ||
    passwordWarningMsg.textContent.length > 0 ||
    confirmPasswordWarningMsg.textContent.length > 0
  ) {
    e.preventDefault();
  }
});
