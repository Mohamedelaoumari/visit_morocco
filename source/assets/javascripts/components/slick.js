import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

const initSlider = () => {
  $('.single-item').slick({
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots',
    prevArrow: '<button class="btn btn-link p-2 slider-button slick-arrow slick-prev"><i class="fas fa-chevron-circle-left fa-lg white-text"></i></button>',
    nextArrow: '<button class="btn btn-link p-2 slider-button slick-arrow slick-next"><i class="fas fa-chevron-circle-right fa-lg white-text"></i></button>'
  });
};

export { initSlider };
