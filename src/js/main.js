// style
function asyncCss(files) {
	files.forEach(file => {
		let link = document.createElement('link');
		link.href = file;
		link.rel = 'stylesheet';

		document.body.append(link);
	});

}

asyncCss(['css/fonts.css', 'css/background.css']);

// scroll
const headerAnchors = document.querySelectorAll('header a[href*="#"]');
const footerAnchors = document.querySelectorAll('footer a[href*="#"]');
let windowWidth = window.innerWidth;

window.addEventListener('resize', function () {
	windowWidth = window.innerWidth;
})

for (let anchor of headerAnchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		scroll(anchor);
		if (windowWidth < 990) toggleNav();
	})
}

for (let anchor of footerAnchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		scroll(anchor);
	})
}

function scroll(anchor) {
	const blockID = anchor.getAttribute('href').substr(1)

	document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
}

const navToggle = document.querySelector('.js-nav-page-toggle');
const nav = document.querySelector('.js-nav-page-wrap-list');

navToggle.addEventListener('click', function () {
	toggleNav();
})

function toggleNav() {
	nav.setAttribute('style', 'transition: opacity 0.3s ease-in-out;');
	setTimeout(function () {
		nav.removeAttribute('style');
	}, 300)
	navToggle.classList.toggle('js-nav-page-toggle-visually');
	nav.classList.toggle('nav-page__wrap-list-visually');
}

// ymap
ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [59.122298, 37.909166],
		zoom: 17,
		controls: ['zoomControl', 'typeSelector']
	}, {
		searchControlProvider: 'yandex#search'
	});

	// Балун.
	var myPlacemark = new ymaps.Placemark([59.122298, 37.909166], {
		// balloonContentHeader: "Заголовок",
		balloonContentBody: `<svg width="12" height="13" style="margin-right: 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_148:104610)" fill="#000"><path d="M6 .434A4.35 4.35 0 001.654 4.78c0 2.973 3.89 7.34 4.055 7.524a.391.391 0 00.582 0c.166-.185 4.055-4.55 4.055-7.524A4.35 4.35 0 006 .434zm0 6.199c-1.5-1.5-2 0-2-1.5 0-1.965.5-1.5 1.71-2.156C7.5 3.633 8 3.168 8 5.133c-.5 1.5-.5 0-2 1.5z"/><path d="M6 2.593c-1.206 0-2.187.98-2.187 2.187 0 1.205.981 2.186 2.187 2.186s2.187-.98 2.187-2.186S7.206 2.593 6 2.593zm0 3.59c-.774 0-1.404-.63-1.404-1.403a1.405 1.405 0 012.808 0c0 .774-.63 1.403-1.404 1.403z"/></g><defs><clipPath id="clip0_148:104610"><path fill="#fff" transform="translate(0 .434)" d="M0 0h12v12H0z"/></clipPath></defs></svg>Московский проспект, 49б <br><svg width="11" height="10" style="margin-right: 8px" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.864.48L2.895.01a.472.472 0 01.537.271L4.37 2.47a.468.468 0 01-.135.547l-1.183.969a7.239 7.239 0 003.46 3.46l.97-1.183a.468.468 0 01.546-.135l2.188.938a.474.474 0 01.273.539l-.469 2.031a.469.469 0 01-.457.363A9.062 9.062 0 01.501.937.466.466 0 01.864.48z" fill="#000" /></svg>7-999-700-40-61`,
		// balloonContentFooter: "Подвал",
		hintContent: "Подсказка"
	}, {
		preset: 'islands#yellowDotIcon'
	});
	myMap.geoObjects.add(myPlacemark);
	myPlacemark.balloon.open();
	myMap.behaviors.disable('scrollZoom');
}
