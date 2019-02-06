import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

const initSlider = () => {
  console.log('hellof rom slick');
  $('.single-item').slick({
    'arrows': true
  });
}

export { initSlider };
