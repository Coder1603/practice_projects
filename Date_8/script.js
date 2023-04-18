const labels = document.querySelectorAll('label')

labels.forEach(label => {  
    label.innerHTML = label.innerText
        .split('')
        .map((curentLabelText, index) => `<span style="transition-delay: ${index*50}ms"> ${curentLabelText} </span>` )
        .join('')
    
})

