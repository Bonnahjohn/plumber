// navbar toggling
const button = document.getElementById("togger");
const toggling = document.getElementById("toggle");
button.addEventListener("click", () => {
  toggling.classList.toggle("left-0");
});

// nav bgColor change
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("change", scrollY > 0);
});
