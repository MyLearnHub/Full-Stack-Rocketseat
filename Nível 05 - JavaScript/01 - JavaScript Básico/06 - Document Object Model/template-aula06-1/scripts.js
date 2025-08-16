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
// const guest = document.querySelector("#guest-2");
// console.log(guest);

// Acessa o elemento pelo seletor class
// const guests = document.querySelector(".guest");

// Retorna todos os elementos encontrados pelo query
// const guests = document.querySelectorAll(".guest");
// console.log(guests);

// ---------------------------------------

// Aula 05 - Manipulando Elementos

// const guest = document.querySelector("#guest-1");

// Retorna o conteúdo como texto.
// console.log(guest.textContent);
// guest.textContent = "Maria";

// console.log(guest.textContent); // Retorna o conteúdo visível e oculto.
// console.log(guest.innerText); // Retorna somente o conteúdo visível.
// console.log(guest.innerHTML); // Retorna o HTML como texto.

// ---------------------------------------

// Aula 06 - Alterando Estilos

// const input = document.querySelector("#name");

// Adiciona a classe.
// input.classList.add("input-error");

// Remove a classe.
// input.classList.remove("input-error");

// Se não tiver a classe adiciona. Se tem, remove.
// input.classList.toggle("input-error");

// const button = document.querySelector("button");

// Modificar as propriedades css do elemento.
// button.style.backgroundColor = "red";

// ---------------------------------------

// Aula 07 - Criando Elementos

// const guests = document.querySelector("ul");

// const newGuest = document.createElement("li");
// newGuest.classList.add("guest");

// const guestName = document.createElement("span");

// guestName.textContent = "Diego";

// const guestSurname = document.createElement("span");
// guestSurname.textContent = "Fernandes";

// // Adiciona após o último filho.
// // newGuest.append(guestName, guestSurname);

// // Adiciona antes do primeiro filho.
// // newGuest.prepend(guestSurname);

// // É mais simples que o append e aceita apenas um argumento.
// newGuest.appendChild(guestName);

// // guests.appendChild(newGuest);
// guests.prepend(newGuest);

// ---------------------------------------

// Aula 08 - Manipulando Atributos

// const input = document.querySelector("input");

// // Adicionar ou atualizar um atributo.
// // input.setAttribute("disabled", true);
// // input.setAttribute("type", "file");

// // Remover um atributo.
// input.removeAttribute("id");

// ---------------------------------------

// Aula 09 - Eventos

// window.addEventListener("load", () => {
//   console.log("A página foi carregada!");
// });

// addEventListener("click", (event) => {
//   event.preventDefault();

//   // Retorna todas as informações do evento.
//   // console.log(event);

//   // Retorna o elemento clicado.
//   console.log(event.target);

//   // Retorna o textContent do elemento clicado.
//   console.log(event.target.textContent);
// });

// ---------------------------------------
