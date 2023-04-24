import './index.css';
import {
	buttonOpenPopupEditProfile, buttonOpenPopupAddCard, avatar, avatarCover, validationSettings, formValidators
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/API.js';
import renderLoading from '../utils/renderLoading';



const popupWithImage = new PopupWithImage('.popup-image');
popupWithImage.setEventListeners();

const userInfo = new UserInfo({ nameSelector: ".profile__name", infoSelector: ".profile__description" })

const popupInfo = new PopupWithForm('.popup-profile', handleFormSubmitInfo);
popupInfo.setEventListeners();

const popupAvatar = new PopupWithForm('.popup-avatar', handleFormSubmitAvatar);
popupAvatar.setEventListeners();

const popupDeleteCard = new PopupDeleteCard('.popup-delete-card');
popupDeleteCard.setEventListeners();



const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-64',
	headers: {
		authorization: '1ce6b059-9750-4713-9aa7-ca765112d918',
		'Content-Type': 'application/json'
	}
});

let cards;
let userId;
Promise.all([api.getUserInfo(), api.getInitialCards()])
	.then(([dataUser, dataCards]) => {
		userInfo.setAvatar(dataUser);
		userInfo.setUserInfo(dataUser);
		userId = dataUser._id;
		const cardList = new Section({
			items: dataCards,
			renderer: (item) => {
				const element = createCard(item);
				cardList.addItem(element);
			}
		}, '.elements'
		)

		cardList.renderItems();
		cards = cardList
	})
	.catch((err) => {
		console.log(`Ошибка: ${err}`);
	})


const popupCard = new PopupWithForm('.popup-card', handleFormSubmitCard);
popupCard.setEventListeners();


function createCard(inputValues) {
	const cardElement = new Card(inputValues, '.elements__template', handleFullScreenImage, handleFormSubmitDeleteCard,addlike, removelike, userId)
	return cardElement.buildCard()
}


function addlike(cardId, cardElement) {
	return api.likeCard(cardId)
		.then((res) => { return res })
		.then((res) => {cardElement.toggleLike(res)})
		.catch((err) => {
			console.log(err);
		});
};

function removelike(cardId, cardElement) { 
	return api.unlikeCard(cardId)
	.then((res) => { return res })
	.then((res) => {cardElement.toggleLike(res)})
	.catch((err) => {
		console.log(err);
})
};

function handleFormSubmitCard(inputValues, buttonSubmit) {
	renderLoading(buttonSubmit, true);
	api.postNewCard(inputValues)
		.then((result) => {
			const card = createCard(result);
			cards.addNewItem(card);
		})
		.then(() => {
			popupCard.closePopup()
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
		.finally(() => {
			renderLoading(buttonSubmit, false)
		})
}

buttonOpenPopupAddCard.addEventListener('click', () => {
	formValidators['user-image'].resetValidation();
	popupCard.openPopup();
})

function handleFormSubmitDeleteCard(cardId, cardElement) {
	popupDeleteCard.setOperation(() => {
		api.deleteCard(cardId)
			.then((res) => {
				cardElement.removeCardElement();
				popupDeleteCard.closePopup();
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
	});
	popupDeleteCard.openPopup();
}









function handleFormSubmitInfo(inputValues, buttonSubmit) {
	renderLoading(buttonSubmit, true);
	api.setUserInfo(inputValues)
		.then(() => {
			userInfo.setUserInfo(inputValues);
			popupInfo.closePopup()
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
		.finally(() => {
			renderLoading(buttonSubmit, false)
		})
}



function handleFormSubmitAvatar(inputValues, buttonSubmit) {
	renderLoading(buttonSubmit, true);
	api.setChangeAvatar(inputValues)
		.then(() => {
			userInfo.setAvatar(inputValues);
			popupAvatar.closePopup()
		})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
		.finally(() => {
			renderLoading(buttonSubmit, false, targetSubmit)
		})
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

avatarCover.addEventListener('click', () => {
	formValidators['user-avatar'].resetValidation();
	popupAvatar.openPopup();
})

enableValidation(validationSettings);



