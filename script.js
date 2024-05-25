'use strict';

// Elements
const form = document.querySelector('form');
const hiddenMessage = document.querySelector('.hidden');

// Input Fields
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const queryInput = document.querySelectorAll('.query__input');
const messageInput = document.getElementById('message');
const consentBtn = document.getElementById('consent');
const button = document.querySelector('button');

// Error classes
const firstNameError = document.querySelector('.firstname-error');
const lastNameError = document.querySelector('.lastname-error');
const emailError = document.querySelector('.email-error');
const queryError = document.querySelector('.query-error');
const messageError = document.querySelector('.message-error');
const consentError = document.querySelector('.consent-error');

// Regular Expression
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// Functions
const handleFirstName = () => {
	if (firstName.value.trim() === '') {
		firstName.classList.add('form__input-error');
		firstNameError.classList.add('error');
	} else if (firstName.value.trim().length < 3) {
		firstName.classList.add('form__input-error');
		firstNameError.classList.add('error');
		firstNameError.textContent = 'Enter at least 3 characters';
	} else {
		firstName.classList.remove('form__input-error');
		firstNameError.classList.remove('error');
	}
};

const handleLastName = () => {
	if (lastName.value.trim() === '') {
		lastName.classList.add('form__input-error');
		lastNameError.classList.add('error');
	} else if (lastName.value.trim().length < 3) {
		lastName.classList.add('form__input-error');
		lastNameError.classList.add('error');
		lastNameError.textContent = 'Enter at least 3 characters';
	} else {
		lastName.classList.remove('form__input-error');
		lastNameError.classList.remove('error');
	}
};

const handleEmailInput = function () {
	if (
		emailInput.value.trim() === '' ||
		!emailInput.value.trim().match(emailRegex)
	) {
		emailInput.classList.add('form__input-error');
		emailError.classList.add('error');
	} else {
		emailInput.classList.remove('form__input-error');
		emailError.classList.remove('error');
	}
};

const handleMessageInput = function () {
	if (messageInput.value.trim() === '') {
		messageInput.classList.add('form__input-error');
		messageError.classList.add('error');
	} else if (messageInput.value.trim().length < 10) {
		messageInput.classList.add('form__input-error');
		messageError.classList.add('error');
		messageError.textContent = 'Enter at least 10 characters';
	} else {
		messageInput.classList.remove('form__input-error');
		messageError.classList.remove('error');
	}
};

let radioIsChecked;
const handleQuerySelection = function (query) {
	query.forEach(function (radio) {
		if (radio.checked) {
			radioIsChecked = radio.checked;
			return;
		}
	});

	if (radioIsChecked) {
		queryError.classList.remove('error');
	} else {
		queryError.classList.add('error');
	}
};

let consentIsChecked;
const handleConsentSelection = function (query) {
	if (query.checked) {
		consentIsChecked = query.checked;
	}

	if (consentIsChecked) {
		consentError.classList.remove('error');
	} else {
		consentError.classList.add('error');
	}
};

// Reset custom inputs and error message state
const resetCustomInputs = function () {
	radioIsChecked = false;
	consentIsChecked = false;
	firstNameError.textContent = 'This field is required';
	lastNameError.textContent = 'This field is required';
	messageError.textContent = 'This field is required';
};

// Event Listeners
button.addEventListener('click', function (e) {
	e.preventDefault();

	handleEmailInput();
	handleFirstName();
	handleLastName();
	handleMessageInput();

	handleQuerySelection(queryInput);
	handleConsentSelection(consentBtn);

	// check if all inputs are valid
	const allInputsValid = [
		firstNameError,
		lastNameError,
		emailError,
		queryError,
		messageError,
		consentError
	].some(error => error.classList.contains('error'));

	if (!allInputsValid) {
		form.reset();
		resetCustomInputs();
		hiddenMessage.classList.add('success');

		setTimeout(function () {
			hiddenMessage.classList.remove('success');
		}, 5000);
	}
});
