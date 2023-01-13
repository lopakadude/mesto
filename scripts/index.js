	let popup = document.querySelector('.popup')
	let nameUser = document.querySelector('.profile__name')
	let description = document.querySelector('.profile__description')
	let enterName = popup.querySelector('.popup__input_target_name')
	let enterDescription = popup.querySelector('.popup__input_target_description')
	let openBtn = document.querySelector('.profile__edit-btn')
	let closeBtn = popup.querySelector('.popup__close')
	let saveBtn = popup.querySelector('.popup__submit')

function openPopup() {
	popup.classList.add('popup_opened')
	document.querySelector('.popup_opened').style = 'display: flex'
	enterName.value = nameUser.innerText
	enterDescription.value = description.innerText
}

function closePopup(){
	popup.classList.remove('popup_opened') 
	document.querySelector('.popup').style = 'display: none'
}

function submit(evt){
	evt.preventDefault();
		nameUser.textContent = enterName.value;
		description.textContent = enterDescription.value;
		closePopup()
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
saveBtn.addEventListener('click', submit)

