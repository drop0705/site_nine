function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.add("open");
  }
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popup) {
    popup.classList.remove("open");
  }
}


const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider__img-container');
const sliderLine = document.querySelector('.slider__line');

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

function nextSlide() {
  sliderImages.forEach(image => image.classList.remove('active'));
  sliderCount = (sliderCount + 1) % sliderImages.length;
  sliderImages[sliderCount].classList.add('active');
  rollSlider();
}




function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

setInterval(() => {
  nextSlide();
}, 1000);

// Set initial state
sliderImages[0].classList.add('active');