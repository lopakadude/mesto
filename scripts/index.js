const popupProfile = document.querySelector('.popup-profile')
const formProfile = document.querySelector('.popup-profile__form')
const popupCard = document.querySelector('.popup-card')
const formCard = document.querySelector('.popup-card__form')
const popupFigure = document.querySelector('.popup-image')
const popupImage = popupFigure.querySelector('.popup-image__image')
const popupCaption = popupFigure.querySelector('.popup-image__name')
const nameUser = document.querySelector('.profile__name')
const description = document.querySelector('.profile__description')
const enterName = formProfile.querySelector('.popup__input_target_name')
const enterDescription = formProfile.querySelector('.popup__input_target_description')
const enterNameOfPlace = formCard.querySelector('.popup__input_target_name-card')
const enterLinkOfPlace = formCard.querySelector('.popup__input_target_link')
const buttonOpenPopupEditProfile = document.querySelector('.profile__edit-btn')
const buttonOpenPopupAddCard = document.querySelector('.profile__add-btn')
const buttonsClosePopup = document.querySelectorAll('.popup__close')
const cardTemplate = document.querySelector('.elements__elemental').content
const cardElements = document.querySelector('.elements')
const initialCards = [{
	name: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
	name: 'Челябинская область',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
	name: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
	name: 'Камчатка',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
	name: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
	name: 'Байкал',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

function buildCard(item) {
	const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true)
	const buttonLike = cardElement.querySelector('.elements__like')
	const deleteBtn = cardElement.querySelector('.elements__delete')
	const smallImage = cardElement.querySelector('.elements__image')
	const nameImage = cardElement.querySelector('.elements__name')
	const image = cardElement.querySelector('.elements__image')
	nameImage.textContent = item.name
	image.src = item.link
	image.alt = item.name
	buttonLike.addEventListener('click', () => {
		buttonLike.classList.toggle('elements__like_active');
	})
	deleteBtn.addEventListener('click', () => {
		cardElement.remove()
	})
	smallImage.addEventListener('click', () => {
		popupImage.src = item.link
		popupImage.alt = item.name
		popupCaption.textContent = item.name
		openPopup(popupFigure)
	})
	return cardElement
}

function closePopup(popup) {
	popup.classList.remove('popup_opened');
	popup.removeEventListener('click', detectClickOverlay);
	document.removeEventListener('keydown', handlePopupCloseEsc);
}

function openPopup(popup) {
	popup.classList.add('popup_opened');
	popup.addEventListener('click', detectClickOverlay);
	document.addEventListener('keydown', handlePopupCloseEsc);

}

function submitProfile(evt) {
	evt.preventDefault();
	nameUser.textContent = enterName.value;
	description.textContent = enterDescription.value;
	closePopup(popupProfile)
}

function submitCards(evt) {
	evt.preventDefault();
	const inputValue = {
		name: enterNameOfPlace.value,
		link: enterLinkOfPlace.value
	};
	addCard(buildCard(inputValue));
	formCard.reset();
	closePopup(popupCard)
}

function addCard(cardElement) {
	cardElements.prepend(cardElement)
}

function handlePopupCloseEsc(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup)
	}
}

function detectClickOverlay(evt) {
	if (evt.target === evt.currentTarget) {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup)
	}
}

formProfile.addEventListener('submit', submitProfile)
formCard.addEventListener('submit', submitCards)
initialCards.forEach(function (item) {
	cardElements.append(buildCard(item))
})

buttonsClosePopup.forEach((buttonClose) => {
	const popup = buttonClose.closest('.popup')
	buttonClose.addEventListener('click', () => closePopup(popup));
})

buttonOpenPopupEditProfile.addEventListener('click', () => {
	enterName.value = nameUser.textContent;
	enterDescription.value = description.textContent;
	resetError(formProfile, validationSettings);
	openPopup(popupProfile);
})

buttonOpenPopupAddCard.addEventListener('click', () => {
	openPopup(popupCard);
	resetError(formCard, validationSettings);
})









