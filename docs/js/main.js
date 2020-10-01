
let thumbs = new Swiper('.swiper-container-thumbs', {
  slidesPerView: 5,
  spaceBetween: 18,
  watchSlidesVisibility: true,
  initialSlide: true,
  loop: true
});

let itemSwiper = document.querySelectorAll('.swiper-container-product');

itemSwiper.forEach(swiper => {
  new Swiper(swiper, {
    slidesPerView: 1,

    navigation: {
      nextEl: swiper.querySelector('.swiper-button-next'),
      prevEl: swiper.querySelector('.swiper-button-prev')
    },

    thumbs: {
      // swiper: sMounterThumbs
    }
  })
})

