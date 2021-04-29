'use-strict';

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__hamburger');
const closeBtn = document.querySelector('.menu-btn__close');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-menu__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    closeBtn.classList.add('open');
    nav.classList.add('open');
    navMenu.classList.add('open');
    navItems.forEach(navItem => navItem.classList.add('open'));
    showMenu = true;
  } else {
    hamburger.classList.remove('open');
      closeBtn.classList.remove('open');
      nav.classList.remove('open');
      navMenu.classList.remove('open');
      navItems.forEach(navItem => navItem.classList.remove('open'));
    showMenu = false;
  }
}
