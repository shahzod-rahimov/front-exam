const aboutUs = document.querySelector(".about-us");
const helpCenter = document.querySelector(".help-center");
const dropdownAbout = document.querySelector(".dropdown-about");
const dropdownHelp = document.querySelector(".dropdown-help");
const loginBtn = document.querySelector(".login");
const modalWindow = document.querySelector(".modal-window");
const exitBtn = document.querySelector(".exit");
const catalogCar = document.querySelector(".catalog__car");
const compactBtn = document.querySelector(".compact");
const sportCarsBtn = document.querySelector(".sport-cars");
const vansBtn = document.querySelector(".vans");
const mode = document.querySelector(".mode");
const modeIcon = document.querySelector("#mode-icon");
const brands = document.querySelector(".brand__images");

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

compactBtn.addEventListener("click", (e) => {
  removeActive();

  compactBtn.classList.add("active");
  createCars(compactCars);
});

sportCarsBtn.addEventListener("click", (e) => {
  removeActive();

  sportCarsBtn.classList.add("active");
  createCars(sportCars);
});

vansBtn.addEventListener("click", (e) => {
  removeActive();
  vansBtn.classList.add("active");
  createCars(vanCars);
});

function removeActive() {
  compactBtn.classList.remove("active");
  sportCarsBtn.classList.remove("active");
  vansBtn.classList.remove("active");
}

