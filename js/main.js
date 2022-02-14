const swiper = new Swiper('.main__slider', { 
    
    spaceBetween: 30,
    loop: true, 
 
    navigation: {
      nextEl: '.main__slider-arrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }
    }

  });
let burger = document.querySelector('.menu-burger');
let closeMenu = document.querySelector('.header__menu-close ');
let menuMobule = document.querySelector('.header');
const modalPlay = document.querySelector('.main__button-play');
const modal = document.querySelector('.modal')

burger.addEventListener('click', () => {
  menuMobule.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
  menuMobule.style.display = 'none'
})

modalPlay.addEventListener('click', function() {
  modal.classList.remove('close')
})
modal.addEventListener('click', function(){
  modal.classList.add('close')
})
modal.querySelector('.modal-inner').addEventListener('click', function (event){
  
  event.stopPropagation()
})
   
    
