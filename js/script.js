var backToTop = document.querySelector('#back-to-top');
var scrollPosition = window.scrollY;

window.addEventListener('scroll', function() {
    scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'hidden' });
});

// Hamberger Menu
var hamburger = document.querySelector('#hamburger');
var nav = document.querySelector('nav');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
});

$(function() {
    $('img.lazy').lazyload();
});

