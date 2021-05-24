var burger = document.querySelector('.burger');
var nav = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li');
function navSlide() { 
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-rotated');
    navLinks.forEach((link,i) => {
        setTimeout(function() {
        link.classList.toggle('link-opacitated');
        }, 1000 * i / 10);
    });
}