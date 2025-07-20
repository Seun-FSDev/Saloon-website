const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");
const header = document.getElementById("site-header");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});


