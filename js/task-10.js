function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let sizes = 30;
const boxOfEl = document.querySelector('#boxes');
const controlsEl = document.querySelector('#controls');
const createEl = document.querySelector('button[data-create]');
const destroyEl = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
  let currentElements = '';

  for (let i = 0; i < amount; i += 1) {
    currentElements += '<div></div>';
  }

  boxOfEl.insertAdjacentHTML('beforeend', currentElements);

  for (let i = boxOfEl.children.length - amount; i < boxOfEl.children.length; i += 1) {
    boxOfEl.children[i].style.width = `${sizes}px`;
    boxOfEl.children[i].style.height = `${sizes}px`;
    boxOfEl.children[i].style.backgroundColor = getRandomHexColor();
    sizes += 10;
  }
}

function destroyBoxes() {
  boxOfEl.innerHTML = '';
  sizes = 30;
}

createEl.addEventListener('click', () => {
  createBoxes(controlsEl.firstElementChild.value);
});

destroyEl.addEventListener('click', destroyBoxes);
