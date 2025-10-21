# Preparando o projeto

---

## Compreendendo Deploy

![image.png](assets/aula01-1.png)

![image.png](assets/aula01-2.png)

## O projeto que vamos utilizar

[GitHub - rocketseat-education/fullstack-deploy-template: Aplicação para o módulo de Deploy](https://github.com/rocketseat-education/fullstack-deploy-template)

## Configurando a porta

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/api?schema=public"

JWT_SECRET=rodrigo

PORT=3333
```

```tsx
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(3333),
});

export const env = envSchema.parse(process.env);
```

```tsx
import { app } from "@/app";
import { env } from "./env";

const PORT = env.PORT;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
```
