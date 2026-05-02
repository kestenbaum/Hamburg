const burgerMenu = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');

burgerMenu.addEventListener('click', () => {
  headerMenu.classList.toggle('header__menu-active');
  burgerMenu.classList.toggle('active');
});
