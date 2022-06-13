const featureMenu = document.querySelector(".feature-component");
const companyMenu = document.querySelector(".company-component");
const featureImg = document.querySelector('.feature-arrow');
const companyImg = document.querySelector('.company-arrow');



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




