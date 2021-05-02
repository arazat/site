const burger = document.querySelector('.burger-menu');
const btn  = document.querySelector('.burger-menu__button');

const links = document.querySelector('.burger-menu__nav');
const overlay = document.querySelector('.burger-menu__overlay');

btn.addEventListener("click" , btnClick);

function btnClick() {
	console.log(burger.classList);
	burger.classList.toggle("empty");
burger.classList.toggle("burger-menu_active");				 		
}

links.addEventListener("click" , linksClick);
overlay.addEventListener("click", overClick);

function linksClick() {
	burger.classList.remove("burger-menu_active");
}
function overClick() {
	burger.classList.remove("burger-menu_active");
}




