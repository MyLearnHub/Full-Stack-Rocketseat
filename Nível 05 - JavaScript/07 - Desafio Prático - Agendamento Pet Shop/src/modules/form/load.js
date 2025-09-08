const modal = document.querySelector(".modal-overlay");
const openFormButton = document.getElementById("open-form");

// Evento para abrir o formulário.
openFormButton.addEventListener("click", () => {
  modal.classList.add("active");
});

// Evento para fechar o formulário.
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});
