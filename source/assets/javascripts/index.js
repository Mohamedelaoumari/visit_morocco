import 'jquery';
import 'popper.js';
import 'bootstrap';
import { navbarScroll } from './components/navbar';
import { initExpandTogglers } from './components/expand';
import { changeButton } from './components/button';
import { initCommentsSlider, initToursSlider } from './components/slick';
import { initFormsOnFocus } from './components/form';
// import { fadeOut } from './components/banner';

navbarScroll();
initExpandTogglers();
changeButton();
initCommentsSlider();
initToursSlider();
document.addEventListener('keyup', initFormsOnFocus);
