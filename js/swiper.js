const swiper = new Swiper(".mySwiper", {
  clickable: true,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
    navigation: {
      nextEl: ".banner__swiper-button-next",
      prevEl: ".banner__swiper-button-prev",
    },
});

const advantagesSwiper = new Swiper(".advantages__slider", {
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    991: {
      slidesPerView: 3
    }
  },
  clickable: true,
  navigation: {
    
    nextEl: ".advantages__swiper-button-next",
    prevEl: ".advantages__swiper-button-prev",
  },
});


const apartmenstSwiper  = new Swiper(".apartmenst__swiper", {
  lazy: true,
  loop: true,
  navigation: {
    nextEl: ".apartmenst-swiper-button-next",
    prevEl: ".apartmenst-swiper-button-prev",
  },
});
var apartmenstSwiperDesc = new Swiper(".apartments__swiper-desc1", {
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-desc-next",
    prevEl: ".swiper-desc-prev",
  },
});