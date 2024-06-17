const scrollToTop = document.querySelector('.scroll-up-btn');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerOpenIcon = document.querySelector('.burger-icon');
const burgerCloseIcon = document.querySelector('.burger-close');
const navLinks = burgerMenu.querySelectorAll('a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu-open');
    burgerCloseIcon.classList.toggle('show');
    burgerOpenIcon.classList.toggle('show');
  });
});

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger-menu-open');
  burgerCloseIcon.classList.toggle('show');
  burgerOpenIcon.classList.toggle('show');
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTop.style.display = 'block';
  } else {
    scrollToTop.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollToTop.addEventListener('click', () => topFunction());
