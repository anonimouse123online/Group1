// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  const expanded = navLinks.classList.toggle("show");
  hamburger.setAttribute("aria-expanded", expanded);
});

document.addEventListener("click", e => {
  if (window.innerWidth <= 768 &&
      navLinks.classList.contains("show") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)) {
    navLinks.classList.remove("show");
    hamburger.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".form-box button").addEventListener("click", function(){
  alert("Your message has been sent successfully!");
});