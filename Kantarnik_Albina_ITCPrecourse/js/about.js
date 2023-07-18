// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('iframe'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем опции для обработчиков событий
const options = {
  passive: true
};

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
// Инициализация слайдера
updateSlider();

                    // НОВЫЙ ФУНКЦИОНАЛ !!!!!!

// Устанавливаем индекс текущего активного слайда
let activeSlideIndex = 0;

// Функция для обновления состояния кнопок слайдера
function updateSliderButtons() {
  if (activeSlideIndex === 0) {
    // Если текущий активный слайд - первый, блокируем кнопку "предыдущий слайд"
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }

  if (activeSlideIndex === slides.length - 1) {
    // Если текущий активный слайд - последний, блокируем кнопку "следующий слайд"
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}

// Обработчик события для кнопки "предыдущий слайд"
prevButton.addEventListener('click', () => {
  // Переключаемся на предыдущий слайд
  activeSlideIndex--;
  updateSliderButtons();
});

// Обработчик события для кнопки "следующий слайд"
nextButton.addEventListener('click', () => {
  // Переключаемся на следующий слайд
  activeSlideIndex++;
  updateSliderButtons();
});

// Инициализация состояния кнопок слайдера
updateSliderButtons();
