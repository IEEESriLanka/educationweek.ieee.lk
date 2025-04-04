// Back to Top Button
const backToTop = document.querySelector('#back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Fixed 'behavior' value
});

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Lazy Loading
$(function () {
  $('img.lazy').lazyload();
});

// Dynamic Tab Switching for Days
const dayButtons = document.querySelectorAll('.load-btns .btn');
const dayContents = document.querySelectorAll('.schedule-cont .day');

dayButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove 'active' class from all buttons and content
    dayButtons.forEach((b) => b.classList.remove('active'));
    dayContents.forEach((day) => day.classList.remove('active'));

    // Add 'active' to clicked button
    btn.classList.add('active');

    // Show corresponding content by data-day
    const dayNumber = btn.getAttribute('data-day');
    const activeDay = document.getElementById(`day${dayNumber}cont`);
    if (activeDay) {
      activeDay.classList.add('active');
    }
  });
});

AOS.init({
  duration: 1000,
  once: true
});

