const btnSearch = document.querySelector('button')
const container = document.querySelector('.container')

btnSearch.addEventListener('click', () => {
    container.classList.toggle('active')
})