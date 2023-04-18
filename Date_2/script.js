const circles = document.querySelectorAll('.circle')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const progress = document.querySelector('.progress')
var index = 0

nextBtn.addEventListener('click',() => {
    if(index < 3) {
        index++
        circles[index].classList.add('active')

        nextBtn.classList.add('active')
        prevBtn.classList.add('active')
    }

    if(index == 3) {
        nextBtn.classList.remove('active')
    }

    progress.style.width = `${33.33*index}%`
})

prevBtn.addEventListener('click',() => {
    if(index > 0) {
        circles[index].classList.remove('active')
        index--

        prevBtn.classList.add('active')
        nextBtn.classList.add('active')
    }

    if(index == 0) {
        prevBtn.classList.remove('active')
    }

    progress.style.width = `${33.33*index}%`
})
