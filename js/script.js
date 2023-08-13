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

///Page navigation
document.querySelector(".links").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");

  //matching
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

//Sticky Navigation: Intersection Observer API

//const header = document.querySelector(".header");
//const navHeight = header.getBoundingClientRect().height;

//const stickyNav = function (entries) {
//const [entry] = entries;

//if (!entry.isIntersecting) {
//header.classList.add("sticky");
//} else {
// header.classList.remove("sticky");
// }
//};

//const headerObserver = new IntersectionObserver(stickyNav, {
//root: null,
//threshold: 0,
//rootMargin: `${navHeight}px`,
//});

//headerObserver.observe(header);

const header = document.querySelector(".header");
const container = document.querySelector(".container"); // Define the container element
const navHeight = container.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    container.classList.add("sticky");
  } else {
    container.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${navHeight}px`,
});
headerObserver.observe(header);

const h1 = document.querySelector("h1");
const body = document.querySelectorAll("body");
