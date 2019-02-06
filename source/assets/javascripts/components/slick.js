import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';


const prevArrow = '<button class="btn btn-link p-2 slick-control slick-arrow slick-prev"><i class="fas fa-chevron-circle-left fa-lg"></i>'
const nextArrow = '<button class="btn btn-link p-2 slick-control slick-arrow slick-next"><i class="fas fa-chevron-circle-right fa-lg"></i></button>';

const initSlider = () => {
  console.log('hellof rom slick');
  $('.single-item').slick({
    arrows: true,
    dots: true,
    dotsClass: 'slick-dots',
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });
}

export { initSlider };
