# Rotas de Autenticação

---

## Criando auth-routes

```tsx
export function SignIn() {
  return <h1>SignIn</h1>;
}
```

```tsx
import { Routes, Route } from "react-router";

import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
  );
}
```

```tsx
import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./auth-routes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
```

```tsx
import { Routes } from "./routes";

export function App() {
  return <Routes />;
}
```

## Criando o AuthLayout

```tsx
import { Outlet } from "react-router";
import logoSvg from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col md:min-w-[462px]">
        <img src={logoSvg} alt="Logo" className="my-8" />

        <Outlet />
      </main>
    </div>
  );
}
```

```tsx
import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/AuthLayout";
import { SignIn } from "../pages/SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
      </Route>
    </Routes>
  );
}
```

## Criando componente de Input

```tsx
import { Input } from "../components/Input";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input required legend="Senha" type="password" placeholder="123456" />
    </form>
  );
}
```

```tsx
type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <input
        type="text"
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300"
        {...rest}
      />
    </fieldset>
  );
}
```

## Criando componente de Button

```tsx
type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className="flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress h-12"
      {...rest}
    >
      {children}
    </button>
  );
}
```

```tsx
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input required legend="Senha" type="password" placeholder="123456" />

      <Button isLoading>Entrar</Button>
    </form>
  );
}
```

```tsx
type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend,type = "text" ,...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <input
        type={type}
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300"
        {...rest}
      />
    </fieldset>
  );
}
```

## Criando onSubmit com os estados

```tsx
import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(email, password);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  );
}
```

## Link para SignUp

```tsx
import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(email, password);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
```

## Criando SignUp

```tsx
import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, email, password, passwordConfirm);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirmação da Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
```

```tsx
import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/AuthLayout";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
```

## Criando Not Found

```tsx
export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Ops! Essa página não existe. 🥲
        </h1>
        <a
          href="/"
          className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
```

```tsx
import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/AuthLayout";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```
