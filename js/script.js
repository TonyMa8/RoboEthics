const btnHamburger = document.querySelector("#btnHamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  console.log("click Hamburger");
  if (menu.classList.contains("open")) {
    // Close Hamburger menu
    menu.classList.remove("open");
    overlay.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger menu
    menu.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
    overlay.classList.add("open");
  }
});
