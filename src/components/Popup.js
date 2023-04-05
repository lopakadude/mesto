export default class Popup {
	constructor(popupSelector) {
		this._popup = document.querySelector(popupSelector);
		this._handlePopupCloseEsc = this._handlePopupCloseEsc.bind(this)
	}

	openPopup() {
		this._popup.classList.add('popup_opened');
		document.addEventListener('keydown', this._handlePopupCloseEsc);
	}

	closePopup() {
		this._popup.classList.remove('popup_opened');
		document.removeEventListener('keydown', this._handlePopupCloseEsc);
	}

	_handlePopupCloseEsc(evt) {
		if (evt.key === 'Escape') {
			this.closePopup()
		}
	}

	_handleClickOverlay(evt) {
		if (evt.target === evt.currentTarget) {
			this.closePopup(evt.currentTarget)
		}
	}

	setEventListeners() {
		const buttonClose = this._popup.querySelector('.popup__close');
		this._popup.addEventListener('click', (evt) => this._handleClickOverlay(evt));
		buttonClose.addEventListener('click', () => this.closePopup())
	}
} 