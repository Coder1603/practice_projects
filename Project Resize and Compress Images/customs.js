// if lock true height = width * 3 or if lock true height = width / 3

const width = document.querySelector('.width')
const height = document.querySelector('.height')
const inputLock = document.querySelector('#input-lock')
const inputHeight = document.querySelector('#input-height')
const blockImg = document.querySelector('.block-img img')
const boxImage = document.querySelector('.box-image')
const previewImg = boxImage.querySelector('img')
const fileInput = boxImage.querySelector('input')

const loadFile = (e) => {
    const file = e.target.files[0]
    if(!file) return; 
    previewImg.src = URL.createObjectURL(file)
    previewImg.addEventListener('load', () => {
        width.value = previewImg.naturalWidth
        height.value = previewImg.naturalHeight
        boxImage.classList.add('active')
    })
    
}

fileInput.addEventListener("change", loadFile)
boxImage.addEventListener('click',() => { fileInput.click()})







width.addEventListener('input', () => {
    if (inputLock.checked) {
        height.value = width.value
    }
})

height.addEventListener('input', () => {
    if (inputLock.checked) {
        width.value = height.value
    }
})