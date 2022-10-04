const inputEl = document.querySelector('#validation-input');
const reqLength = Number(inputEl.getAttribute('data-length'));

const onBlur = () => {
  if (inputEl.value.length === reqLength) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onBlur);
