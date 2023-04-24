export default class Card {
	constructor(item, templateSelector, handleFullScreenImage, handleFormSubmitDeleteCard, addLike, removeLike, myId) {
		this._name = item.name;
		this._link = item.link;
		this._templateSelector = templateSelector;
		this._handleFullScreenImage = handleFullScreenImage;
		this._handleFormSubmitDeleteCard = handleFormSubmitDeleteCard;
		this._owner = item.owner._id;
		this._cardId = item._id;
		this._myId = myId;
		this._likes = item.likes;
		this._addLike = addLike;
		this._removeLike = removeLike

	}

	_getTemplate() {
		const cardElement = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
		return cardElement;
	}

	_setEventListeners = () => {
		this._buttonLike.addEventListener('click', () => { this._handleSetLikes() })
		this._deleteBtn.addEventListener('click', () => this._handleFormSubmitDeleteCard(this._cardId, this._cardElement));
		this._image.addEventListener('click', () => {
			this._handleFullScreenImage(this._name, this._link)
		})
	}

	_isLiked() {
		return this._likes.some(like => {
			return like._id === this._myId;
		});
	}

	_handleSetLikes() {
		if (this._isLiked()) {
			this._removeLike(this._cardId)
				.then((res) => {
					this._countOfLikes.textContent = res.likes.length;
					this._likes = res.likes;
					this._buttonLike.classList.remove('elements__like_active');
				})

		} else {
			this._addLike(this._cardId)
				.then((res) => {
					this._countOfLikes.textContent = res.likes.length;
					this._likes = res.likes;
					this._buttonLike.classList.add('elements__like_active')
				})

		}
	}

	renderLikes() {
		this._countOfLikes.textContent = this._likes.length;
		if (this._isLiked()) {
			this._buttonLike.classList.add('elements__like_active');
		}

	}

	buildCard = () => {
		this._cardElement = this._getTemplate();
		this._countOfLikes = this._cardElement.querySelector('.elements__count-of-likes')
		this._buttonLike = this._cardElement.querySelector('.elements__like');
		this._deleteBtn = this._cardElement.querySelector('.elements__delete');
		this._image = this._cardElement.querySelector('.elements__image');
		this._cardElement.querySelector('.elements__name').textContent = this._name;
		this._image.src = this._link;
		this._image.alt = this._name;
		this.renderLikes();
		this._setEventListeners();

		if (this._owner === this._myId) {
			return this._cardElement
		}
		else {
			this._cardElement.querySelector('.elements__delete').style.display = 'none';
			return this._cardElement
		}

	}
}

