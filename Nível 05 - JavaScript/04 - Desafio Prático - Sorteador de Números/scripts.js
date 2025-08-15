// Selecionando os elementos.
const numbers = document.querySelector("#numbers");
const from = document.querySelector("#from");
const to = document.querySelector("#to");
const repeat = document.querySelector("#repeat");
const sortButton = document.querySelector("#sort-button");
const form = document.querySelector("form");
const aside = document.querySelector("aside");
const repeatSortButton = document.querySelector("#repeat-sort-button");
const countResult = document.querySelector("aside p");
const numbersList = document.querySelector("ul");

// Criando as variáveis.
let numbersArray = [];
let turnCount = 0;

// Impedindo que o usuário digite letras
numbers.addEventListener("input", () => {
  numbers.value = numbers.value.replace(/[^0-9]/g, "");
});

from.addEventListener("input", () => {
  from.value = from.value.replace(/[^0-9]/g, "");
});

to.addEventListener("input", () => {
  to.value = to.value.replace(/[^0-9]/g, "");
});

// Evento para sortear os números.
sortButton.addEventListener("click", (event) => {
  event.preventDefault();

  validateNumbers();

  generateRandomNumbers();

  form.style.display = "none";
  aside.style.display = "flex";

  drawNumbers();
});

// Evento para sortear os números novamente.
repeatSortButton.addEventListener("click", (event) => {
  event.preventDefault();

  validateNumbers();

  generateRandomNumbers();

  drawNumbers();
});

// Função para sortear os números.
function generateRandomNumbers() {
  numbersList.innerHTML = "";
  numbersArray = [];

  const quantity = parseInt(numbers.value, 10);
  const min = parseInt(from.value, 10);
  const max = parseInt(to.value, 10);

  for (let i = 0; i < quantity; i++) {
    if (repeat.checked === false) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbersArray.push(randomNumber);
    } else {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      while (numbersArray.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      }
      numbersArray.push(randomNumber);
    }
  }

  turnCount++;
  countResult.textContent = `${turnCount}º RESULTADO`;
}

// Função para validar os números.
function validateNumbers() {
  if (numbers.value === "" || from.value === "" || to.value === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  } else if (from.value > to.value) {
    alert("O valor de 'De' deve ser menor que o valor de 'Ate'.");
    return;
  } else if (isNaN(from.value) || isNaN(to.value)) {
    alert("Por favor, digite apenas números.");
    return;
  }
}

// Função para exibir os números sorteados.
function drawNumbers() {
  for (let i = 0; i < numbersArray.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${numbersArray[i]}</span>
      <div class="background-result"></div>
    `;

    setTimeout(() => {
      numbersList.appendChild(li);
    }, i * 2500);
  }
}
