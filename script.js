document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.nav-menu-btn');
    const navMenu = document.getElementById('myNavMenu');
  
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });