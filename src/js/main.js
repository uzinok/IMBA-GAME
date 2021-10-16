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

const navToggle = document.querySelector('.js-nav-page__toggle');
const nav = document.querySelector('.js-nav-page__wrap-list');

navToggle.addEventListener('click', function () {
	nav.classList.toggle('nav-page__wrap-list-visually')
})
