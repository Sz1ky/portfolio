const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// Close hamburger menu when a nav link is clicked (mobile)
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Only if hamburger menu is open
    if (navMenu.classList.contains("show")) {
      navMenu.classList.remove("show");
      hamburger.classList.remove("active");
    }
  });
});
