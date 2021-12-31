//Get all testimonies & buttons
const testimony = document.querySelectorAll(".testimony");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

//Show id should be added to the testimony
next.addEventListener("click", () => {
  testimony.forEach((e) => {
    e.classList.toggle("show");
  });
});
