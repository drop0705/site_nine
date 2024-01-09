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

// const images_1 = [
//  "./img/slaider_1/slaider_1_1.svg",
//  "./img/slaider_1/slaider_1_2.svg",
//  "./img/slaider_1/slaider_1_3.svg",
//  "./img/slaider_1/slaider_1_4.svg",
//  "./img/slaider_1/slaider_1_5.svg"
//  ];
// const images_2 = [
//  "./img/slaider_2/slaider_2_1.svg",
//  "./img/slaider_2/slaider_2_2.svg",
//  "./img/slaider_2/slaider_2_3.svg",
//  "./img/slaider_2/slaider_2_4.svg",
//  "./img/slaider_2/slaider_2_5.svg"
//  ];
// const images_3 = [
//  "./img/slaider_3/slaider_3_1.svg",
//  "./img/slaider_3/slaider_3_2.svg",
//  "./img/slaider_3/slaider_3_3.svg",
//  "./img/slaider_3/slaider_3_4.svg",
//  "./img/slaider_3/slaider_3_5.svg"
//  ];
// const images_4 = [
//  "./img/slaider_4/slaider_4_1.svg",
//  "./img/slaider_4/slaider_4_2.svg",
//  "./img/slaider_4/slaider_4_3.svg",
//  "./img/slaider_4/slaider_4_4.svg",
//  "./img/slaider_4/slaider_4_5.svg"
//  ];
// const images_5 = [
//  "./img/slaider_5/slaider_5_1.svg",
//  "./img/slaider_5/slaider_5_2.svg",
//  "./img/slaider_5/slaider_5_3.svg",
//  "./img/slaider_5/slaider_5_4.svg",
//  "./img/slaider_5/slaider_5_5.svg"
//  ];

// let currentImageIndex_1 = 0;
// let currentImageIndex_2 = 0;
// let currentImageIndex_3 = 0;
// let currentImageIndex_4 = 0;
// let currentImageIndex_5 = 0;
// const slideshowImg_1 = document.getElementById('slideshowImg_1');
// const slideshowImg_2 = document.getElementById('slideshowImg_2');
// const slideshowImg_3 = document.getElementById('slideshowImg_3');
// const slideshowImg_4 = document.getElementById('slideshowImg_4');
// const slideshowImg_5 = document.getElementById('slideshowImg_5');
// function changeImage_1() {
//                   slideshowImg_1.src = images_1[currentImageIndex_1];
//                   currentImageIndex_1 = (currentImageIndex_1 + 1) % images_1.length;}
//                   function changeImage_2() {
//                    slideshowImg_2.src = images_2[currentImageIndex_2];
//                    currentImageIndex_2 = (currentImageIndex_2 + 1) % images_2.length;}
//                    function changeImage_3() {
//                    slideshowImg_3.src = images_3[currentImageIndex_3];
//                    currentImageIndex_3 = (currentImageIndex_3 + 1) % images_3.length;}
//                    function changeImage_4() {
//                    slideshowImg_4.src = images_4[currentImageIndex_4];
//                    currentImageIndex_4 = (currentImageIndex_4 + 1) % images_4.length;}
//                    function changeImage_5() {
//                    slideshowImg_5.src = images_5[currentImageIndex_5];
//                    currentImageIndex_5 = (currentImageIndex_5 + 1) % images_5.length;
//                }
//                changeImage_1();
//                changeImage_2();
//                changeImage_3();
//                changeImage_4();
//                changeImage_5();
//                setInterval(changeImage_1, 1000);
//                setInterval(changeImage_2, 900);
//                setInterval(changeImage_3, 800);   
//                setInterval(changeImage_4, 700);
//                setInterval(changeImage_5, 600);



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