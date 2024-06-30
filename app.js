const form = document.querySelector('form');
const firstNameInput = document.querySelector('#FirstNameInput');
const lastNameInput = document.querySelector('#LastNameInput');
const emailInput = document.querySelector('#EamilAddressInput');
const queryTypeInputs = document.querySelectorAll('input[name="query-type"]');
const messageInput = document.querySelector('#MessageInput');
const consentInput = document.querySelector('#consent');

const firstNameError = document.querySelector('#FirstNameError');
const lastNameError = document.querySelector('#LastNameError');
const emailError = document.querySelector('#EmailError');
const queryTypeError = document.querySelector('#query-type-error');
const messageError = document.querySelector('#MessageError');
const consentError = document.querySelector('#ConsentError');

const successMessage = document.querySelector('#successMessage');
const back = document.querySelectorAll('.back');

queryTypeInputs.forEach((input) => {
  input.addEventListener('click', (e) => {
    queryTypeInputs.forEach((input) => {
      input.parentNode.classList.remove('bg-LightGreen','border-Green','border-[1.5px]');
    });
    e.target.parentNode.classList.add('bg-LightGreen','border-Green','border-[1.5px]');
  });
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  // Validate first name
  if (firstNameInput.value.trim() === '') {
    firstNameError.textContent = 'Please enter your first name';
    isValid = false;
  } else {
    firstNameError.textContent = '';
  }

  // Validate last name
  if (lastNameInput.value.trim() === '') {
    lastNameError.textContent = 'Please enter your last name';
    isValid = false;
  } else {
    lastNameError.textContent = '';
  }

  // Validate email
  if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Validate query type
  let queryTypeSelected = false;
  queryTypeInputs.forEach((input) => {
    if (input.checked) {
      queryTypeSelected = true;
    }
  });

  if (!queryTypeSelected) {
    queryTypeError.textContent = 'Please select a query type';
    isValid = false;
  } else {
    queryTypeError.textContent = '';
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'This field is required';
    isValid = false;
  } else {
    messageError.textContent = '';
  }

  // Validate consent
  if (!consentInput.checked) {
    consentError.textContent = 'To submit this form, please consent to being contacted';
    isValid = false;
  } else {
    consentError.textContent = '';
  }

  if (isValid) {
    // Form is valid, display success message
    successMessage.classList.add('translate-y-0');
    setTimeout(() => {
      successMessage.classList.remove('-translate-y-44');
    }, 3000);

    // Add this code to scroll to top and show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      successMessage.classList.add('opacity-100'); // or any other class to show the message
    }, 3000);

    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    queryTypeInputs.forEach((input) => {
    input.checked = false;
  });
  messageInput.value = '';
  consentInput.checked = false;

  }
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}