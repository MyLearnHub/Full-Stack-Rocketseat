// Aula 03 - Acessando Elementos no DOM

// Visualizar o conteúdo do document.
// console.log(document);

// Obter o title da página.
// console.log(document.title);

// Acessar o elemento pelo ID (SELETOR ID).
// const guest = document.getElementById("guest-2");
// console.log(guest);

// Mostra as propriedades do objeto.
// console.dir(guest);

// Acessar elemento com class (SELETOR class).
// const guestsByClass = document.getElementsByClassName("guest");
// console.log(guestsByClass);

// Exibir o primeiro elemento da lista.
// console.log(guestsByClass.item(0));
// console.log(guestsByClass[0]);

// Selecionar lista de elementos pela tag.
// const guestsTag = document.getElementsByTagName("li");
// console.log(guestsTag);

// ---------------------------------------

// Aula 04 - Query Selector

// Acessa o elemento pelo seletor ID
const guest = document.querySelector("#guest-2");
console.log(guest);

// Acessa o elemento pelo seletor class
// const guests = document.querySelector(".guest");

// Retorna todos os elementos encontrados pelo query
const guests = document.querySelectorAll(".guest");
console.log(guests);
