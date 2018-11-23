 var swiper = new Swiper('.swiper-container', {
 	  
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      
      },
    });
