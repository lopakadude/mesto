import { Card } from "./Card.js"
import { validationSettings, FormValidator } from "./FormValidator.js";
const popupProfile = document.querySelector('.popup-profile');
const formProfile = document.querySelector('.popup-profile__form');
const popupCard = document.querySelector('.popup-card');
const formCard = document.querySelector('.popup-card__form');
const popupFigure = document.querySelector('.popup-image');
const nameUser = document.querySelector('.profile__name');
const description = document.querySelector('.profile__description');
const enterName = formProfile.querySelector('.popup__input_target_name');
const enterDescription = formProfile.querySelector('.popup__input_target_description');
const enterNameOfPlace = formCard.querySelector('.popup__input_target_name-card');
const enterLinkOfPlace = formCard.querySelector('.popup__input_target_link');
const buttonOpenPopupEditProfile = document.querySelector('.profile__edit-btn');
const buttonOpenPopupAddCard = document.querySelector('.profile__add-btn');
const buttonsClosePopup = document.querySelectorAll('.popup__close');
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

function createCard(cardElement) {
	return  new Card(cardElement, '.elements__template', handleFullScreenImage).buildCard();
} 

function renderCard(cardElement) {
	document.querySelector('.elements').prepend(cardElement)
}

function validation(formElement,validationSettings) {
	return new FormValidator(formElement,validationSettings).enableValidation()
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
	renderCard(createCard(inputValue));
	formCard.reset();
	closePopup(popupCard)
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

formProfile.addEventListener('submit', submitProfile);
formCard.addEventListener('submit', submitCards);
initialCards.forEach((cardElement) => {
renderCard(createCard(cardElement));
})


buttonsClosePopup.forEach((buttonClose) => {
	const popup = buttonClose.closest('.popup')
	buttonClose.addEventListener('click', () => closePopup(popup));
})

const validationOfProfileForm = new FormValidator(formProfile, validationSettings);

const validationOfCardForm = new FormValidator(formCard, validationSettings);

validationOfProfileForm.enableValidation();
validationOfCardForm.enableValidation();

buttonOpenPopupEditProfile.addEventListener('click', () => {
	enterName.value = nameUser.textContent;
	enterDescription.value = description.textContent;
	validationOfProfileForm.resetErrors();
	openPopup(popupProfile);
})

buttonOpenPopupAddCard.addEventListener('click', () => {
	validationOfCardForm.resetErrors();
	openPopup(popupCard);
})




function handleFullScreenImage(name, link) {
	const popupImage = document.querySelector('.popup-image__image');
	const popupImageDescription = document.querySelector('.popup-image__name');
	popupImage.src = link;
	popupImage.alt = name;
	popupImageDescription.textContent = name;
	openPopup(popupFigure)}




