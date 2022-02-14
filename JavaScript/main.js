const swiper = new Swiper('.main-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.main_slider-arrow'
    },
    breakpoints:
    {
      320:
      {
        slidesPerView: 1,
      },
      768:
      {
        slidesPerView: 2,
      }
    }
  });
  let burger = document.querySelector('.menu-burger');
  let closeMenu = document.querySelector('.header_menu-close');
  let menuModile = document.querySelector('.header');
  burger.addEventListener('click', ()=>
  {
    menuModile.style.display = 'block';
  })
  closeMenu.addEventListener('click', ()=>
  {
    menuModile.style.display = 'none';
  })