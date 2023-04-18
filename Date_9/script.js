const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const button = document.createElement('button')
    button.innerText = sound
    button.classList.add('btn')
    document.querySelector('.container-btn').appendChild(button)

    
    button.addEventListener('click', () => {
        stopAudio()
        document.querySelector(`#${sound}`).play()
    })
})

function stopAudio() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}