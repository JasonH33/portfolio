// Opens Menu
const logo = document.querySelector('#logo')
const lang = document.querySelector('.lang')
const nav = document.querySelector('div.menu')
const toggle = document.querySelectorAll('.toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('hide')
    lang.classList.toggle('hide')
    logo.classList.toggle('big')
  })
}

// Toggle Menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('hide')
    lang.classList.toggle('hide')
  })
}