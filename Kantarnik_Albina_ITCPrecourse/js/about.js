
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev1 button');
  const nextButton = document.querySelector('.next1 button');
  const slides = Array.from(slider.querySelectorAll('iframe'));
  const slideCount = slides.length;
  let slideIndex = 0;

  // Устанавливаем обработчики событий для кнопок
  prevButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);

  function showPreviousSlide(){
    if (slideIndex === 0) {
    // Если текущий слайд первый, оставляем его без изменений
    return;
    }
    slideIndex--; 
    updateSlider();
    updateSliderButtons();
  }

  function showNextSlide() {
    if (slideIndex === slideCount - 1) {
    // Если текущий слайд последний, оставляем его без изменений
      return;
    }
    slideIndex++;
    updateSlider();
    updateSliderButtons();
  }

  function updateSlider() {
  slides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = 'block'; // код применяет стиль 'block' для активного слайда (с индексом, равным slideIndex), и стиль 'none' для всех остальных слайдов, чтобы они оставались скрытыми.
     } else {
        slide.style.display = 'none';
     }
    });
  }

  function updateSliderButtons() {
    if (slideIndex === 0) {
      prevButton.disabled = true;
      prevButton.classList.remove('enabled');
    } else {
      prevButton.disabled = false;
      prevButton.classList.add('enabled');
    }

    if (slideIndex === slides.length - 1) {
      nextButton.disabled = true;
      nextButton.classList.remove('enabled');
    } else {
      nextButton.disabled = false;
      nextButton.classList.add('enabled');
    }
  }
  updateSlider();
  updateSliderButtons()



