export async function jsonBodyHandler(request, response) {
  // Adicionar cada chunck.
  const buffers = [];

  // Coleta os chuncks de dados da requisição.
  for await (const chunck of request) {
    buffers.push(chunck);
  }

  try {
    // Concatena os chuncks e converte para string. Em seguida, converte a string para JSON.
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch (error) {
    request.body = null;
  }

  // Define o header de resposta como JSON.
  response.setHeader("Content-Type", "application/json");
}
