// Toggle hamburger menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    const isHidden = navLinks.classList.contains("hide-nav");

    if (isHidden) {
      navLinks.classList.remove("hide-nav");
      navLinks.classList.add("show-nav");
    } else {
      navLinks.classList.remove("show-nav");
      navLinks.classList.add("hide-nav");
    }
  });
});
