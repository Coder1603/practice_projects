const playstationBtn = document.querySelector('.playstation-btn')
const xboxBtn = document.querySelector('.xbox-btn')
const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')

box1.addEventListener('mouseenter', () => {
    box1.classList.add('active')
    box2.classList.add('orther')
})

box1.addEventListener('mouseleave', () => {
    box1.classList.remove('active')
    box2.classList.remove('orther')
})

box2.addEventListener('mouseenter', () => {
    box1.classList.add('orther')
    box2.classList.add('active')
})

box2.addEventListener('mouseleave', () => {
    box1.classList.remove('orther')
    box2.classList.remove('active')
})