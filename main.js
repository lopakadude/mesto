(()=>{"use strict";var t=document.querySelector(".profile__edit-btn"),e=document.querySelector(".profile__add-btn"),n={},r=(document.querySelector(".profile__avatar"),document.querySelector(".profile__avatar-cover"));function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function u(t,e,n){return(e=a(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===o(e)?e:String(e)}var c=function(){function t(e,n,r,o,i,a,c){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_setEventListeners",(function(){l._buttonLike.addEventListener("click",(function(){l._handleSetLikes()})),l._deleteBtn.addEventListener("click",(function(){return l._handleFormSubmitDeleteCard(l._cardId,l._cardElement)})),l._image.addEventListener("click",(function(){l._handleFullScreenImage(l._name,l._link)}))})),u(this,"buildCard",(function(){return l._cardElement=l._getTemplate(),l._countOfLikes=l._cardElement.querySelector(".elements__count-of-likes"),l._buttonLike=l._cardElement.querySelector(".elements__like"),l._deleteBtn=l._cardElement.querySelector(".elements__delete"),l._image=l._cardElement.querySelector(".elements__image"),l._cardElement.querySelector(".elements__name").textContent=l._name,l._image.src=l._link,l._image.alt=l._name,l.renderLikes(),l._setEventListeners(),l._owner===l._myId||(l._cardElement.querySelector(".elements__delete").style.display="none"),l._cardElement})),this._name=e.name,this._link=e.link,this._templateSelector=n,this._handleFullScreenImage=r,this._handleFormSubmitDeleteCard=o,this._owner=e.owner._id,this._cardId=e._id,this._myId=c,this._likes=e.likes,this._addLike=i,this._removeLike=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"_isLiked",value:function(){var t=this;return this._likes.some((function(e){return e._id===t._myId}))}},{key:"_handleSetLikes",value:function(){var t=this;this._isLiked()?this._removeLike(this._cardId).then((function(e){t._countOfLikes.textContent=e.likes.length,t._likes=e.likes,t._buttonLike.classList.remove("elements__like_active")})):this._addLike(this._cardId).then((function(e){t._countOfLikes.textContent=e.likes.length,t._likes=e.likes,t._buttonLike.classList.add("elements__like_active")}))}},{key:"renderLikes",value:function(){this._countOfLikes.textContent=this._likes.length,this._isLiked()&&this._buttonLike.classList.add("elements__like_active")}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function f(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var m=f((function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._validationSettings.inputErrorClass),n.textContent=e,n.classList.add(r._validationSettings.errorClass)})),p(this,"_hideInputError",(function(t){var e=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._validationSettings.inputErrorClass),e.classList.remove(r._validationSettings.errorClass),e.textContent=""})),p(this,"_checkInputValidity",(function(t){t.validity.valid?r._hideInputError(t):r._showInputError(t,t.validationMessage)})),p(this,"_hasInvalidInput",(function(){return r._inputList.some((function(t){return!t.validity.valid}))})),p(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._submitButton.classList.add(r._validationSettings.inactiveSubmitClass),r._submitButton.disabled=!0):(r._submitButton.classList.remove(r._validationSettings.inactiveSubmitClass),r._submitButton.disabled=!1)})),p(this,"_setEventListeners",(function(){r._inputList.forEach((function(t){r._toggleButtonState(),t.addEventListener("input",(function(){r._checkInputValidity(t),r._toggleButtonState()}))}))})),p(this,"resetValidation",(function(){r._inputList.forEach((function(t){r._hideInputError(t)})),r._toggleButtonState()})),p(this,"enableValidation",(function(){r._formElement.addEventListener("submit",(function(t){t.preventDefault()})),r._setEventListeners()})),this._validationSettings=n,this._formElement=e,this._inputList=Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector)),this._submitButton=this._formElement.querySelector(this._validationSettings.submitButtonSelector)}));function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var h=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addNewItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handlePopupCloseEsc=this._handlePopupCloseEsc.bind(this)}var e,n;return e=t,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handlePopupCloseEsc)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handlePopupCloseEsc)}},{key:"_handlePopupCloseEsc",value:function(t){"Escape"===t.key&&this.closePopup()}},{key:"_handleClickOverlay",value:function(t){t.target===t.currentTarget&&this.closePopup()}},{key:"setEventListeners",value:function(){var t=this,e=this._popup.querySelector(".popup__close");this._popup.addEventListener("click",(function(e){return t._handleClickOverlay(e)})),e.addEventListener("click",(function(){return t.closePopup()}))}}])&&_(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},k.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup-image__image"),e._popupImageDescription=e._popup.querySelector(".popup-image__name"),e}return e=u,(n=[{key:"openPopup",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupImageDescription.textContent=t,k(P(u.prototype),"openPopup",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function I(t,e){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},I(t,e)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}var q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&I(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(r);if(o){var n=T(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n._callbackOfSubmit=e,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setEventListeners",value:function(){var t=this;C(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var n=t._getInputValues(),r=t._popup.querySelector(".popup__submit"),o=r.name.value;t._callbackOfSubmit(n,r,o)}))}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"closePopup",value:function(){C(T(u.prototype),"closePopup",this).call(this),this._form.reset()}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function A(t,e){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},A(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&A(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._form=e._popup.querySelector(".popup__form"),e}return e=u,(n=[{key:"setOperation",value:function(t){this._operation=t}},{key:"setEventListeners",value:function(){var t=this;U(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._operation()}))}}])&&x(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function V(t){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(t)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==V(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==V(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===V(o)?o:String(o)),r)}var o}var F=function(){function t(e){var n=e.nameSelector,r=e.infoSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._info=document.querySelector(r),this._avatar=document.querySelector(".profile__avatar")}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._info.textContent}}},{key:"setUserInfo",value:function(t){this._name.textContent=t.name,this._info.textContent=t.about}},{key:"setAvatar",value:function(t){this._avatar.src=t.avatar}}])&&N(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var H=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e.baseUrl,this.headers=e.headers}var e,n;return e=t,(n=[{key:"_response",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then((function(e){return t._response(e)}))}},{key:"setUserInfo",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return e._response(t)}))}},{key:"setChangeAvatar",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t.avatar})}).then((function(t){return e._response(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then((function(e){return t._response(e)}))}},{key:"postNewCard",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:t.nameOfPlace,link:t.link})}).then((function(t){return e._response(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then((function(t){return e._response(t)}))}},{key:"likeCard",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then((function(t){return e._response(t)}))}},{key:"unlikeCard",value:function(t){var e=this;return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then((function(t){return e._response(t)}))}}])&&G(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t,e){e?t.classList.contains("popup__submit_create")?t.textContent="Создание...":t.textContent="Сохранение...":t.classList.contains("popup__submit_create")?t.textContent="Создать":t.textContent="Сохранить"}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var $=new O(".popup-image");$.setEventListeners();var K=new F({nameSelector:".profile__name",infoSelector:".profile__description"}),Q=new q(".popup-profile",(function(t,e){M(e,!0),tt.setUserInfo(t).then((function(){K.setUserInfo(t),Q.closePopup()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){M(e,!1)}))}));Q.setEventListeners();var W=new q(".popup-avatar",(function(t,e,n){M(e,!0),tt.setChangeAvatar(t).then((function(){K.setAvatar(t),W.closePopup()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){M(e,!1)}))}));W.setEventListeners();var X=new D(".popup-delete-card");X.setEventListeners();var Y,Z,tt=new H({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"1ce6b059-9750-4713-9aa7-ca765112d918","Content-Type":"application/json"}});Promise.all([tt.getUserInfo(),tt.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K.setAvatar(o),K.setUserInfo(o),Z=o._id;var u=new h({items:i,renderer:function(t){var e=rt(t);u.addItem(e)}},".elements");u.renderItems(),Y=u})).catch((function(t){console.log("Ошибка: ".concat(t))}));var et,nt=new q(".popup-card",(function(t,e){M(e,!0),tt.postNewCard(t).then((function(t){var e=rt(t);Y.addNewItem(e)})).then((function(){nt.closePopup()})).catch((function(t){console.log("Ошибка: ".concat(t))})).finally((function(){M(e,!1)}))}));function rt(t){return new c(t,".elements__template",at,ut,ot,it,Z).buildCard()}function ot(t){return tt.likeCard(t).then((function(t){return t})).catch((function(t){console.log(t)}))}function it(t){return tt.unlikeCard(t).then((function(t){return t})).catch((function(t){console.log(t)}))}function ut(t,e){X.setOperation((function(){tt.deleteCard(t).then((function(){e.remove(),e=null,X.closePopup()})).catch((function(t){console.log("Ошибка: ".concat(t))}))})),X.openPopup()}function at(t,e){$.openPopup(t,e)}nt.setEventListeners(),e.addEventListener("click",(function(){n["user-image"].resetValidation(),nt.openPopup()})),t.addEventListener("click",(function(){Q.setInputValues(K.getUserInfo()),n.userData.resetValidation(),Q.openPopup()})),r.addEventListener("click",(function(){n["user-avatar"].resetValidation(),W.openPopup()})),et={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveSubmitClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_visible"},Array.from(document.querySelectorAll(et.formSelector)).forEach((function(t){var e=new m(t,et),r=t.getAttribute("name");n[r]=e,e.enableValidation()}))})();