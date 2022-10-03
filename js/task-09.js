function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const currentBgColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', onClick);

function onClick() {
  const currentHexColor = getRandomHexColor();
  document.body.style.backgroundColor = currentHexColor;
  currentBgColor.textContent = currentHexColor;
}
