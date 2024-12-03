const nav = document.querySelector('.mobile-nav');

window.addEventListener("scroll", function() {
    if (window.scrollY > 10) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove("scrolled");
    }
});