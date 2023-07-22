const prevButton = document.querySelector('.prev1 button');
const nextButton = document.querySelector('.next1 button');
const CitySlider = [
  {
    city: "1",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.3926662053273!2d2.296674197569844!3d48.85710383606593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2z0K3QudGE0LXQu9C10LLQsCDQsdCw0YjQvdGP!5e0!3m2!1sru!2sil!4v1689629226814!5m2!1sru!2sil"
  },
  {
    city: "2",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12360.819847512583!2d-43.18227482793683!3d-22.917290316676887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f7b55fe685d%3A0x76011e047b252c35!2z0JvQtdGB0YLQvdC40YbQsCDQodC10LvQsNGA0L7QvdCw!5e0!3m2!1sru!2sil!4v1689628804990!5m2!1sru!2sil"
  },
  {
    city: "3",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d162773.87017261758!2d-74.08965985347417!3d40.7056855891818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589a018531e3%3A0xb9df1f7387a94119!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuSDQv9Cw0YDQug!5e0!3m2!1sru!2sil!4v1689628862578!5m2!1sru!2sil"
  },
  {
    city: "4",
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12461611.20831021!2d3.4190616924502106!3d40.311600102342034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47842318d8eabf7f%3A0x4c74f13f06d99095!2z0JLQuNC70LvQsCDQkdCw0LvQsdGM0Y_QvdC10LvQu9C-!5e0!3m2!1sru!2sil!4v1689629137313!5m2!1sru!2sil"
  }
];

let slideindex = 0;

function updateSlider() {
  let iframe = CitySlider[slideindex].iframe;
  document.querySelector('.slider iframe').src = iframe;
}

function updateSliderButtons() {
  prevButton.disabled = slideindex === 0;
  nextButton.disabled = slideindex === CitySlider.length - 1;
}

prevButton.addEventListener('click', function() {
  slideindex--;
  updateSlider();
  updateSliderButtons();
});

nextButton.addEventListener('click', function() {
  slideindex++;
  updateSlider();
  updateSliderButtons();
});

updateSlider();
updateSliderButtons();