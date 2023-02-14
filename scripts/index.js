	const popup = document.querySelector('.popup')
	const form = popup.querySelector('.popup__form')
	const nameUser = document.querySelector('.profile__name')
	const description = document.querySelector('.profile__description')
	const enterName = popup.querySelector('.popup__input_target_name')
	const enterDescription = popup.querySelector('.popup__input_target_description')
	const openBtn = document.querySelector('.profile__edit-btn')
	const closeBtn = popup.querySelector('.popup__close')
	const likeArray = document.querySelectorAll('.elements__like')

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




likeArray.forEach(function(button) {
	button.addEventListener('click', () => {
		button.classList.toggle('elements__like_active');
	})
})



openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
form.addEventListener('submit', submit)
