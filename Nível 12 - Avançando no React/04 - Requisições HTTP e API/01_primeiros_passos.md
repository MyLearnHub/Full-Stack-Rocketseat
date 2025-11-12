# Primeiros Passos

---

## O projeto que vamos trabalhar

[GitHub - rocketseat-education/refund-2.0 at 9b3454a2fd0bcf622fa41c678e6ed0bf7ddb2758](https://github.com/rocketseat-education/refund-2.0/tree/9b3454a2fd0bcf622fa41c678e6ed0bf7ddb2758)

## Atualizando o projeto para React 19

```bash
npm i --save-exact react@^19.0.0 react-dom@^19.0.0
```

```bash
npm i --save-exact @types/react@^19.0.0 @types/react-dom@^19.0.0
```

## Rodando da API

[GitHub - rocketseat-education/fullstack_refund_api](https://github.com/rocketseat-education/fullstack_refund_api)

## Instalando e configurando Axios

```bash
npm i axios
```

```tsx
import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});
```
