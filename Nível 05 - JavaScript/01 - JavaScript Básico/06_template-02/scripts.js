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

// const form = document.querySelector("form");

// form.onsubmit = (event) => {
//   event.preventDefault();
//   console.log("Você fez submit no formulário #1");
// };

// form.onsubmit = (event) => {
//   event.preventDefault();
//   console.log("Você fez submit no formulário #2");
// };

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(" Vocé fez submit no formulário #3");
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(" Vocé fez submit no formulário #4");
// });

// ---------------------------------------

// Aula 12 - Eventos em Input

// const input = document.querySelector("input");

// // keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc.)
// /* input.addEventListener("keydown", (event) => {
//   console.log(event.key);
// }); */

// // keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
// input.addEventListener("keypress", (event) => {
//   console.log(event.key);
// });

// // change - quando o valor do input mudar
// input.onchange = () => {
//   inputChange();
// };

// function inputChange() {
//   console.log("O INPUT MUDOU!");
// }

// ---------------------------------------

// Aula 15 - Manipulando Valor do Input

// const input = document.querySelector("input");
// const form = document.querySelector("form");

// /*  input.addEventListener("input", () => {
//   const value = input.value;
  
//   const regex = /\D+/g;
  
//   // Retorna o padrão encontrado na string.
//   // console.log(value.match(regex));

//   // Testa se atende o padrão.
//   // const isValid = regex.test(value);
//   // console.log(isValid);
// }); */

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const value = input.value;

//   const regex = /\D+/g;

//   if (regex.test(value)) {
//     console.log(value);
//   } else {
//     alert("Valor inválido. Digite corretamente!");
//   }

//   // const value = input.value.replace(regex, "");
//   // console.log(value);
// });
