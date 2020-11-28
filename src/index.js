
import toggleMenu from './modules/toggleMenu';
import otherThings from './modules/otherThings';
import gift from './modules/gift';
import headSlider from './modules/headSlider';
import sendForm from './modules/sendForm';
import sliderCarousel from './modules/servicesSlider';
import gallerySlider from './modules/gallerySlider';
import calc from './modules/calc';

//меню и модальные окна
toggleMenu();

//дополнительный функционал
otherThings();

//подарок
gift();

//слайдер вверху страницы
headSlider();

//отправка форм
sendForm('form2');
sendForm('form1');
sendForm('banner-form');
sendForm('footer_form');
sendForm('card_order');

//слайдер карусель
sliderCarousel();

//слайдер галереи
gallerySlider();

//калькулятор абонемента
calc();