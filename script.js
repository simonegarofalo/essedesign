const textElement = document.querySelector('.dinamic-text-content');
const texts = ['sito web', 'brand', 'business'];
let textIndex = 0;

textElement.textContent = texts[textIndex];

textElement.addEventListener('animationiteration', () => {
  textIndex = (textIndex + 1) % texts.length;
  textElement.textContent = texts[textIndex];
});