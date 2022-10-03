const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onInput = name => {
  name.currentTarget.value === ''
    ? (nameOutput.textContent = 'Stranger')
    : (nameOutput.textContent = name.currentTarget.value);
};

nameInput.addEventListener('input', onInput);
