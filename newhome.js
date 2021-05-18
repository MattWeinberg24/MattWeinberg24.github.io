var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-rotated');
    });
}

navSlide();