burger = document.querySelector('.burger')
nav-list = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')
right-nav =  document.querySelector('.right-nav')
burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    nav-list.classList.toggle('v-class-resp');
    right-nav.classList.toggle('v-class-resp');
})