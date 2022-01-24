anime({
  targets: ".below-hero-path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 5000,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: false
});

anime({
  targets: ".footer-path, .below-projects, .below-skills, .below-contacts",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true
});

document.querySelector(".mob-nav").addEventListener("click", () => {
  const elements = document.querySelectorAll(".bar");
  elements.forEach((x) => x.classList.toggle("on"));

  document.querySelector(".nav-wrapper ul").classList.toggle("nav-active");
});
const element = document.querySelectorAll(".nav-wrapper ul");
element.forEach((x) =>
  x.addEventListener("click", () => {
    x.classList.toggle("nav-active");
  })
);
