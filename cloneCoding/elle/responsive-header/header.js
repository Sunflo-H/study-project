const navbarToogleBtn = document.querySelector('.navbar_toogle_btn');
const navbarMenu = document.querySelector('.navbar_menu');
const navbarIcons = document.querySelector('.navbar_icons');

navbarToogleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
    navbarIcons.classList.toggle('active');
});