// Execute these on initial content load
document.addEventListener('DOMContentLoaded', function () {

  // Hamburger menu
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const hamburgerMenu = document.querySelector('.hamburger-menu-items');
  const hamburgerMenuItems = document.querySelectorAll('.hamburger-menu-items li');

  if (hamburgerIcon && hamburgerMenu && hamburgerMenuItems) {
    hamburgerIcon.addEventListener('click', function () {
      hamburgerMenu.classList.toggle('show-menu');
      hamburgerMenu.classList.toggle('slide-in');
    });

    hamburgerMenuItems.forEach(item => {
      item.addEventListener('click', function () {
        hamburgerMenu.classList.remove('show-menu');
        hamburgerMenu.classList.remove('slide-in');
      });
    });
  }
});