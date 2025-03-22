const hamburger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__menu');
const close = document.querySelector('.nav__menu-close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});