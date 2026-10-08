document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animations
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
      disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
  }

  // Mobile navigation
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Current year in footer
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Small accessibility improvement: focus visible via keyboard
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks) {
      navLinks.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});