function createCars(arr) {
  catalogCar.innerHTML = "";
  arr.forEach((obj) => {
    const context = `
              <h3 class="text-2xl font-semibold ">${obj.title}</h3>
              <p class="subtitle-white font-medium text-[#555] dark:text-white mt-2 ">${obj.subtitle}</p>
              <img
                src=${obj.img}
                alt=${obj.title}
                class="mt-4"
              />

              <div class="flex gap-[68px]">
                <div class="flex items-center gap-[15px]">
                  <!-- <img src="./images/icons/user-black.svg" alt="" /> -->
                  <!-- <i class="fa-solid fa-user-large text-xs"></i> -->

                  <svg id="user" class="svg" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99996 0.125C5.27407 0.125 3.87496 1.52411 3.87496 3.25C3.87496 4.97589 5.27407 6.375 6.99996 6.375C8.72585 6.375 10.125 4.97589 10.125 3.25C10.125 1.52411 8.72585 0.125 6.99996 0.125Z" fill="black"/>
                  <path d="M3.66663 8.04167C1.94074 8.04167 0.541626 9.44078 0.541626 11.1667V12.1569C0.541626 12.7846 0.996529 13.3198 1.61602 13.4209C5.18171 14.0031 8.81821 14.0031 12.3839 13.4209C13.0034 13.3198 13.4583 12.7846 13.4583 12.1569V11.1667C13.4583 9.44078 12.0592 8.04167 10.3333 8.04167H10.0492C9.89549 8.04167 9.74271 8.06598 9.59657 8.1137L8.8753 8.34921C7.65673 8.74712 6.34319 8.74712 5.12462 8.34921L4.40335 8.1137C4.2572 8.06598 4.10443 8.04167 3.95068 8.04167H3.66663Z" fill="black"/>
                  </svg>

                  <p class="font-medium">5 Seats</p>
                </div>
                <div class="flex items-center gap-[15px]">
                <!-- <img src="./images/icons/position-black.svg" alt="" /> -->

                <svg id="position" class="svg" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM12 7.6666C12 8.21888 11.5523 8.6666 11 8.6666H9.6666C9.11432 8.6666 8.6666 9.11432 8.6666 9.6666V11.3334C8.6666 11.7016 8.36815 12 8 12C7.63185 12 7.3334 11.7016 7.3334 11.3334V9.6666C7.3334 9.11432 6.88568 8.6666 6.3334 8.6666C5.78112 8.6666 5.3334 9.11432 5.3334 9.6666V11.3333C5.3334 11.7015 5.03491 12 4.6667 12C4.29849 12 4 11.7015 4 11.3333V4.6667C4 4.29849 4.29849 4 4.6667 4C5.03491 4 5.3334 4.29849 5.3334 4.6667V6.3334C5.3334 6.88568 5.78112 7.3334 6.3334 7.3334C6.88568 7.3334 7.3334 6.88568 7.3334 6.3334V4.6666C7.3334 4.29845 7.63185 4 8 4C8.36815 4 8.6666 4.29845 8.6666 4.6666V6.3334C8.6666 6.88568 9.11432 7.3334 9.6666 7.3334C10.2189 7.3334 10.6666 6.88568 10.6666 6.3334V4.6667C10.6666 4.29849 10.9651 4 11.3333 4C11.7015 4 12 4.29849 12 4.6667V7.6666Z" fill="black"/>
                </svg>

                  <p class="font-medium">Automatic</p>
                </div>
              </div>

              <div class="flex items-center gap-[55px]">
                <div class="flex gap-[15px]">
                  <!-- <img src="./images/icons/zip-user-black.svg" alt="" /> -->
                  <!-- <i class="fa-solid fa-file-user"></i>  -->

                  <svg id="user-file" class="svg" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.87496 1.08333C8.87496 0.968274 8.78169 0.875 8.66663 0.875H2.83329C1.56764 0.875 0.541626 1.90102 0.541626 3.16667V14.8333C0.541626 16.099 1.56764 17.125 2.83329 17.125H11.1666C12.4323 17.125 13.4583 16.099 13.4583 14.8333V6.62255C13.4583 6.50749 13.365 6.41422 13.25 6.41422H9.49996C9.15478 6.41422 8.87496 6.13439 8.87496 5.78922V1.08333ZM6.99996 7.33333C6.07948 7.33333 5.33329 8.07953 5.33329 9C5.33329 9.92047 6.07948 10.6667 6.99996 10.6667C7.92043 10.6667 8.66663 9.92047 8.66663 9C8.66663 8.07953 7.92043 7.33333 6.99996 7.33333ZM3.66663 14.4167C3.66663 13.036 4.78591 11.9167 6.16663 11.9167H7.83329C9.21401 11.9167 10.3333 13.036 10.3333 14.4167C10.3333 14.8769 9.9602 15.25 9.49996 15.25H4.49996C4.03972 15.25 3.66663 14.8769 3.66663 14.4167Z" fill="black"/>
                  <path d="M10.125 1.35345C10.125 1.1997 10.2855 1.10208 10.4051 1.19866C10.5059 1.28 10.5965 1.3753 10.6737 1.48296L13.1847 4.98121C13.2419 5.06085 13.1799 5.16422 13.0819 5.16422H10.3333C10.2182 5.16422 10.125 5.07094 10.125 4.95588V1.35345Z" fill="black"/>
                  </svg>

                  <p class="font-medium">21+ Years</p>
                </div>
                <div class="flex items-center gap-[15px]">
                  <!-- <img src="./images/icons/liquid-black.svg" alt="" /> -->
                  <!-- <i class='bx bxs-droplet'></i> --> 

                  <svg id="drop" class="svg" width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 8.54991C11 11.4909 8.62151 13.875 5.6875 13.875C2.75349 13.875 0.375 11.4909 0.375 8.54991C0.375 5.60897 5.6875 0.125 5.6875 0.125C5.6875 0.125 11 5.60897 11 8.54991Z" fill="black"/>
                  </svg>


                  <p class="font-medium">1-lit / 2.5 km</p>
                </div>
              </div>
    `;

    const car = createElement(
      "div",
      "card w-[387px] bg-[#F5F5F5] p-6 rounded-2xl hover:bg-[#299764] hover:text-white hover:duration-500 dark:bg-[#272727]",
      context
    );

    catalogCar.append(car);
  });
}

createCars(compactCars);

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  modeIcon.classList.remove("bxs-moon");
  modeIcon.classList.add("bxs-sun");
  changeImg(branImages);
  svgWhite();
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  modeIcon.classList.remove("bxs-sun");
  modeIcon.classList.add("bxs-moon");
}

mode.addEventListener("click", (e) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeIcon.classList.remove("bxs-sun");
    modeIcon.classList.add("bxs-moon");
    svgWhite();
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeIcon.classList.remove("bxs-moon");
    modeIcon.classList.add("bxs-sun");
    changeImg(branImages);
    svgWhite();
  }
});

function changeImg(arr) {
  console.log(111);
  brands.innerHTML = "";
  arr.forEach((obj) => {
    const img = document.createElement("img");
    img.setAttribute("src", obj.img);
    brands.append(img);
  });
}

function svgWhite() {
  const svgs = document.querySelectorAll(".svg");
  svgs.forEach((tag) => {
    console.log();
    if (tag.classList.contains("white")) {
      tag.classList.remove("white");
    } else {
      tag.classList.add("white");
    }
  });
}
console.log(svgs);
