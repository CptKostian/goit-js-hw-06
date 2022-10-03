let counterValue = 0;
const valueEl = document.querySelector('#value');

const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');

const onDecrementClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementEl.addEventListener('click', onDecrementClick);
incrementEl.addEventListener('click', onIncrementClick);
