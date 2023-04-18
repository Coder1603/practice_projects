const boxContainers = document.querySelectorAll('.box-container')

boxContainers.forEach((boxContainer) => {
    boxContainer.addEventListener('click', () => {
        boxContainers.forEach((boxContainer) => boxContainer.classList.remove('active'))
        
        boxContainer.classList.add('active')
    })
})