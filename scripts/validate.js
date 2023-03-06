const validationSettings = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
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
    showInputError(formElement, inputElement, errorMessage, validationSettings);
  } else {
    hideInputError(formElement, inputElement, errorMessage, validationSettings);
  }
};




const setEventListeners = (formElement, validationSettings) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
	const submitButton = formElement.querySelector(validationSettings.submitButtonSelector)
  toggleButtonState(inputList, submitButton, validationSettings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationSettings);
      toggleButtonState(inputList, submitButton);
    });
  });
};


const enableValidation = (validationSettings) => {
  const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
		setEventListeners(formElement,validationSettings)
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const toggleButtonState = (inputList, submitButton, validationSettings) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(validationSettings.inactiveButtonClass)
  }
  
  else {
    submitButton.classList.remove(validationSettings.inactiveButtonClass)
  }
}

enableValidation(validationSettings);
