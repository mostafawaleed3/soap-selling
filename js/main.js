// ==================== SHOW MENU ====================
const headNav = document.getElementById('head-navigation'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  visibility = headNav.getAttribute('data-visible');

// ===== MENU SHOW =====
navToggle.addEventListener('click', () => {
  headNav.setAttribute('data-visible', true);
});

// ===== MENU CLOSE =====
navClose.addEventListener('click', () => {
  headNav.setAttribute('data-visible', false);
});
