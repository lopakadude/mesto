	const popupProfile = document.querySelector('.popup-profile')
	const formProfile = document.querySelector('.popup-profile__form')
	const popupCard = document.querySelector('.popup-card')
	const formCard = document.querySelector('.popup-card__form')
	const popupImage = document.querySelector('.popup-image')
	const nameUser = document.querySelector('.profile__name')
	const description = document.querySelector('.profile__description')
	const enterName = formProfile.querySelector('.popup__input_target_name')
	const enterDescription = formProfile.querySelector('.popup__input_target_description')
	const enterNameOfPlace = formCard.querySelector('.popup__input_target_name-card')
	const enterLinkOfPlace = formCard.querySelector('.popup__input_target_link')
	const editProfileBtn = document.querySelector('.profile__edit-btn')
	const editCardsBtn = document.querySelector('.profile__add-btn')
	const closeBtns = document.querySelectorAll('.popup__close')
	const cardTemplate = document.querySelector('.elements__elemental').content
	const cardElements = document.querySelector('.elements')
	const initialCards = [
		{
			name: 'Архыз',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
		},
		{
			name: 'Челябинская область',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
		},
		{
			name: 'Иваново',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
		},
		{
			name: 'Камчатка',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
		},
		{
			name: 'Холмогорский район',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
		},
		{
			name: 'Байкал',
			link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
		}
	];





	

function buildCard(item) {
	const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true)
	const buttonLike = cardElement.querySelector('.elements__like')
	const deleteBtn = cardElement.querySelector('.elements__delete')
	const smallImage = cardElement.querySelector('.elements__image')
	cardElement.querySelector('.elements__name').textContent = 	item.name
	cardElement.querySelector('.elements__image').src = 	item.link
	cardElement.querySelector('.elements__image').alt = 	item.name
	buttonLike.addEventListener('click', () => {
		buttonLike.classList.toggle('elements__like_active');
	})
	deleteBtn.addEventListener('click',() => {
		cardElement.remove()
	})
	smallImage.addEventListener('click', () => {
		popupImage.querySelector('.popup-image__image').src = item.link
		popupImage.querySelector('.popup-image__image').alt = item.name
		popupImage.querySelector('.popup-image__name').textContent = item.name
		openPopup(popupImage)
	})
	return cardElement
	
}


function closePopup(popup) {
	popup.classList.remove('popup_opened')
}

function openPopup(popup) {
	popup.classList.add('popup_opened')
}


function submitProfile(evt){
	evt.preventDefault();
		nameUser.textContent = enterName.value;
		description.textContent = enterDescription.value;
		closePopup(popupProfile)
}

function submitCards(evt){
	evt.preventDefault();
		const inputValue = {
			name: enterNameOfPlace.value,
			link: enterLinkOfPlace.value
		};
		addCard(buildCard(inputValue));
		closePopup(popupCard)
}

function addCard(cardElement) {
cardElements.prepend(cardElement)
}


formProfile.addEventListener('submit', submitProfile)
formCard.addEventListener('submit', submitCards)

initialCards.forEach(function (item) {
	cardElements.append(buildCard(item))
	})


	closeBtns.forEach((closeBtn) => {
		const popup = closeBtn.closest('.popup')
		closeBtn.addEventListener('click', () => closePopup(popup));
		})

		editProfileBtn.addEventListener('click', () => {
			enterName.value = nameUser.textContent;
			enterDescription.value = description.textContent;
			openPopup(popupProfile);
		})

		editCardsBtn.addEventListener('click', () => {
			formCard.reset();
			openPopup(popupCard);
		})

