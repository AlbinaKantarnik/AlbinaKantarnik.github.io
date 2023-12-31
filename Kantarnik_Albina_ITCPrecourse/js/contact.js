function checkFormCompletion() {
  const nameInput = document.querySelector('#name');
  const lastnameInput = document.querySelector('#lastname');
  const phoneInput = document.querySelector('#phone');
  const emailInput = document.querySelector('#email');
  const dateInput = document.querySelector('#date');
  const qtyInput = document.querySelector('#qty');
  const commentsInput = document.querySelector('#comments');
  const submitBtn = document.querySelector('#submitBtn');
  
  if ( // все ли поля заполнены
    nameInput.value !== '' &&
    emailInput.value !== '' &&
    phoneInput.value !== '' &&
    dateInput.value !== '' &&
    qtyInput.value !== '' &&
    commentsInput.value !== '' &&
    (lastnameInput.value !== '' || lastnameInput.value === '')
  ) {
    // Разблокируем кнопку
    submitBtn.disabled = false;
    submitBtn.classList.add('enabled');
  } else {
    // Блокируем кнопку
    submitBtn.disabled = true;
    submitBtn.classList.remove('enabled');
  }
}

const form = document.querySelector('form');

// + обработчики события input на каждое поле формы
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', checkFormCompletion);

const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', checkFormCompletion);

const phoneInput = document.querySelector('#phone');
phoneInput.addEventListener('input', checkFormCompletion);

const dateInput = document.querySelector('#date');
dateInput.addEventListener('input', checkFormCompletion);

const qtyInput = document.querySelector('#qty');
qtyInput.addEventListener('input', checkFormCompletion);

const commentsInput = document.querySelector('#comments');
commentsInput.addEventListener('input', checkFormCompletion);

checkFormCompletion();
