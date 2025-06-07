const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('mobile-nav');

hamburgerBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  document.body.classList.toggle('menu-open');
  // Animate hamburger icon (optional)
  hamburgerBtn.classList.toggle('active');
});

// Optional: close menu when clicking a link
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
    hamburgerBtn.classList.remove('active');
  });
});