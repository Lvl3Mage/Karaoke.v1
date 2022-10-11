import $ from "jquery";

$(document).ready(function(){
    $('.image-slider').slick({
        dots: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor:".image-slider-big",
        centerMode: true,
    });
    $('.image-slider-big').slick({
        arrows: false,
        speed: 1000,
        fade:true,
        asNavFor:".image-slider",
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:true,
                }
            }
        ]
    });
    $('.slider-gallery').slick({
        dots: true,
        arrows: true,
        speed: 1000,
        rows:2,
        slidesPerRow:4,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    rows:4,
                    slidesPerRow:2,
                }
            }
        ]
    });
    $('.menu-slider').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        rows:2,
        slidesPerRow:3,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    rows:2,
                    slidesPerRow:2,
                }
            },{
                breakpoint:568,
                settings:{
                    rows:1,
                    slidesPerRow:1,
                    slidesToShow:1,
                    centerMode: true,
                }
            }
        ]
    });
});