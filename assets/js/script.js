/* show menu */
const navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navMenu = document.getElementById('nav-menu');

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    });
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    });
}

/* hide menu when click on nav__link */
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    // when we click on each nav link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

/* add shadow to navbar after scroll > 50 viewport */
const header = document.getElementById('header');

function ScrollHeader(){
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',ScrollHeader);

/* Swiper */
let newSwiper = new Swiper(".new-swiper", {
    
    spaceBetween:24,
    loop:true,
    slidesPerView:'auto',
    centeredSlides:true,
    
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets:true
    },

    breakpoints: {
        992: {
          spaceBetween: 80,
        },
      },

  });

  /* Scroll we add active__link to nav__link it match the current section */
  const sections = document.querySelectorAll('section[id]');

  function ScrollActive(){
      
    const ScrollY = window.pageYOffset;

    sections.forEach(current => {

        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id');

        if(ScrollY > sectionTop && ScrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu  a[href*='+ sectionId +']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu  a[href*='+ sectionId +']').classList.remove('active-link');
        }


    });

  }

  window.addEventListener('scroll',ScrollActive);

  /* show ScrollUp button */
    
    function scrollUpActive(){
        const scrollUp = document.getElementById('scrollup');
        if(this.scrollY >= 350){
            scrollUp.classList.add('show-scrollup')
        }else{ 
            scrollUp.classList.remove('show-scrollup');
        }
    }
  window.addEventListener('scroll',scrollUpActive);

  /* change theme */
  const themeButton = document.getElementById('theme-button');
  const body = document.getElementById('body');
  themeButton.addEventListener('click',()=>{
      if(themeButton.classList.contains('bx-moon')){
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeButton.classList.remove('bx-moon');
        themeButton.classList.add('bx-sun');

      }else{
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeButton.classList.add('bx-moon');
        themeButton.classList.remove('bx-sun');
      }
  });

/*  SCROLL REVEAL  */
const sr = new  ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:'2500',
    delay:400,
});

sr.reveal('.home__img,.new__container,.footer__container');
sr.reveal('.home__data',{delay:'500'});
sr.reveal('.giving__content,.gift__card',{interval:'100'});
sr.reveal('.celebrate__data,.message__form,.footer__img1',{origin:'left'});
sr.reveal('.celebrate__img,.message__img,.footer__img2',{origin:'right'});
