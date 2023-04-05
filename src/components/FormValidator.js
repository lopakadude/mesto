export default class FormValidator {
	constructor(formElement, validationSettings) {
		this._validationSettings = validationSettings;
		this._formElement = formElement;
		this._inputList = Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector));
		this._submitButton = this._formElement.querySelector(this._validationSettings.submitButtonSelector);
	}

	_showInputError = (inputElement, errorMessage) => {
		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		inputElement.classList.add(this._validationSettings.inputErrorClass);
		errorElement.textContent = errorMessage;
		errorElement.classList.add(this._validationSettings.errorClass);
	};

	_hideInputError = (inputElement) => {
		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		inputElement.classList.remove(this._validationSettings.inputErrorClass);
		errorElement.classList.remove(this._validationSettings.errorClass);
		errorElement.textContent = '';
	};

	_checkInputValidity = (inputElement) => {
		if (!inputElement.validity.valid) {
			this._showInputError(inputElement, inputElement.validationMessage);
		} else {
			this._hideInputError(inputElement);
		}
	};

	_hasInvalidInput = () => {
		return this._inputList.some((inputElement) => {
			return !inputElement.validity.valid;
		})
	}

	_toggleButtonState = () => {
		if (this._hasInvalidInput()) {
			this._submitButton.classList.add(this._validationSettings.inactiveSubmitClass);
			this._submitButton.disabled = true;
		} else {
			this._submitButton.classList.remove(this._validationSettings.inactiveSubmitClass);
			this._submitButton.disabled = false;
		}
	}

	_setEventListeners = () => {

		this._inputList.forEach((inputElement) => {
			this._toggleButtonState();
			inputElement.addEventListener('input', () => {
				this._checkInputValidity(inputElement);
				this._toggleButtonState();
			});
		});
	};

	resetValidation = () => {
		this._inputList.forEach((inputElement) => {
			this._hideInputError(inputElement);
		})
		this._toggleButtonState();
	}

	enableValidation = () => {
		this._formElement.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});
		this._setEventListeners();
	};
}













