const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const body = document.getElementsByTagName("body");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// const sections = document.querySelectorAll("section");
// const navLinks_a = document.querySelectorAll(".nav-links a");

// window.addEventListener("scroll", () => {

//   let current = "";

//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 150;
//     const sectionHeight = section.offsetHeight;

//     if (window.scrollY >= sectionTop &&
//         window.scrollY < sectionTop + sectionHeight) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks_a.forEach(link => {
//     link.classList.remove("active");

//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });

// });