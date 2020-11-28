const sliderCarousel = () => {
    class SliderCarousel {
      constructor({
          main,
          wrap,
          next,
          prev,
          infinity = false,
          position = 0,
          slidersToShow = 3,
          responsive = []
      }) {
          this.main = document.querySelector(main);
          this.wrap = document.querySelector(wrap);
          this.slides = document.querySelector(wrap).children;
          this.next = document.querySelector(next);
          this.prev = document.querySelector(prev);
          this.slidersToShow = slidersToShow;
          this.options = {
              position,
              infinity,
              widthSlide: Math.floor(100 / slidersToShow)
          };
          this.responsive = responsive;
      }

      init() {
          this.addGloClass();
          this.addStyle();

          if (this.prev && this.next) {
              this.controlSlider();
          }
          
          if (this.responsive) {
              this.responseInit();
          }

      }

      addGloClass() {
          this.main.classList.add('single-slider');
          this.wrap.classList.add('single-slider__wrap');
          for (const item of this.slides) {
              item.classList.add('single-slider__item');
          }
          this.prev = document.querySelector('.single-slider__prev');
          this.next = document.querySelector('.single-slider__next');
      }

      addStyle() {
          let style = document.getElementById('sliderCarousel-style');
          if (!style) {
              style = document.createElement('style');
              style.id = 'sliderCarousel-style';
          }
          style.textContent = `
              .single-slider {
                  overflow: hidden !important;
              }
              .single-slider__wrap {
                  transition: transform 0.5s !important;
                  will-change: transfrom !important;
              }
              .single-slider__item {
                  align-items: center;
                  justify-content: center;
                  flex: 0 0 ${this.options.widthSlide}% !important;
              }
          `;
          document.head.append(style);
      }

      controlSlider() {
          this.prev.addEventListener('click', this.prevSlider.bind(this));
          this.next.addEventListener('click', this.nextSlider.bind(this));
      }

      prevSlider() {
          if (this.options.infinity || this.options.position > 0) {
              --this.options.position;
              if (this.options.position < 0) {
                  this.options.position = this.slides.length - this.slidersToShow;
              }
              this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
          }

      }

      nextSlider() {
          if (this.options.infinity || this.options.position < this.slides.length - this.slidersToShow) {
              ++this.options.position;
              if (this.options.position > this.slides.length - this.slidersToShow) {
                  this.options.position = 0;
              }
              this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
          }
      }

      responseInit() {
          const slidersToShowDefault = this.slidersToShow;
          const allResponse = this.responsive.map(item => item.breakpoint);
          const maxResponse = Math.max(...allResponse);

          const checkResponse = () => {
              const widthWindow = document.documentElement.clientWidth;
              if (widthWindow < maxResponse) {
                  for (let i = 0; i < allResponse.length; i++) {
                      if (widthWindow < allResponse[i]) {
                          this.slidersToShow = this.responsive[i].slidersToShow;
                          this.options.widthSlide = Math.floor(100 / this.slidersToShow);
                          this.addStyle();
                      }
                  }
              } else {
                  this.slidersToShow = slidersToShowDefault;
                  this.options.widthSlide = Math.floor(100 / this.slidersToShow);
                  this.addStyle();
              }
          };

          checkResponse();

          window.addEventListener('resize', checkResponse);
      }
  }

  const carousel = new SliderCarousel({
      main: '.services-wrapper',
      wrap: '.services-slider',
      slidersToShow: 5,
      infinity: true,
      responsive: [{
          breakpoint: 1024,
          slidersToShow: 3
      },
      {
          breakpoint: 768,
          slidersToShow: 2
      },
      {
          breakpoint: 576,
          slidersToShow: 1
      }
      ]
  });

  carousel.init();
};

export default sliderCarousel;