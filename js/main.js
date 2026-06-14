// Hamburger menu toggle
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Shrink nav on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 40
    ? '0 2px 20px rgba(0,0,0,0.5)'
    : 'none';
});

// Active nav link highlight based on scroll position
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav__links a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(a => a.style.color = '');
        const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => observer.observe(s));

// Fade-in on scroll for cards
const fadeEls = document.querySelectorAll('.project-card, .skill-group, .highlight-card');
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});
