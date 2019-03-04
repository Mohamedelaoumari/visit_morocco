import 'bootstrap';
import { navbarScroll } from './components/navbar';
import { initExpandTogglers } from './components/expand';
import { changeButton } from './components/button';
import { initSlider } from './components/slick';
import { initFormsOnFocus } from './components/form';
// import { fadeOut } from './components/banner';

navbarScroll();
initExpandTogglers();
changeButton();
initSlider();
document.addEventListener('keyup', initFormsOnFocus);
