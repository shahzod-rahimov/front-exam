const aboutUs = document.querySelector(".about-us");
const helpCenter = document.querySelector(".help-center");
const dropdownAbout = document.querySelector(".dropdown-about");
const dropdownHelp = document.querySelector(".dropdown-help");
const loginBtn = document.querySelector(".login");
const modalWindow = document.querySelector(".modal-window");
const exitBtn = document.querySelector(".exit");
const catalogCar = document.querySelector(".catalog__car");

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

function createCatalog() {
  catalogCars.forEach((obj) => {
    const context = `
              <h3 class="text-2xl font-semibold ">${obj.title}</h3>
              <p class="font-medium text-[#555] mt-2 ">${obj.subtitle}</p>
              <img
                src=${obj.img}
                alt=${obj.title}
                class="mt-4"
              />

              <div class="flex gap-[68px]">
                <div class="flex gap-[15px]">
                  <img src="./images/icons/user-black.svg" alt="" />
                  <p class="font-medium">5 Seats</p>
                </div>
                <div class="flex gap-[15px]">
                  <img src="./images/icons/position-black.svg" alt="" />
                  <p class="font-medium">Automatic</p>
                </div>
              </div>

              <div class="flex gap-[56px]">
                <div class="flex gap-[15px]">
                  <img src="./images/icons/zip-user-black.svg" alt="" />
                  <p class="font-medium">21+ Years</p>
                </div>
                <div class="flex gap-[15px]">
                  <img src="./images/icons/liquid-black.svg" alt="" />
                  <p class="font-medium">1-lit / 2.5 km</p>
                </div>
              </div>
    `;
    console.log(context);

    const car = createElement(
      "div",
      "card w-[387px] bg-[#F5F5F5] p-6 rounded-2xl hover:bg-[#299764] hover:text-white",
      context
    );

    catalogCar.append(car);
  });
}

createCatalog();
