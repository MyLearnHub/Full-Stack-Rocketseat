// Aula 10 - Eventos em um elemento específico

// const ul = document.querySelector("ul");

// ul.addEventListener("scroll", () => {
//   if (ul.scrollTop > 300) {
//     // console.log("FIM DA LISTA");

//     ul.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }
// });

// const button = document.querySelector("button");
// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("CLICOU!");
// });

// ---------------------------------------

// Aula 11 - Eventos de Formulário

const form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez submit no formulário #1");
};

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("Você fez submit no formulário #2");
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(" Vocé fez submit no formulário #3");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(" Vocé fez submit no formulário #4");
});