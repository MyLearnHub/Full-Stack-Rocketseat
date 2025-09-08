// Importa a biblioteca day.js
import dayjs from "dayjs";

// Seleciona o input de data.
const inputDate = document.querySelector("#date");

// Seleciona a data atual utilizando o dayjs.
const actualDate = dayjs(new Date()).format("YYYY-MM-DD");

// Define a data atual no input.
inputDate.value = actualDate;
