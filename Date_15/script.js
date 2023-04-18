const blockNumbers = document.querySelectorAll('.block__number') 

blockNumbers.forEach(blockNumber => {
    blockNumber.innerText = 0

    const updateCounter = () => {
        const target = +blockNumber.getAttribute('data-target')
        const c = +blockNumber.innerText

        const increment = target / 200

        if (c < target) {
            blockNumber.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            blockNumber.innerText = target
        }
    }
    updateCounter()                
})
