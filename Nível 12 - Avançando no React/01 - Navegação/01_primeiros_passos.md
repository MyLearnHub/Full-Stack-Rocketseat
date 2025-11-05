# Primeiros Passos

---

## Conhecendo o React Router

[React Router](https://reactrouter.com/)

## Instalando e configurando

```bash
npm i react-router@7.0.2
```

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./main.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```
