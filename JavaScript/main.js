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

  // Воспроизведение видео

  var videoEl =  document.getElementById("video");

  var videoOpenClick = function(e)
  {
    e.preventDefault();
    //var audioEl = document.createElement("audio");
    //audioEl.src = "video/Batman.mp4";
    //audioEl.autoplay = "true";
    //document.body.appendChild(audioEl);
    let video = document.querySelector(".video-bg video");
    document.querySelector(".main").style.background = "none";
    document.querySelector(".video-bg").style.opacity = "1";
    video.play();
    video.className = "sleepAnim";

  };
  videoEl.addEventListener("click", videoOpenClick);