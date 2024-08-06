let title_div = document.getElementById('title')
let text_div = document.getElementById('text')

window.addEventListener('scroll', () => {

    let value = window.scrollY

    title_div.style.marginTop = value*2.3 + 'px'
    text_div.style.marginTop = value*2.3 + 'px'

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY>0)
})


