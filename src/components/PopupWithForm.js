import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
	constructor(popupSelector, { callbackOfSubmit }) {
		super(popupSelector);
		this._form = this._popup.querySelector('.popup__form');
		this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
		this._callbackOfSubmit = callbackOfSubmit;
	}
	_getInputValues() {
		const inputValues = {};
		this._inputList.forEach((input) => {
			inputValues[input.name] = input.value
		})
		return inputValues
	}

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			const inputValues = this._getInputValues();
			this._callbackOfSubmit(inputValues);
		})
	}

	closePopup() {
		super.closePopup();
		this._form.reset();
	}
}