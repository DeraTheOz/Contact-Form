'use strict';

// Elements
const form = document.querySelector('.form');
const hiddenMessage = document.querySelector('.hidden');

// Input Fields
const firstName = document.querySelector('input[name="first-name"]');
const lastName = document.querySelector('input[name="last-name"]');
const emailInput = document.getElementById('email');
const queryInput = document.querySelectorAll('.query__input');
const messageInput = document.getElementById('message');
const consentBtn = document.querySelector('consent__btn');
const button = document.querySelector('button');

// Error classes
const firstNameError = document.querySelector('.firstname-error');
const lastNameError = document.querySelector('.lastname-error');
const emailError = document.querySelector('.email-error');
const queryError = document.querySelector('.query-error');
const messageError = document.querySelector('.message-error');
const consentError = document.querySelector('.consent-error');

// Regex
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

// Functions
const handleFirstName = () => {
	if (firstName.value.trim() === '' || firstName.value.trim().length < 3) {
		firstNameError.classList.add('error');
	} else {
		firstNameError.classList.remove('error');
		firstName.value = '';
	}
};

const handleLastName = () => {
	if (lastName.value.trim() === '' || lastName.value.trim().length < 3) {
		lastNameError.classList.add('error');
	} else {
		lastNameError.classList.remove('error');
		lastName.value = '';
	}
};

const handleEmailInput = function () {
	if (
		emailInput.value.trim() === '' ||
		!emailInput.value.trim().match(emailRegex)
	) {
		emailError.classList.add('error');
	} else {
		emailError.classList.remove('error');
		emailInput.value = '';
	}
};

const handleMessageInput = function () {
	if (
		messageInput.value.trim() === '' ||
		messageInput.value.trim().length < 3
	) {
		messageError.classList.add('error');
	} else {
		messageError.classList.remove('error');
		messageInput.value = '';
	}
};

// Event Listeners
button.addEventListener('click', function (e) {
	e.preventDefault();

	handleEmailInput();
	handleFirstName();
	handleLastName();
	handleMessageInput();

	const allValid = ![
		firstNameError,
		lastNameError,
		emailError,
		messageError
	].some(error => error.classList.contains('error'));

	if (allValid) {
		hiddenMessage.classList.add('success');

		setTimeout(function () {
			hiddenMessage.classList.remove('success');
		}, 3000);
	}
});
