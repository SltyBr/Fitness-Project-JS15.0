const gallerySlider = ()=>{

  const gallerySlide = document.querySelector('.gallery-slider'),
        galleryLines = document.querySelector('.gallery-lines'),
        gallerySlideItems = gallerySlide.querySelectorAll('.slide');

    let currentSlide = 0,
        line,
        interval;

   const createList = ()=>{ // функция создания списка, в зависимости от количества слайдов
    for (let i = 0; i < gallerySlideItems.length; i++){
      let li = document.createElement('li');
      li.classList.add('line');
      galleryLines.insertAdjacentElement('beforeend', li);
      if (i === currentSlide){
        li.classList.add('line-active');
      }
    }
    return (line = document.querySelectorAll('.line'));
  };
  createList();

  const prevSlide = (elem, index, strClass)=>{
    elem[index].classList.remove(strClass);
  };	

  const nextSlide = (elem, index, strClass)=>{
    elem[index].classList.add(strClass);
  };
    
  const autoPlaySlide = () => {
    prevSlide(gallerySlideItems, currentSlide, 'slide-active');
    prevSlide(line, currentSlide, 'line-active');
    currentSlide++;
    if (currentSlide >= gallerySlideItems.length) {
        currentSlide = 0;
    }
    nextSlide(gallerySlideItems, currentSlide, 'slide-active');
    nextSlide(line, currentSlide, 'line-active');
  };

  const startSlide = (time = 2500) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  /* startSlide(); */

  gallerySlide.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    prevSlide(gallerySlideItems, currentSlide, 'slide-active');
    prevSlide(line, currentSlide, 'line-active');

    if (target.matches('#arrow-right')) {
        currentSlide++;
    } else if (target.matches('#arrow-left')) {
        currentSlide--;
    } else if(target.matches('.line')){
      line.forEach((element, index)=>{
        if (element === target){
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= gallerySlideItems.length) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = gallerySlideItems.length - 1;
    }
    nextSlide(gallerySlideItems, currentSlide, 'slide-active');
    nextSlide(line, currentSlide, 'line-active');
  });

  gallerySlide.addEventListener('mouseover', event => {
    if (event.target.matches('#arrow-right') || event.target.matches('#arrow-left')) {
        stopSlide();
    }
  });

  gallerySlide.addEventListener('mouseout', event => {
    if (event.target.matches('#arrow-left') || event.target.matches('#arrow-right')) {
        startSlide();
    }
  });
  
};

export default gallerySlider;