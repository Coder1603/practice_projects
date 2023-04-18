const input = document.querySelector('.container input')

input.addEventListener('keyup', (e) => {


    document.querySelector('.tags').innerHTML = `
    <span class="tag">${e.target.value}</span>
    `
    if (e.target.value == '') {
        document.querySelector('.tags').innerHTML = ""
    }
})


