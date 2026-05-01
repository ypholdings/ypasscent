// Nav scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Carousel functionality
(function() {
  const images = document.querySelectorAll('.carousel-image');
  const dots = document.querySelectorAll('.carousel-dot');
  const labels = document.querySelectorAll('.carousel-label');
  let currentIndex = 0;
  let autoplayInterval;

  function showImage(index) {
    // Remove active class from all
    images.forEach(img => img.classList.remove('carousel-active'));
    dots.forEach(dot => dot.classList.remove('carousel-dot-active'));
    labels.forEach(label => label.classList.remove('carousel-label-active'));
    
    // Add active class to current
    images[index].classList.add('carousel-active');
    dots[index].classList.add('carousel-dot-active');
    labels[index].classList.add('carousel-label-active');
    
    currentIndex = index;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextImage, 4000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Dot click handlers
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showImage(index);
      resetAutoplay();
    });
  });

  // Start autoplay
  startAutoplay();
})();


// EmailJS initialization and form submission
(function() {
  // Wait for EmailJS to be loaded
  if (window.emailjs) {
    emailjs.init("1bDA6vW1zOjHQYXeL");
  } else {
    // If EmailJS isn't loaded yet, wait for it
    document.addEventListener('DOMContentLoaded', function() {
      if (window.emailjs) {
        emailjs.init("1bDA6vW1zOjHQYXeL");
      }
    });
  }
})();

function sendEmail(event) {
  event.preventDefault();
  if (!window.emailjs) {
    alert('Email service is not loaded yet. Please try again.');
    return;
  }
  emailjs.sendForm('service_ilp7779', 'template_kkr3z12', event.target)
    .then(function() {
      alert('Application submitted successfully! We will get back to you soon.');
      document.getElementById('contactForm').reset();
    }, function(error) {
      alert('Failed to send application: ' + JSON.stringify(error));
    });
}
