const inputEl = document.querySelector('#validation-input');

const onBlur = () => {
  if (inputEl.value.length >= inputEl.getAttribute('data-length')) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onBlur);
