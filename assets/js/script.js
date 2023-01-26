const navToggler = document.querySelector(".navbar-toggler");
const nav = document.querySelector(".navbar-collapse");
const hero = document.querySelector(".hero");
console.log(nav);

console.log(navToggler);
navToggler.addEventListener("click", () => {
  nav.classList.add("show");
});
