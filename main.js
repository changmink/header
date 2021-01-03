const menu = document.querySelector(".navbar__menu")
const icons = document.querySelector(".navbar__icons")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active')
    icons.classList.toggle('active')
})
