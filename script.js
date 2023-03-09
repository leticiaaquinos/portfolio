// dark and light theme
const body = document.querySelector('body')
const themeButton = document.getElementById('theme-toggler')

themeButton.addEventListener('click', () => {
    body.classList.toggle('active')
})
