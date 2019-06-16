
/*slider*/
jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider({
  	controls: true
  });
});



/*button font-size*/
var btnCatalog = document.querySelector("#catalog .main-header__link");
var catalogMenu = document.querySelector("#catalog .catalog-list");
var catalogStyle = document.querySelector(".catalog-js-style");


//отримання стилів псевдоелемента
var catalogPsevdo = getComputedStyle(document.querySelector("#catalog .main-header__link"), "::before").height;
//для зміни значень псевдоелементів
var styleElem = document.head.appendChild(document.createElement("style"));

btnCatalog.addEventListener("click", function(){
	if (catalogMenu.classList.contains("catalog-list--close")) {
		catalogMenu.classList.remove("catalog-list--close");
		btnCatalog.classList.add("catalog-js-style");
		styleElem.innerHTML = "#catalog .main-header__link::before {height: 0;}";
	}
	else {
		catalogMenu.classList.add("catalog-list--close");
		btnCatalog.classList.remove("catalog-js-style");
		styleElem.innerHTML = "#catalog .main-header__link::before {height: 1px;}";
	}
});
if (window.matchMedia('(max-width: 425px)').matches) {
	styleElem.innerHTML = "#catalog .main-header__link::before {}";
	console.log(styleElem.innerHTML);
}


var btnEnter = document.querySelector("#button-enter");
var enterForm = document.querySelector(".enter-form");

btnEnter.addEventListener("click", function(){
	if (enterForm.classList.contains("enter-form--close")) {
		enterForm.classList.remove("enter-form--close");
		btnEnter.classList.add("header-button-js");
		
	}
	else {
		enterForm.classList.add("enter-form--close");
		btnEnter.classList.remove("header-button-js");;
	}

});



var btnSearch = document.querySelector("#button-search");
var searchForm = document.querySelector(".search-form");

btnSearch.addEventListener("click", function(){
	if (searchForm.classList.contains("search-form--close")) {
		searchForm.classList.remove("search-form--close");
		btnEnter.classList.add("header-button-js");
		
	}
	else {
		searchForm.classList.add("search-form--close");
		btnEnter.classList.remove("header-button-js");;
	}

});

var btnPopup = document.querySelector(".map-textblock__button");
var popupForm = document.querySelector(".popup");
var overlay = document.querySelector(".overlay");
var buttonClose = document.querySelector(".button-close");
var buttonSend = document.querySelector(".popup__button");


btnPopup.addEventListener("click", function(){
	if (popupForm.classList.contains("popup--close")) {
		popupForm.classList.remove("popup--close");
		overlay.classList.remove("overlay--close");
	}
});

overlay.addEventListener("click", function(){
	popupForm.classList.add("popup--close");
	overlay.classList.add("overlay--close");
});

buttonClose.addEventListener("click", function(){
	popupForm.classList.add("popup--close");
	overlay.classList.add("overlay--close");
});

buttonSend.addEventListener("click", function(){
	popupForm.classList.add("popup--close");
	overlay.classList.add("overlay--close");
});



var buttonEmail = document.querySelector(".email__button");
console.log(buttonEmail)
if (window.matchMedia('(max-width: 768px)').matches) {
	buttonEmail.innerHTML = "Ok";
}
if (window.matchMedia('(max-width: 320px)').matches) {
	buttonEmail.innerHTML = "Отправить";
}


/*mobile header button*/
var btnMobileHeader = document.querySelector(".main-header__button-list");
var menuMobileHeader = document.querySelector(".main-header__list");

btnMobileHeader.addEventListener("click", function(){
	if (menuMobileHeader.classList.contains("main-header__list--close")) {
		menuMobileHeader.classList.remove("main-header__list--close");
		
	}
	else {
		menuMobileHeader.classList.add("main-header__list--close");
	}

});

	