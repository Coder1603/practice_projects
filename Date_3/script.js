const menuBtn = document.querySelector('.fas.fa-bars')
const closeBtn = document.querySelector('.fa-solid.fa-xmark')
const containerMain = document.querySelector('.container-main')

menuBtn.addEventListener('click', () => {
    containerMain.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    containerMain.classList.remove('active')
})