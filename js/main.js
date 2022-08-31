const btnMobile = document.querySelector('.btn-mobile');
const menuMobile = document.querySelector('aside');
btnMobile.addEventListener('click', () => {
  btnMobile.classList.toggle('active');
  menuMobile.classList.toggle('active');
});

AOS.init({
  duration: 1000,
  once: true,
  disable: 'mobile',
});
