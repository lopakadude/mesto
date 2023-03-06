const validationSettings = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit',
	inactiveSubmitClass: 'popup__submit_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible',
}

const showInputError = (formElement, inputElement, errorMessage, validationSettings) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(validationSettings.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(validationSettings.errorClass);
};

const hideInputError = (formElement, inputElement, validationSettings) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(validationSettings.inputErrorClass);
	errorElement.classList.remove(validationSettings.errorClass);
	errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validationSettings) => {
	if (!inputElement.validity.valid) {
		showInputError(formElement, inputElement, inputElement.validationMessage, validationSettings);
	} else {
		hideInputError(formElement, inputElement, validationSettings);
	}
};

const setEventListeners = (formElement, validationSettings) => {
	const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
	const submitButton = formElement.querySelector(validationSettings.submitButtonSelector);
	inputList.forEach((inputElement) => {
		toggleButtonState(inputList, submitButton, validationSettings);
		inputElement.addEventListener('input', function () {
			checkInputValidity(formElement, inputElement, validationSettings);
			toggleButtonState(inputList, submitButton, validationSettings);
		});
	});
};

const toggleButtonState = (inputList, submitButton, validationSettings) => {
	if (hasInvalidInput(inputList)) {
		submitButton.classList.add(validationSettings.inactiveSubmitClass);
		submitButton.disabled = true;
	} else {
		submitButton.classList.remove(validationSettings.inactiveSubmitClass);
		submitButton.disabled = false;
	}
}

const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !inputElement.validity.valid;
	})
}

const enableValidation = (validationSettings) => {
	const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener('submit', function (evt) {
			evt.preventDefault();
		});
		setEventListeners(formElement, validationSettings);
	});
};

const resetError = (formElement, validationSettings) => {
	const inputList = Array.from(formElement.querySelectorAll(validationSettings.inputSelector));
	const submitButton = formElement.querySelector(validationSettings.submitButtonSelector);
	inputList.forEach((inputElement) => {
		hideInputError(formElement, inputElement, validationSettings);
	})
	toggleButtonState(inputList, submitButton, validationSettings);
}

enableValidation(validationSettings);
