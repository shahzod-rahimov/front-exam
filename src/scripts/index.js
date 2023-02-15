const aboutUs = document.querySelector(".about-us");
const helpCenter = document.querySelector(".help-center");
const dropdownAbout = document.querySelector(".dropdown-about");
const dropdownHelp = document.querySelector(".dropdown-help");

console.log(aboutUs);

aboutUs.addEventListener("mouseover", (e) => {
  dropdownAbout.classList.remove("hidden");
});

helpCenter.addEventListener("mouseover", (e) => {
  dropdownHelp.classList.remove("hidden");
});

aboutUs.addEventListener("mouseout", (e) => {
  dropdownAbout.classList.add("hidden");
});

helpCenter.addEventListener("mouseout", (e) => {
  dropdownHelp.classList.add("hidden");
});
