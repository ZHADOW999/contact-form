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

queryTypeInputs.forEach((input) => {
  input.addEventListener('click', (e) => {
    queryTypeInputs.forEach((input) => {
      input.parentNode.classList.remove('bg-LightGreen', 'border-Green', 'border-[1.5px]');
    });
    e.target.parentNode.classList.add('bg-LightGreen', 'border-Green', 'border-[1.5px]');
    queryTypeError.textContent = '';
  });
});

firstNameInput.addEventListener('input', () => {
  if (firstNameInput.value.trim() === '') {
    firstNameError.textContent = 'Please enter your first name';
  } else {
    firstNameError.textContent = '';
  }
});

lastNameInput.addEventListener('input', () => {
  if (lastNameInput.value.trim() === '') {
    lastNameError.textContent = 'Please enter your last name';
  } else {
    lastNameError.textContent = '';
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
  } else {
    emailError.textContent = '';
  }
});

messageInput.addEventListener('input', () => {
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'This field is required';
  } else {
    messageError.textContent = '';
  }
});

consentInput.addEventListener('change', () => {
  if (consentInput.checked) {
    consentError.textContent = '';
  }
});

form.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    validateForm();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

function validateForm() {
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

    // Scroll to top and show success message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      successMessage.classList.add('opacity-100'); // or any other class to show the message
    }, 3000);

    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    queryTypeInputs.forEach((input) => {
      input.checked = false;
      input.parentNode.classList.remove('bg-LightGreen', 'border-Green', 'border-[1.5px]');
    });
    messageInput.value = '';
    consentInput.checked = false;
  }
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
