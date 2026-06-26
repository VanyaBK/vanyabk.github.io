const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });
  links.forEach((link) => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.style.overflow = '';
  }));
}

document.getElementById('year').textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealElements.forEach((element) => observer.observe(element));
