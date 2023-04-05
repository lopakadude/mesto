import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._popupImage = this._popup.querySelector('.popup-image__image');
		this._popupImageDescription = this._popup.querySelector('.popup-image__name');
	}

	openPopup(name, link) {
		this._popupImage.src = link;
		this._popupImage.alt = name;
		this._popupImageDescription.textContent = name;
		super.openPopup();
	}
}