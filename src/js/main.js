// style
function asyncCss(files) {
	files.forEach(file => {
		let link = document.createElement('link');
		link.href = file;
		link.rel = 'stylesheet';

		document.body.append(link);
	});

}

asyncCss(['css/fonts.css', 'css/background.css', 'css/swiper-bundle.min.css']);

// scroll
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// ymap
let check = false; // проверочная переменная

window.addEventListener('scroll', function () { // когда есть скролл

	if (!check) { // если переменная в значении false
		check = true;

		let script = document.createElement('script'); // подключаю к странице скрипт яндекс карт
		script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
		document.body.append(script);

		script.onload = () => { // а после загрузки

			ymaps.ready(init); // по api яндекс карт запускаю скрипт

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

		}

	}
})

// video

function parseMediaURL(media) {
	let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
	let url = media.src;
	let match = url.match(regexp);
	return match[1];
}

function generateURL(id) {
	let query = '?rel=0&showinfo=0&autoplay=1';
	return 'https://www.youtube.com/embed/' + id + query;
}

function createIframe(id) {
	let iframe = document.createElement('iframe');
	iframe.setAttribute('allowfullscreen', '');
	iframe.setAttribute('allow', 'autoplay');
	iframe.setAttribute('src', generateURL(id));
	iframe.classList.add('video__media');
	return iframe;
}

function setupVideo(video) {
	let link = video.querySelector('.video__link');
	let media = video.querySelector('.video__media');
	let button = video.querySelector('.video__button');
	let id = parseMediaURL(media);
	link.removeAttribute('href');
	video.classList.add('video--enabled');

	video.addEventListener('click', function () {
		let iframe = createIframe(id);
		link.style.display = "none";
		button.style.display = "none";
		video.appendChild(iframe);
	});
}

function findVideos() {
	if (document.querySelectorAll('.video')) {
		let videos = document.querySelectorAll('.video');
		for (let i = 0; i < videos.length; i++) {
			setupVideo(videos[i]);
		}
	}
}
findVideos();

// slider
window.onload = () => {
	const swiper = new Swiper('.swiper', {
		resistance: false,
		spaceBetween: 20,

		pagination: {
			el: '.swiper-pagination',
		},

		breakpoints: {
			615: {
				slidesPerView: 2,
			},
			940: {
				slidesPerView: 3,
			},
			1271: {
				slidesPerView: 4,
			}
		}
	})
}
