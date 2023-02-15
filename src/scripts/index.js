const aboutUs = document.querySelector(".about-us");
const helpCenter = document.querySelector(".help-center");
const dropdownAbout = document.querySelector(".dropdown-about");
const dropdownHelp = document.querySelector(".dropdown-help");
const loginBtn = document.querySelector(".login");
const modalWindow = document.querySelector(".modal-window");
const exitBtn = document.querySelector(".exit");

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

loginBtn.addEventListener("click", (e) => {
  modalWindow.classList.toggle("hidden");
});

exitBtn.addEventListener("click", (e) => {
  modalWindow.classList.toggle("hidden");
});

modalWindow.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-window")) {
    modalWindow.classList.toggle("hidden");
  }
});
