window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var aboutSection = document.querySelector('#about');
    var aboutSectionTop = aboutSection.offsetTop;
    var scrollPosition = window.scrollY;

    if (scrollPosition >= aboutSectionTop) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

