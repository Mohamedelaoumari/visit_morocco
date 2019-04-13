import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

const initCommentsSlider = () => {
  $('.single-comment-item').slick({
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots',
    prevArrow: '<button class="btn btn-link p-2 slider-button slick-arrow slick-prev"><i class="fas fa-chevron-circle-left fa-lg white-text"></i></button>',
    nextArrow: '<button class="btn btn-link p-2 slider-button slick-arrow slick-next"><i class="fas fa-chevron-circle-right fa-lg white-text"></i></button>'
  });
};

const initToursSlider = () => {
  $('.centered-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:2000
  });
};

export { initToursSlider, initCommentsSlider };
