// script.js - initialize icons, mobile nav toggle, and scroll reveals

// initialize lucide icons if available
if (typeof lucide !== 'undefined' && lucide.createIcons) {
  lucide.createIcons();
}

// Mobile nav toggle
const mobileToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// Intersection Observer for reveal animations
const ioOptions = { threshold: 0.08 };
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      io.unobserve(entry.target);
    }
  });
}, ioOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section, .glass').forEach(el => {
    el.classList.add('opacity-0', 'translate-y');
    io.observe(el);
  });

  // active link on scroll
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function onScroll() {
    const scrollPos = window.scrollY + window.innerHeight/3;
    let current = sections[0];
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#'+current.id));
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
