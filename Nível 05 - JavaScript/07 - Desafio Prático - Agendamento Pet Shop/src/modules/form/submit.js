import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form");
const tutorName = document.getElementById("name");
const petName = document.getElementById("pet");
const tutorPhone = document.getElementById("phone");
const actionDescription = document.getElementById("description");
const selectedDate = document.getElementById("schedule-date");
const selectedHour = document.getElementById("hour");

// Seleciona a data e a hora atual.
const date = dayjs(new Date()).format("YYYY-MM-DD");
const hour = dayjs(new Date()).format("HH:mm");

// Define a data e a hora no formulário.
selectedDate.value = date;
selectedHour.value = hour;

// Define a data e a hora mínima no formulário.
selectedDate.min = date;
selectedHour.min = hour;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const name = tutorName.value.trim();
    const pet = petName.value.trim();
    const phone = tutorPhone.value.trim();
    const description = actionDescription.value.trim();

    // Recupera hora e minuto corretamente
    const [hour, minute] = selectedHour.value.split(":");

    // Insere a hora e os minutos na data
    let when = dayjs(selectedDate.value)
      .hour(Number(hour))
      .minute(Number(minute))
      .second(0);

    // Formata a data corretamente
    when = when.format("YYYY-MM-DD HH:mm");

    if (!name) return alert("Informe o nome do tutor!");
    if (!pet) return alert("Informe o nome do pet!");
    if (!phone) return alert("Informe o telefone do tutor!");
    if (!description) return alert("Informe a descrição do serviço!");
    if (!when) return alert("Selecione a data e a hora!");

    // Gera um id para o agendamento
    const id = Number(new Date().getTime());

    // Faz a requisição para enviar os dados do agendamento.
    await scheduleNew({
      id,
      name,
      pet,
      phone,
      description,
      when,
    });

    // Recarrega os agendamentos.
    await schedulesDay();

    // Limpa o formulário
    tutorName.value = "";
    petName.value = "";
    tutorPhone.value = "";
    actionDescription.value = "";

    // Foca no campo do nome do tutor
    tutorName.focus();
  } catch (error) {
    alert("Não foi possivel realizar o agendamento.");
    console.log(error);
  }
};
