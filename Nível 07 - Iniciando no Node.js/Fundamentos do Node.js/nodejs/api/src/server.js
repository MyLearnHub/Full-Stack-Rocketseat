import http from "node:http";

const server = http.createServer((request, response) => {
  return response.end("Minha primeira API!");
});

server.listen(3333);