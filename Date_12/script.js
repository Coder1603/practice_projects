const faqs = document.querySelectorAll('.faq')
const faqBtn = document.querySelectorAll('.faq-toggle') 

faqs.forEach((faq, index) => {
    faqBtn[index].addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})