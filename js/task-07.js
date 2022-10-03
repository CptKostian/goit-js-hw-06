const textSize = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textSize.addEventListener('input', () => {
  textEl.style.fontSize = `${textSize.value}px`;
});
