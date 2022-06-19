const featureMenu = document.querySelector(".feature-component");
const companyMenu = document.querySelector(".company-component");
const featureImg = document.querySelector('.feature-arrow');
const companyImg = document.querySelector('.company-arrow');
const menuBtn = document.querySelector('.menuBtn');
const humMenu = document.querySelector('.humBurger');
// const mobileNav = document.querySelector('.nav-ul-component');

featureMenu.addEventListener('click', e=> {
	let mysrc = featureImg.getAttribute('src');
	if (mysrc === 'images/icon-arrow-down.svg') {
		featureImg.setAttribute('src','images/icon-arrow-up.svg');
	}else{
		featureImg.setAttribute('src','images/icon-arrow-down.svg');
	}
 document.querySelector('.features-component-options').classList.toggle('featureBtn');
})

companyMenu.addEventListener('click', e=> {
let mysrc = companyImg.getAttribute('src');
	if (mysrc === 'images/icon-arrow-down.svg') {
		companyImg.setAttribute('src','images/icon-arrow-up.svg');
	}else{
		companyImg.setAttribute('src','images/icon-arrow-down.svg');
	}
 document.querySelector('.company-component-options').classList.toggle('companyBtn');
})

menuBtn.addEventListener('click', e=>{
	let mysrc = humMenu.getAttribute('src');
	if (mysrc === 'images/icon-menu.svg') {
		humMenu.setAttribute('src','images/icon-close-menu.svg');
	}else{
		humMenu.setAttribute('src', 'images/icon-menu.svg');
	}
	document.querySelector('.nav-ul-component').classList.toggle('mobileNav')
})



