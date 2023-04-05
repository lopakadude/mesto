export default class UserInfo {
	constructor({ nameSelector, infoSelector }) {
		this._name = document.querySelector(nameSelector);
		this._info = document.querySelector(infoSelector);
	}

	getUserInfo() {
		return { name: this._name.textContent, job: this._info.textContent }
	}

	setUserInfo(inputValues) {
		this._name.textContent = inputValues.name;
		this._info.textContent = inputValues.job;
	}
} 