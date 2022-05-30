const navCategorys = document.querySelector('.header__nav__categorys');
const btnResponsiveNav = document.querySelector('.header__nav__btnCategorysResponsive');

const mainSection = document.querySelector('#main');
const aboutMeSection = document.querySelector('#aboutMe');
const projectsSection = document.querySelector('#projects');

const navLinkMain = document.querySelector('#navLinkMain');
const navLinkAboutMe = document.querySelector('#navLinkAboutMe');
const navLinkProjects = document.querySelector('#navLinkProjects');


btnResponsiveNav.addEventListener('click', () =>{ 
    navCategorys.classList.toggle('show');
});
navLinkMain.addEventListener('click',(e)=>{
    e.preventDefault()
    if (navCategorys.classList.contains('show')) navCategorys.classList.toggle('show')
    scrollTo(0,mainSection.offsetTop - 60);
});
navLinkAboutMe.addEventListener('click',(e)=>{
    e.preventDefault()
    if (navCategorys.classList.contains('show')) navCategorys.classList.toggle('show')
    scrollTo(0,aboutMeSection.offsetTop - 60);
});
navLinkProjects.addEventListener('click',(e)=>{
    e.preventDefault()
    if (navCategorys.classList.contains('show')) navCategorys.classList.toggle('show')
    scrollTo(0,projectsSection.offsetTop - 60);
});
//Header - Efecto de cambio de color
window.addEventListener("scroll",function(){
    let header = document.querySelector("header");
    header.classList.toggle("down" , window.scrollY>60);
});