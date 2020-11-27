const gallerySlider = ()=>{

  const gallerySlide = document.querySelector('.gallery-slider'),
        gallerySlideItems = gallerySlide.querySelectorAll('.slide');

    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass)=>{
      elem[index].classList.remove(strClass);
    };	
  
    const nextSlide = (elem, index, strClass)=>{
      elem[index].classList.add(strClass);
    };
    
  const autoPlaySlide = () => {
    prevSlide(gallerySlideItems, currentSlide);
    currentSlide++;
    if (currentSlide >= gallerySlideItems.length) {
        currentSlide = 0;
    }
    nextSlide(gallerySlideItems, currentSlide);
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

 /*  startSlide(); */

  gallerySlide.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    prevSlide(gallerySlideItems, currentSlide, 'slide-active');

    if (target.matches('#arrow-right')) {
        currentSlide++;
    } else if (target.matches('#arrow-left')) {
        currentSlide--;
    }

    if (currentSlide >= gallerySlideItems.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = gallerySlideItems.length - 1;
    }
    nextSlide(gallerySlideItems, currentSlide, 'slide-active');
  });

/*   gallerySlide.addEventListener('mouseover', event => {
    if (event.target.matches('#arrow-right') || event.target.matches('#arrow-left')) {
        stopSlide();
    }
  });

  gallerySlide.addEventListener('mouseout', event => {
    if (event.target.matches('#arrow-left') || event.target.matches('#arrow-right')) {
        startSlide();
    }
  }); */
  
};

export default gallerySlider;