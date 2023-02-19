// Smooth menu
document.addEventListener("click", documentActions);
function documentActions(e) {
	const targetElement = e.target;
	/*if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('_active');
	}*/
	if (targetElement.closest('[data-goto]')) {
		//document.documentElement.classList.contains('_active') ?
		//document.documentElement.classList.remove('_active') : null;
		//menu_close();

		const goTo = targetElement.closest('[data-goto]').dataset.goto;
		const goToElement = document.querySelector(goTo);
		const headerHeight = document.querySelector('.header').offsetHeight;
		if (goToElement) {
			window.scrollTo({
				top: goToElement.offsetTop - (headerHeight),
				behavior: "smooth"
			});
		}
		e.preventDefault();
	}
}

// Swiper
const reviewsSwiper = document.querySelector('.swiper-reviews');

if (reviewsSwiper){
	const swiper = new Swiper('.swiper-reviews', {
		autoHeight: true,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}