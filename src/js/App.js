const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const body = document.getElementsByTagName("body");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
