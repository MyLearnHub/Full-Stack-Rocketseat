# Fundamentos de API

## O Que é uma API

![image.png](assets/aula02-1.png)

![image.png](assets/aula02-2.png)

## API Client - Insomnia

[Insomnia](https://insomnia.rest/)

[Postman](https://www.postman.com/)

Extensão do VSCode: Thunder Client

## Utilizando o Insomnia

api/src/server.js

```js
import http from "node:http";

const server = http.createServer((request, response) => {
  return response.end("Minha primeira API!");
});

server.listen(3333);
```

## Métodos HTTP

![image.png](assets/aula02-3.png)

![image.png](assets/aula02-4.png)

![image.png](assets/aula02-5.png)

![image.png](assets/aula02-6.png)

![image.png](assets/aula02-7.png)
