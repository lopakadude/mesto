	let popup = document.querySelector('.popup')
	let form = popup.querySelector('.popup__form')
	let nameUser = document.querySelector('.profile__name')
	let description = document.querySelector('.profile__description')
	let enterName = popup.querySelector('.popup__input_target_name')
	let enterDescription = popup.querySelector('.popup__input_target_description')
	let openBtn = document.querySelector('.profile__edit-btn')
	let closeBtn = popup.querySelector('.popup__close')

function openPopup() {
	popup.classList.add('popup_opened')
	enterName.value = nameUser.textContent
	enterDescription.value = description.textContent
}

function closePopup(){
	popup.classList.remove('popup_opened') 
}

function submit(evt){
	evt.preventDefault();
		nameUser.textContent = enterName.value;
		description.textContent = enterDescription.value;
		closePopup()
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
form.addEventListener('submit', submit)

