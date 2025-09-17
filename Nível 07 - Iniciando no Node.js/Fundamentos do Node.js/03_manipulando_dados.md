# Manipulando Dados

---

## Armazenamento de Dados

![image.png](assets/aula03.png)

## Salvando Usuários em Memória

api/src/database.js

```js
export class Database {
  database = {};

  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }
  }

  select(table) {
    return this.database[table];
  }
}
```

api/src/middleware/routeHandler.js

```js
import { routes } from "../routes.js";
import { extractQueryParams } from "../utils/extract-query-params.js";
import { Database } from "../database.js";

const database = new Database();

export function routeHandler(request, response) {
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url);
  });

  if (route) {
    const routeParams = request.url.match(route.path);

    const { query, ...params } = routeParams.groups;

    request.params = params;

    request.query = query ? extractQueryParams(query) : {};

    return route.controller({ request, response, database });
  }

  return response.writeHead(404).end("Rota não encontrada!");
}
```

api/src/routes.js

```js
import { parseRoutePath } from "./utils/parseRoutePath.js";

export const routes = [
  {
    method: "GET",
    path: "/products",
    controller: ({ request, response, database }) => {
      const products = database.select("products");

      return response.end(JSON.stringify(products));
    },
  },
  {
    method: "POST",
    path: "/products",
    controller: ({ request, response, database }) => {
      const { name, price } = request.body;

      database.insert("products", { name, price });

      return response.writeHead(201).end();
    },
  },
  {
    method: "DELETE",
    path: `/products/:id`,
    controller: (request, response) => {
      console.log(request.params);
      return response.end("Produto removido com ID: " + request.params.id);
    },
  },
].map((route) => {
  return {
    ...route,
    path: parseRoutePath(route.path),
  };
});
```

## Criando Arquivo

api/src/database.js

```js
import fs from "node:fs/promises";
const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  database = {};

  constructor() {
    this.persist();
  }

  persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database));
  }

  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }
  }

  select(table) {
    return this.database[table];
  }
}
```

## Salvando Dados no Arquivo

api/src/database.js

```js
import fs from "node:fs/promises";
const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  database = {};

  constructor() {
    this.persist();
  }

  persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database));
  }

  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }

    this.persist();
  }

  select(table) {
    return this.database[table];
  }
}

```

api/src/db.json

```js
{
  "products": [
    { "name": "Mouse", "price": 20 },
    { "name": "Teclado", "price": 500 }
  ]
}
```

## Lendo Dados no Arquivo

api/src/database.js

```js
import fs from "node:fs/promises";
const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.database = JSON.parse(data);
      })
      .catch(() => this.persist());
  }

  persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.database));
  }

  insert(table, data) {
    if (Array.isArray(this.database[table])) {
      this.database[table].push(data);
    } else {
      this.database[table] = [data];
    }

    this.persist();
  }

  select(table) {
    return this.database[table];
  }
}
```

## Propriedade e Método Privado

api/src/database.js

```js
import fs from "node:fs/promises";
const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }

  select(table) {
    return this.#database[table] ?? [];
  }
}
```
