class Card {
	constructor(item, templateSelector, handleFullScreenImage) {
		this._name = item.name;
		this._link = item.link;
		this._templateSelector = templateSelector;
		this._handleFullScreenImage = handleFullScreenImage;
	}


	_getTemplate() {
		const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
		
		return cardElement;
	}
	_handleRemoveCardElement = () => {
		this._cardElement.remove()
	}

	_handleLikeCardElement = () => {
		this._buttonLike.classList.toggle('elements__like_active');
	}



	_setEventListeners = () => {
		this._buttonLike.addEventListener('click', this._handleLikeCardElement);
		this._deleteBtn.addEventListener('click', this._handleRemoveCardElement);
		this._image.addEventListener('click', () => {
			this._handleFullScreenImage(this._name, this._link)
		})
	}

	buildCard = () => {
		this._cardElement = this._getTemplate();

		this._buttonLike = this._cardElement.querySelector('.elements__like');
		this._deleteBtn = this._cardElement.querySelector('.elements__delete');
		this._image = this._cardElement.querySelector('.elements__image');

		this._cardElement.querySelector('.elements__name').textContent = this._name;
		this._image.src = this._link;
		this._image.alt = this._name;

		this._setEventListeners();

		return this._cardElement;
	}
}

export {Card}
