import dayjs from "dayjs";

// Selecionando os elementos.
const modal = document.querySelector(".modal-overlay");
const openFormButton = document.getElementById("open-form");
const scheduleInputDate = document.getElementById("schedule-date");
const scheduleInputHour = document.getElementById("hour");

// Evento para abrir o formulário.
openFormButton.addEventListener("click", () => {
  // Abre o formulário.
  modal.classList.add("active");

  // Seleciona a data e a hora atual.
  const date = dayjs(new Date()).format("YYYY-MM-DD");
  const hour = dayjs(new Date()).format("HH:mm");

  // Define a data e a hora no formulário.
  scheduleInputDate.value = date;
  scheduleInputHour.value = hour;

  // Define a data e a hora mínima no formulário.
  scheduleInputDate.min = date;
  scheduleInputHour.min = hour;
});

// Evento para fechar o formulário.
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});
