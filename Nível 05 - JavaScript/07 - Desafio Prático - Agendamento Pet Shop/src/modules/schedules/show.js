import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // Limpa as listas.
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Renderiza os agendamentos por período.
    dailySchedules.forEach((schedule) => {
      // <li>
      //   <div class="identification">
      //     <p>09:00</p>
      //     <p>Thor <span>/ Fernanda Costa</span></p>
      //   </div>
      //   <span>Vacinação</span>
      //   <span>Remover agendamento</span>
      // </li>

      const item = document.createElement("li");
      const identification = document.createElement("div");
      const time = document.createElement("p");
      const petName = document.createElement("p");
      const tutor = document.createElement("span");
      const description = document.createElement("span");
      const cancel = document.createElement("span");

      // Adiciona o id do agendamento.
      item.setAttribute("data-id", schedule.id);
      tutor.textContent = ` / ${schedule.name}`;
      petName.textContent = schedule.pet;
      petName.append(tutor);
      time.textContent = dayjs(schedule.when).format("HH:mm");
      identification.append(time, petName);
      identification.classList.add("identification");
      description.textContent = schedule.description;
      cancel.textContent = "Remover agendamento";

      // Adiciona o tempo, nome e ícone no item.
      item.append(identification, description, cancel);

      // Obtém somente a hora.
      const hour = dayjs(schedule.when).hour();

      // Renderiza o agendamento na sessão (manhã, tarde ou noite).
      if (hour <= 12) {
        periodMorning.appendChild(item);
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item);
      } else {
        periodNight.appendChild(item);
      }
    });
  } catch (error) {
    alert("Nao foi possivel exibir os agendamentos");
    console.log(error);
  }
}
