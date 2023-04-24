export default class UserInfo {
	constructor({ nameSelector, infoSelector }) {
		this._name = document.querySelector(nameSelector);
		this._info = document.querySelector(infoSelector);
		this._avatar = document.querySelector('.profile__avatar')
	}

	getUserInfo() {
		return { name: this._name.textContent, about: this._info.textContent }
	}

	setUserInfo(inputValues) {
		this._name.textContent = inputValues.name;
		this._info.textContent = inputValues.about;
	}

	setAvatar(inputValues) {
		this._avatar.src = inputValues.avatar
	}
} 