const mobileBtn   = document.querySelector('#mobile-btn'),
      mobileMenu  = document.querySelector('#mobile-menu');

mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});