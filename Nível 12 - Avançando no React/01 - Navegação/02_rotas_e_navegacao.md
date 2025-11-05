# Rotas e Navegação

---

## Criando a primeira rota

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./main.css";
import { AppRoutes } from "./routes/AppRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
```

```tsx
import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
}
```

```tsx
export function Home() {
  return (
    <div>
      <h1>Página Home!</h1>
    </div>
  );
}
```

## Rota de produtos

```tsx
import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
```

```tsx
export function Products() {
  return (
    <div>
      <h1>Produtos</h1>
    </div>
  );
}
```

## Navegando para produtos

```tsx
export function Home() {
  return (
    <div>
      <h1>Página Home</h1>

      <nav>
        <a href="/products">Produtos</a>
      </nav>
    </div>
  );
}
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf4f4;
}

h1 {
  margin: 22px 0;
}

nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

a {
  color: #f24d0d;
  text-decoration: none;
}

a,
button {
  font-weight: 700;
  transform: filter 0.2s;
}

button:hover,
a:hover {
  filter: brightness(0.9);
}
```

## Voltando

```tsx
export function Products() {
  return (
    <div>
      <a href="/">Voltar</a>
      
      <h1>Produtos</h1>
    </div>
  );
}
```

## Página 404

```tsx
import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/products" element={<Products />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

```tsx
export function NotFound() {
  return (
    <div>
      <h1>Ops! Essa página não existe!</h1>
      <a href="/">Voltar</a>
    </div>
  );
}
```

## useSearchParams

```tsx
export function Home() {
  return (
    <div>
      <h1>Página Home</h1>

      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>
      </nav>
    </div>
  );
}
```

```tsx
import { useSearchParams } from "react-router";

export function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <a href="/">Voltar</a>

      <h1>Produtos</h1>

      {category && (
        <span>
          Categoria <strong>{category}</strong>
        </span>
      )}
    </div>
  );
}
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf4f4;
}

h1 {
  margin: 22px 0;
}

nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

a {
  color: #f24d0d;
  text-decoration: none;
}

a,
button {
  font-weight: 700;
  transform: filter 0.2s;
}

button:hover,
a:hover {
  filter: brightness(0.9);
}

span {
  color: #3d3d3d;
  font-weight: 600;
  font-size: 14px;
}

strong {
  color: #f24d0d;
  text-transform: uppercase;
}
```

## useNavigate

```tsx
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  function productsOpen() {
    navigate("/products");
  }

  return (
    <div>
      <h1>Página Home</h1>

      <nav>
        <a href="/products">Produtos</a>
        <a href="/products?category=tvs">Categoria</a>

        <button type="button" onClick={productsOpen}>
          Ver produtos
        </button>
      </nav>
    </div>
  );
}
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf4f4;
}

h1 {
  margin: 22px 0;
}

nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

a {
  color: #f24d0d;
  text-decoration: none;
}

a,
button {
  font-weight: 700;
  transform: filter 0.2s;
}

button:hover,
a:hover {
  filter: brightness(0.9);
}

span {
  color: #3d3d3d;
  font-weight: 600;
  font-size: 14px;
}

strong {
  color: #f24d0d;
  text-transform: uppercase;
}

button {
  background-color: #f24d0d;
  padding: 12px 16px;
  border-radius: 7px;
  border: none;
  color: #ffffff;
  cursor: pointer;
}
```

## Rota com parâmetro

```tsx
export function Details() {
  return (
    <div>
      <h1>Detalhes</h1>
    </div>
  );
}
```

```tsx
import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/details/:id" element={<Details />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

## useParams

```tsx
import { useParams } from "react-router";

export function Details() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalhes</h1>

      <span>
        ID do produto: <strong>{id}</strong>
      </span>
    </div>
  );
}
```

```tsx
import { useSearchParams } from "react-router";

export function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <a href="/">Voltar</a>

      <h1>Produtos</h1>

      {category && (
        <span>
          Categoria <strong>{category}</strong>
        </span>
      )}

      <div className="cards">
        <a href="/details/1">Produto 1</a>
        <a href="/details/2">Produto 2</a>
        <a href="/details/3">Produto 3</a>
        <a href="/details/4">Produto 4</a>
        <a href="/details/5">Produto 5</a>
      </div>
    </div>
  );
}
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbf4f4;
  padding: 32px;
}

h1 {
  margin: 22px 0;
}

nav {
  display: flex;
  align-items: center;
  gap: 22px;
}

a {
  color: #f24d0d;
  text-decoration: none;
}

a,
button {
  font-weight: 700;
  transform: filter 0.2s;
}

button:hover,
a:hover {
  filter: brightness(0.9);
}

span {
  color: #3d3d3d;
  font-weight: 600;
  font-size: 14px;
}

strong {
  color: #f24d0d;
  text-transform: uppercase;
}

button {
  background-color: #f24d0d;
  padding: 12px 16px;
  border-radius: 7px;
  border: none;
  color: #ffffff;
  cursor: pointer;
}

.cards {
  display: flex;
  gap: 16px;
  margin: 18px 0;
  flex-wrap: wrap;
}

.cards a {
  width: 100px;
  height: 100px;
  background-color: #d7eff9;
  color: #0095e5;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

```

## Retornando para página anterior

```tsx
import { useParams, useNavigate } from "react-router";

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate(-1)}>
        Voltar
      </button>
      
      <h1>Detalhes</h1>

      <span>
        ID do produto: <strong>{id}</strong>
      </span>
    </div>
  );
}
```

## Layout routes

```tsx
import "./styles.css";

import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="layout">
      <header className="user">
        <p>Olá, Rodrigo</p>
      </header>

      <Outlet />

      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  );
}
```

```css
.user {
  font-size: 16px;
  color: #3d3d3d;
  margin-bottom: 32px;
}

footer {
  width: 100%;
  margin-top: 32px;
}

footer span {
  font-weight: 400;
}
```

```tsx
import { Routes, Route } from "react-router";

import { Layout } from "../components/Layout";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```
