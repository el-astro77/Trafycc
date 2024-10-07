const slides = document.querySelectorAll(".slide");
const slideNumber = document.getElementById("slide-number");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let currentSlide = 0;
const totalSlides = slides.length;

function updateSlide() {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentSlide) {
      slide.classList.add("active");
    }
  });
  slideNumber.innerText = `0${
    currentSlide + 1
  } \u00a0 / \u00a0 0${totalSlides}`;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
});

// Initialize the first slide
updateSlide();

// Select elements
const clientCards = document.querySelectorAll(".client-card");
const navButtons = document.querySelectorAll(".nav-button");
const stepCount = document.querySelector(".step-count");

let currentIndex = 0;

// Function to update active client card and step count
function updateActiveCard() {
  // Remove active class from all cards
  clientCards.forEach((card) => card.classList.remove("active"));

  // Add active class to current card
  clientCards[currentIndex].classList.add("active");

  // Update step count
  stepCount.textContent = `0${currentIndex + 1} / 05`;
}

// Event listeners for navigation buttons
navButtons[0].addEventListener("click", () => {
  // Navigate left
  currentIndex = currentIndex === 0 ? clientCards.length - 1 : currentIndex - 1;
  updateActiveCard();
});

navButtons[1].addEventListener("click", () => {
  // Navigate right
  currentIndex = currentIndex === clientCards.length - 1 ? 0 : currentIndex + 1;
  updateActiveCard();
});

// Initialize first card as active
updateActiveCard();
