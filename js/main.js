// ==================== SHOW MENU ====================
const headMiddle = document.getElementById('head-middle'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  visibility = headMiddle.getAttribute('data-visible');

// ===== MENU SHOW =====
navToggle.addEventListener('click', () => {
  headMiddle.setAttribute('data-visible', true);
});

// ===== MENU CLOSE =====
navClose.addEventListener('click', () => {
  headMiddle.setAttribute('data-visible', false);
});
