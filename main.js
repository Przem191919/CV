const ham = document.querySelector(".humburger");
const navL = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

function togglemenu() {
  ham.classList.toggle("active");
  navL.classList.toggle("active");
}

function closeMenu() {
  ham.classList.remove("active");
  navL.classList.remove("active");
}

ham.addEventListener("click", togglemenu);
