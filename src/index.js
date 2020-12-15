const gallery = document.querySelector('.gallery');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

let position = 0;
const dist = -220;
const num = 4;
const opacity = 0.3

const change = (position) => {
  gallery.style.transform = `translateX(${position * dist}px)`;
}

const doPrevious = previous.addEventListener('click', () => {
  next.style.opacity = 1;
  if ( position == 0) {
    previous.style.opacity = opacity;
    return
  }
  change(--position);
});

const doNext = next.addEventListener('click', () => {
  previous.style.opacity = 1;
  if ( position == num) {
    next.style.opacity = opacity;
    return;
  }
  change(++position);
});

