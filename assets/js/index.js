document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.querySelector(".header__inner-burger");
  const burgerOverlay = document.querySelector(".header__overlay");
  const burgerLink = burgerOverlay.querySelectorAll("a");

  burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.toggle("header__inner-burger--active");
    burgerOverlay.classList.toggle("header__overlay--active");
  });

  burgerLink.forEach((link) => {
    link.addEventListener("click", () => {
      burgerIcon.classList.remove("header__inner-burger--active");
      burgerOverlay.classList.remove("header__overlay--active");
    });
  });
});
