//Carousel 
var slides = document.querySelectorAll('.slide');
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', function() {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000); // Change slide every 3 seconds
});


//Cards (didn't work)
const cardContainer = document.querySelector('.card-section');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

cardContainer.addEventListener('mousedown', dragStart);
cardContainer.addEventListener('touchstart', dragStart);
cardContainer.addEventListener('mouseup', dragEnd);
cardContainer.addEventListener('touchend', dragEnd);
cardContainer.addEventListener('mousemove', drag);
cardContainer.addEventListener('touchmove', drag);

function dragStart(e) {
  e.preventDefault();
  if (e.type === 'touchstart') {
    startPos = e.touches[0].clientX;
  } else {
    startPos = e.clientX;
  }
  isDragging = true;
  cardContainer.classList.add('grabbing'); // Add grabbing cursor style
}

function dragEnd() {
  isDragging = false;
  prevTranslate = currentTranslate;
  cardContainer.classList.remove('grabbing'); // Remove grabbing cursor style
}

function drag(e) {
  if (isDragging) {
    let currentPosition;
    if (e.type === 'touchmove') {
      currentPosition = e.touches[0].clientX;
    } else {
      currentPosition = e.clientX;
    }
    currentTranslate = prevTranslate + currentPosition - startPos;

    // Apply the translation to the card container
    cardContainer.style.transform = `translateX(${currentTranslate}px)`;
  }
}

//Search request
function searchAnime() {
   let searchQuery = document.getElementById("search-container").value;
console.log("Searching for anime : "+ searchQuery);
}
