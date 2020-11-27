const headSlider = ()=>{
  const mainSlider = document.querySelector('.main-slider'),
        mainSliderItems = mainSlider.querySelectorAll('.slide');


  let currentSlide = 0,
      interval;

  const prevSlide = (elem, index)=>{
    elem[index].style.display = 'none';
  };	

  const nextSlide = (elem, index)=>{
    elem[index].style.display = 'flex';
  };

  const autoPlaySlide = () => {
    prevSlide(mainSliderItems, currentSlide);
    currentSlide++;
    if (currentSlide >= mainSliderItems.length) {
        currentSlide = 0;
    }
    nextSlide(mainSliderItems, currentSlide);
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  startSlide();
};

export default headSlider;