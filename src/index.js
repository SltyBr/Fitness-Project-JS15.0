
import toggleMenu from './modules/toggleMenu';
import otherThings from './modules/otherThings';
import gift from './modules/gift';
import headSlider from './modules/headSlider';
import sendForm from './modules/sendForm';
import sliderCarousel from './modules/servicesSlider';
import gallerySlider from './modules/gallerySlider';
import calc from './modules/calc';
import menuBurger from './modules/menuBurger';

//меню и модальные окна
toggleMenu();

//дополнительный функционал
otherThings();

//подарок
gift();

//слайдер вверху страницы
headSlider();

//отправка форм
sendForm('form2', 'free_visit_form');
sendForm('form1', 'callback_form');
sendForm('banner-form');
sendForm('card_order');
sendForm('footer_form');

//слайдер карусель
sliderCarousel();

//слайдер галереи
gallerySlider();

//калькулятор абонемента
calc();

//настройки бургер меню
menuBurger();