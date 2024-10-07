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
const stepCount = document.querySelector(".client-count");

let currentIndex = 0;
const totalCards = clientCards.length;

function updateActiveCard() {
  // Remove the 'active' class from all cards
  clientCards.forEach((card) => card.classList.remove("active"));
  // Add the 'active' class to the current card
  clientCards[currentIndex].classList.add("active");

  // Update the step count with a formatted string
  stepCount.textContent = `0${currentIndex + 1} \u00a0 / \u00a0 0${totalCards}`;

  // Debugging log to confirm the update is happening
  console.log(`Current card: ${currentIndex + 1} of ${totalCards}`);
}

// Event listener for left navigation button
navButtons[0].addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
  updateActiveCard();
});

// Event listener for right navigation button
navButtons[1].addEventListener("click", () => {
  currentIndex = currentIndex === totalCards - 1 ? 0 : currentIndex + 1;
  updateActiveCard();
});

// Initialize the first card as active
updateActiveCard();
