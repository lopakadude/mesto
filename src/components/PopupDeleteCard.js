import Popup from "./Popup";

export  default class PopupDeleteCard extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._form = this._popup.querySelector('.popup__form');
	}

	setOperation(callback) {
    this._operation = callback;
  }

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			this._operation();
		})
	}
}