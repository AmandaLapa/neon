let swiper_depoimentos = new Swiper('.slide-depoimentos', {
  speed: 800,
  spaceBetween: 32,
  pagination: {
    el: '.s-comentarios .swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    570: {
      slidesPerView: 2,
    },
    830: {
      slidesPerView: 3,
    },
  },
});
