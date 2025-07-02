let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const totalSlides = images.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}
setInterval(() => moveSlide(1), 4000); // muda a cada 3 segundos
