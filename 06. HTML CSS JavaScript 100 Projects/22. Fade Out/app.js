let arrow = document.getElementById("arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY <= 5) {
    arrow.classList.toggle("fade-in", true);
    arrow.classList.toggle("fade-out", false);
  } else {
    arrow.classList.toggle("fade-in", false);
    arrow.classList.toggle("fade-out", true);
  }
});

