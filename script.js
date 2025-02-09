let currentIndex = 0;
const images = [
  "./images/im1.jpg", 
  "./images/im2.jpg",
  "./images/im3.jpg",
  "./images/im4.jpg",
  "./images/im5.jpg",
  "./images/im6.jpg",
  "./images/im7.jpg",
  "./images/im8.jpg",
  "./images/im9.jpg",
  "./images/im10.jpg",
  "./images/im11.jpg",
  "./images/im12.jpg",
  
];

const sliderContainer = document.querySelector(".slider-container");


function loadImages() {
  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    sliderContainer.appendChild(imgElement);
  });
}

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex >= images.length) {
    currentIndex = 0; 
  }
  if (currentIndex < 0) {
    currentIndex = images.length - 1; 
  }

  // Scroll the slider to the correct image
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function for automatic scrolling
function autoScroll() {
  setInterval(() => {
    moveSlide(1); 
  }, 3000); 
}

// Initialize the image slider
function initSlider() {
  loadImages();
  autoScroll(); 
}

initSlider(); 
