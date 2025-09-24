# Schema Validation

---

## Compreendendo Schema Validation

![image.png](assets/aula03-1.png)

![image.png](assets/aula03-2.png)

## Instalando o Zod

[Intro | Zod](https://zod.dev/)

```bash
npm i zod@3.23.8
```

## Validando Tipo de Dado

src/controllers/products-controller

```ts
import { Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { z } from "zod";

class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para remover um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string(),
      price: z.number(),
    });

    const { name, price } = bodySchema.parse(request.body);

    /*
    if (!name) {
      throw new AppError("Nome do produto é obrigatório!");
    }

    if (name.trim().length < 6) {
      throw new AppError(
        "Nome do produto precisa ter pelo menos 6 caracteres!"
      );
    }

    if (!price) {
      throw new AppError("Preço do produto é obrigatório!");
    }

    if (price <= 0) {
      throw new AppError("Preço do produto não pode ser menor que zero!");
    }
    */
    // throw new Error("Erro ao tentar criar um produto!");
    // throw new AppError("Erro ao tentar criar um produto!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
```

## Formatando Mensagens de Erro

src/server.ts

```ts
import express, { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { routes } from "./routes";
import { AppError } from "./utils/app-error";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(routes);

/**
 * 400 (Bad Request): Erro do cliente.
 * 500 (Internal Server Error): Erro interno do servidor.
 */
app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response
      .status(400)
      .json({ message: "Validation error!", issues: error.format() });
  }

  response.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```

## Nullish

src/controllers/products-controller

```ts
const bodySchema = z.object({
  name: z.string(),
  price: z.number().nullish(),
});
```

## Customizar Mensagem

src/controllers/products-controller

```ts
const bodySchema = z.object({
  name: z.string({ required_error: "Name is required!" }),
  price: z.number({ required_error: "Price is required!" }),
});
```

## Adicionando Regras de Validação

src/controllers/products-controller

```ts
const bodySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(6, { message: "Name must be 6 or more characters" }),
  price: z
    .number({ required_error: "Price is required" })
    .positive({ message: "Price must be positive" }),
});
```

## gitignore

.gitignore

```
node_modules
```
