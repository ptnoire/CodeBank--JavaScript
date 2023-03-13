// SLIDE SHOW BLUEPRINT //

// <div> - Top Level Div -
//     <img> - Slides -
//          <div> - Dots -
// 2 Buttons (One left, one right)

// Ctrl+F :
//      dots__dot (Class added for querySelector, inserted HTML)
//      data-slide (Dataset added to dots to match with slides)
//      dots__dot--active (Active Slide reflected with dot.)


const DIV = ''; // Insert Top Level Div Here
const SLIDES = ''; // Insert Slides Here
const DOTS_DIV = ''; // Insert Dots Div Here
const BUTTON_LEFT = ''; // Left Button
const BUTTON_RIGHT = ''; // Right Button


const slider = function () {
    const dotContainer = DOTS_DIV;
    const slides = SLIDES;
    const btnLeft = BUTTON_LEFT;
    const btnRight = BUTTON_RIGHT;

    let curSlide = 0;
    const maxSlide = slides.length;
    const slideActivate = function(slide) {
      slides.forEach((s, i) => s.style.transform = `translateX(${115 * (i-slide)}%)`)
    }

    const createDots = function() {
      slides.forEach(function(_, i) {
        dotContainer.insertAdjacentHTML('beforeend', 
        `<button class="dots__dot" data-slide="${i}">⏺</button>`)
      })
    }

    const activateDot = function(slide) {
      document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }

    const nextSlide = function(){
      if(curSlide === maxSlide - 1) {
        curSlide = 0;
      }else{  curSlide++
      }
      slideActivate(curSlide);
      activateDot(curSlide);
    }

    const prevSlide = function(){
      if(curSlide === 0) {
        curSlide = maxSlide -1;
      } else{  curSlide--;
      }
      slideActivate(curSlide);
      activateDot(curSlide);
    }

    const startUp = function () {
        createDots();
        activateDot(0)
        slideActivate(0);
    }

    startUp();

    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)
    document.addEventListener('keydown', function (e) {
      e.key === 'ArrowRight' && nextSlide();
      e.key === 'ArrowLeft' && prevSlide();
    })

    dotContainer.addEventListener('click', function(e) {
      if(e.target.classList.contains('dots__dot')) {
        const {slide} = e.target.dataset;
        slideActivate(slide);
        activateDot(slide);
      }
    })
  }

// In exported as class this isn't needed, but in single application usage, call the function.
slider();