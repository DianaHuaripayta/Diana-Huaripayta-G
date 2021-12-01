const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
/* cerrar */
const navLink = document.querySelectorAll(".nav-item");
navLink.forEach(item => item.addEventListener('click', linkClose))
function linkClose() {
  menu.classList.remove("menu_opened");
}