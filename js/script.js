const btnHamburger = document.querySelector("#btnHamburger");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

btnHamburger.addEventListener("click", function () {
  console.log("click Hamburger");
  if (menu.classList.contains("open")) {
    // Close Hamburger menu
    menu.classList.remove("open");
    overlay.classList.remove("open");
  } else {
    // Open Hamburger menu
    menu.classList.add("open");
    overlay.classList.add("open");
  }
});
