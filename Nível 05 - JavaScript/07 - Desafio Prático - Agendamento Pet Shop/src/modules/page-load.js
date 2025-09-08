import dayjs from "dayjs";

import { schedulesDay } from "./schedules/load.js";

// Seleciona o input de data.
const inputDate = document.querySelector("#date");

// Seleciona a data atual utilizando o dayjs.
const actualDate = dayjs(new Date()).format("YYYY-MM-DD");

// Define a data atual no input.
inputDate.value = actualDate;

document.addEventListener("DOMContentLoaded", () => {
  schedulesDay();
});