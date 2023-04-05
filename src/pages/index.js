import './index.css';
import {
	buttonOpenPopupEditProfile, enterName, enterDescription, buttonOpenPopupAddCard, initialCards, validationSettings, formValidators
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupWithImage = new PopupWithImage('.popup-image');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({ nameSelector: ".profile__name", infoSelector: ".profile__description" })

const popupInfo = new PopupWithForm('.popup-profile', {
	callbackOfSubmit: (inputValues) => {
		userInfo.setUserInfo(inputValues);
		popupInfo.closePopup();
	}
});
popupInfo.setEventListeners();

const popupCard = new PopupWithForm('.popup-card', {
	callbackOfSubmit: (inputValues) => {
		const element = createCard(inputValues);
		cardList.addItem(element);
		popupCard.closePopup();
	}
});
popupCard.setEventListeners();

const cardList = new Section({
	items: initialCards,
	renderer: (item) => {
		const element = createCard(item);
		cardList.addItem(element);
	}
}, '.elements'
)

function createCard(item) {
	return new Card(item, '.elements__template', handleFullScreenImage).buildCard()
}

function handleFullScreenImage(name, link) {
	popupWithImage.openPopup(name, link);
}

const enableValidation = (validationSettings) => {
	const formList = Array.from(document.querySelectorAll(validationSettings.formSelector));
	formList.forEach((formElement) => {
		const validator = new FormValidator(formElement, validationSettings);
		const formName = formElement.getAttribute('name');
		formValidators[formName] = validator;
		validator.enableValidation();
	});
};

buttonOpenPopupEditProfile.addEventListener('click', () => {
	popupInfo.setInputValues(userInfo.getUserInfo());
	formValidators['userData'].resetValidation();
	popupInfo.openPopup();
})

buttonOpenPopupAddCard.addEventListener('click', () => {
	formValidators['user-image'].resetValidation();
	popupCard.openPopup();
})

cardList.renderItems();
enableValidation(validationSettings);