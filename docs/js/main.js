
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

// SWIPER REWIEWS

let swiper = new Swiper('.swiper-container-reviews', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ACCORDEON

window.addEventListener('click', (event) => {
  if (event.target.hasAttribute('data-accordeon_trigger')) {
    event.target.classList.toggle('accordeon__item-title--active');
    event.target.nextElementSibling.classList.toggle('accordeon__item-text--show');

  }
})