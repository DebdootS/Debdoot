document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
      }
    });
  });

  sections.forEach(section => {
    appearOnScroll.observe(section);
  });
});
