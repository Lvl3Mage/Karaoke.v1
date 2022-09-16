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
    // autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: true,
    //     disableOnInteraction: true, 
    // },
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
        dynamicBullets: true,
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
                columns: 2,
                rows: 4,
            },
        },
        768: {
            slidesPerView: 4,
            grid: {
                rows: 2,
                columns: 4,
            },
        }
    },
});

new Swiper('.image-slider-menu', {
    navigation: {
        nextEl: '.slider-button-next-menu',
        prevEl: '.slider-button-prev-menu'
    },
   
    grabCursor: true,
    // Change slide by click on
    // slideToClickedSlides: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    // mousewheel: {
    //     sensitivity: 2,
    //     // eventsTarget: ".image-slider-menu__image"
    // },
    watchOverFlow: true,
    speed: 850,
    autoHeight: false,
    pagination: {
        el: '.swiper-pagination-menu',
        clickable: true,
        type:"bullets",
        dynamicBullets: true,
    },
    preloadImages: false,
    spaceBetween: 30,
    breakpoints: {
        240: {
            initialSlide: 1,
            centeredSlides: true,
            slidesPerView: 1.5,
            grid: {
                columns: 1,
                rows: 1,
            }, 
        },
        576: {
            centeredSlides: false,
            slidesPerView: 2,
            grid: {
                columns: 2,
                rows: 2,
            },
        },
        768: {
            slidesPerView: 3,
            grid: {
                columns: 3,
                rows:2,
            },
        },
        992: {
            slidesPerView: 3,
            grid: {
                columns: 3,
                rows:2,
            },
        }
    },
});