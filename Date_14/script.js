const button = document.querySelector('button')
const container = document.querySelector('.container')

button.addEventListener('click', e => {
    container.classList.toggle('active')
})