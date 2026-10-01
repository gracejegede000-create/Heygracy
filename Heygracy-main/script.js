// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

// Work sample lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const img = lightbox.querySelector('img');
  const cap = lightbox.querySelector('figcaption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  let lastFocus = null;

  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  };

  document.querySelectorAll('.sample').forEach(btn => {
    btn.addEventListener('click', () => {
      lastFocus = btn;
      img.src = btn.dataset.full;
      img.alt = btn.querySelector('h3').textContent;
      cap.textContent = btn.querySelector('h3').textContent;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    });
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('open')) close(); });
}

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
