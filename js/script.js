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

