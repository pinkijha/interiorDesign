const slides = document.querySelectorAll('.slides .slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100; // Slide width is 100%
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto-slide every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// navbar
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the "active" class
});

// Toggle menu

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    navLinks.classList.toggle('active');
    body.classList.toggle('blur-active');
}

// Project Section
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.tab-btn.active').classList.remove('active');
        this.classList.add('active');

        const type = this.getAttribute('data-type');
        document.querySelector('.project-tab-content.active').classList.remove('active');
        document.querySelector(`.project-tab-content.${type}`).classList.add('active');
    });
});

// contact Form
// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload on form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      this.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  



