const backGround = document.querySelector('.background')
const loadingText = document.querySelector('.loading-text')
let loadIndex = 0
let init = setInterval(loading, 30)

function loading() {
    if(loadIndex < 100) {
        loadIndex++
        loadingText.innerHTML = `${loadIndex}%`
        loadingText.style.opacity = `${100-loadIndex}%`
        backGround.style.filter = `blur(${10-loadIndex/10}px)`
    } else {
        clearInterval(init)
    }

}
