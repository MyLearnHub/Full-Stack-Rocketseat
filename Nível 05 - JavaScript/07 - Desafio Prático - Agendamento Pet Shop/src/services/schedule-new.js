import { apiConfig } from "./api-config";

export async function scheduleNew({ id, name, pet, phone, description, when }) {
  try {
    // Faz a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        name,
        pet,
        phone,
        description,
        when
      }),
    });

    // Exibe mensagem de agendamento realizado.
    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possivel agendar. Tente novamente mais tarde.");
  }
}
