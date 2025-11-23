let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.nav_right')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})

let aside_menu = document.querySelector('.aside-menu')
let aside = document.querySelector('aside')
aside_menu.addEventListener('click', function() {
    aside_menu.classList.toggle('aside_open')
    aside.classList.toggle('aside_open') 
})
