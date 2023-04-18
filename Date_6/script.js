const blockBoxs = document.querySelectorAll('.block-box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight
    blockBoxs.forEach((blockBox, index) => {
        
        blockBox.classList.add('show')
        const blockBoxTop = blockBox.getBoundingClientRect().top

        console.log(blockBoxTop);
        if(blockBoxTop < triggerBottom) {
            blockBox.classList.add('show')
        } else {
            blockBox.classList.remove('show')
        }
    })
    
}





