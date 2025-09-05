const openForm = document.getElementById("open-form");
const modal = document.querySelector(".modal-overlay");

openForm.addEventListener("click", () => {
  modal.classList.add("active");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});
