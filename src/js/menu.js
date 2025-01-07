document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.header__menu--icon');
    const menu = document.querySelector('.header__menu');

    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('cross');
        menu.classList.toggle('open');
    });
});