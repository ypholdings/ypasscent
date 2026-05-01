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

// EmailJS initialization and form submission
(function() {
  emailjs.init("1bDA6vW1zOjHQYXeL");
})();

function sendEmail(event) {
  event.preventDefault();
  emailjs.sendForm('service_ilp7779', 'template_kkr3z12', event.target)
    .then(function() {
      alert('Application submitted successfully! We will get back to you soon.');
      document.getElementById('contactForm').reset();
    }, function(error) {
      alert('Failed to send application: ' + JSON.stringify(error));
    });
}
