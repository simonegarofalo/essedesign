const textElement = document.querySelector('.dinamic-text-content');
const texts = ['sito web', 'brand', 'business'];
let textIndex = 0;

textElement.textContent = texts[textIndex];

textElement.addEventListener('animationiteration', () => {
  textIndex = (textIndex + 1) % texts.length;
  textElement.textContent = texts[textIndex];
});

gsap.set("#card-1", { y: 100, opacity: 0 });
ScrollTrigger.batch("#card-1", {
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.5 }),
});
gsap.set("#card-2", { y: 100, opacity: 0 });
ScrollTrigger.batch("#card-2", {
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.5 }),
});
gsap.set("#card-3", { y: 100, opacity: 0 });
ScrollTrigger.batch("#card-3", {
  onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.5 }),
});