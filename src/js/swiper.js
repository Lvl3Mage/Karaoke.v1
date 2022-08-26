import Swiper from 'swiper/bundle';

  // import styles bundle
import 'swiper/css/bundle';
  
new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    grabCursor: true,
    // Change slide by click on
    slideToClickedSlides: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    slidesPerView: 1,
    watchOverFlow: true,
    spaceBetween: 25,
    speed: 850,
    autoplay: {
        delay: 2000,
        stopOnLastSlide: true,
        disableOnInteraction: true, 
    },
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 1
    },
    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

new Swiper('.image-slider-gallery', {
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev'
    },
    grabCursor: true,
    // Change slide by click on
    slideToClickedSlides: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    
    watchOverFlow: true,
    
    speed: 850,
    autoHeight: false,
    pagination: {
        el: '.swiper-pagination',
      clickable: true,  
    },
    breakpoints: {
        250: {
            slidesPerView: 1,
            grid: {
                rows: 4,
            },
        },
        320: {
            slidesPerView: 2,
            grid: {
                rows: 4,
            },
        },
        768: {
            slidesPerView: 4,
            grid: {
                rows:2,
            },
        }
    },
});