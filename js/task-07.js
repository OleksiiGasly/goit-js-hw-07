const sizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeEl.addEventListener('input', () =>
(textEl.style.fontSize = `${sizeEl.value}px`),
);