
export const buttonOpenPopupEditProfile = document.querySelector('.profile__edit-btn');
export const buttonOpenPopupAddCard = document.querySelector('.profile__add-btn');
export const initialCards = [{
	nameOfPlace: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
	nameOfPlace: 'Челябинская область',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
	nameOfPlace: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
	nameOfPlace: 'Камчатка',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
	nameOfPlace: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
	nameOfPlace: 'Байкал',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
export const validationSettings = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit',
	inactiveSubmitClass: 'popup__submit_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible',
};
export const formValidators = {};

export const enterName = document.querySelector('.popup__input_target_name');
export const enterDescription = document.querySelector('.popup__input_target_description');