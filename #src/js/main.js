
let itemSwiper = document.querySelectorAll('.swiper-container-product');

itemSwiper.forEach(swiper => {

  let thumbs = new Swiper(swiper.nextElementSibling, {
    slidesPerView: 5,
    spaceBetween: 18,
    watchSlidesVisibility: true,
    initialSlide: true,
    loop: true
  });

  new Swiper(swiper, {
    slidesPerView: 1,
    loop: true,

    navigation: {
      nextEl: swiper.querySelector('.swiper-button-next'),
      prevEl: swiper.querySelector('.swiper-button-prev')
    },

    thumbs: {
      swiper: thumbs
    }
  })

})

// SWIPER SECkOND

new Swiper('.swiper-container-second', {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
})


// SWIPER REWIEWS

let swiper = new Swiper('.swiper-container-reviews', {
  slidesPerView: 1,
  loop: true,

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



window.addEventListener('click', (event) => {

  // Accordeon
  if (event.target.hasAttribute('data-accordeon_trigger')) {
    event.target.classList.toggle('accordeon__item-title--active');
    event.target.nextElementSibling.classList.toggle('accordeon__item-text--show');
  }

  // Counter minus
  if (event.target.hasAttribute('data-minus')) {
    let counter = event.target.closest('.counter').querySelector('[data-counter]');
    if (counter.value == 1) {
      counter.value = 1;
    } else {
      counter.value = parseInt(counter.value) - 1;
    }
  }

  // Counter plus
  if (event.target.hasAttribute('data-plus')) {
    let counter = event.target.closest('.counter').querySelector('[data-counter]');
    counter.value = parseInt(counter.value) + 1;
  }

  // Show / Hide text in reviews
  if (event.target.hasAttribute('data-review-btn')) {
    event.target.previousElementSibling.classList.toggle('s-reviews__text--toggle');
  }

  // Show / Hide burger
  if (event.target.hasAttribute('data-burger-close')) {
    document.querySelector('.burger').setAttribute('style', 'display: none');
  }

  if (event.target.classList.contains('burger-icon')) {
    document.querySelector('.burger').setAttribute('style', 'display: block');
  }



})

