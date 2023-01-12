let popup = document.querySelector('.popup')
let popupContainer = popup.querySelector('.popup__container')
let openBtn = document.querySelector('.profile__edit-btn')
let closeBtn = popup.querySelector('.popup__close')
let nameUser = document.querySelector('.profile__name')
let description = document.querySelector('.profile__description')
let enterName = popup.querySelector('.popup__name')
let enterDescription = popup.querySelector('.popup__description')
let saveBtn = popup.querySelector('.popup__submit')

function openPopup() {
	popup.classList.add('popup_opened')
	if (popup.classList.contains('popup_opened') === true) {
		document.querySelector('.popup').style = 'display: flex'
	}

	return
}

function closePopup(){
	popup.classList.remove('popup_opened') 
	document.querySelector('.popup').style = 'display:none'

	return
}

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

enterName.value = nameUser.innerText
enterDescription.value = description.innerText

function submit(evt){
	evt.preventDefault();
	if (enterName.value !== '' && enterDescription.value !== '') {
		nameUser.textContent = enterName.value;
		description.textContent = enterDescription.value;
		console.log (nameUser.textContent);
		console.log (description.textContent);
		console.log ('yes');
	}
	else{
		enterName.value = nameUser.innerText
		enterDescription.value = description.innerText
	}
}

enterName.value = nameUser.innerText
enterDescription.value = description.innerText

saveBtn.addEventListener('click', submit)
saveBtn.addEventListener('click', closePopup)
