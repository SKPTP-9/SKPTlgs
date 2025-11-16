let burger = document.querySelector('.burger-menu')
let nav = document.querySelector('.nav_right')
burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    nav.classList.toggle('active') 
})
