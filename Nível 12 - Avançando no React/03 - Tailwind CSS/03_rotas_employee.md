# Rotas Employee

---

## Criando a rota de refund

```tsx
export function Refund() {
  return <h1>Refund</h1>;
}
```

```tsx
import { Routes, Route } from "react-router";

import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/NotFound";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Refund />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

```tsx
import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
```

## Criando o AppLayout

```tsx
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="p-3 w-full md:w-auto">
        <Outlet />
      </main>
    </div>
  );
}
```

```tsx
import { Routes, Route } from "react-router";

import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/NotFound";
import { AppLayout } from "../components/AppLayout";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

## Criar o Header

```tsx
import logoSvg from "../assets/logo.svg";
import logoutSvg from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between">
      <img src={logoSvg} alt="Logo" className="my-8" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          Olá, Rodrigo
        </span>

        <img
          src={logoutSvg}
          alt="Ícone de sair"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
```

```tsx
import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="p-3 w-full md:w-auto">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
```

## Criando Formulário

```tsx
import { Input } from "../components/Input";

export function Refund() {
  return (
    <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input required legend="Nome da solicitação" />
    </form>
  );
}
```

## Componente Select

```tsx
type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <select
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300"
        value=""
        {...rest}
      >
        <option value="" disabled hidden>
          Selecione
        </option>

        {children}
      </select>
    </fieldset>
  );
}
```

```tsx
import { Input } from "../components/Input";
import { Select } from "../components/Select";

export function Refund() {
  return (
    <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input required legend="Nome da solicitação" />
      <Select required legend="Categoria" />
    </form>
  );
}
```

```css
@import "tailwindcss";

@theme {
  --default-font-family: "Open Sans", serif;

  --color-gray-100: #1f2523;
  --color-gray-200: #4d5c57;
  --color-gray-300: #cdd5d2;
  --color-gray-400: #e4ece9;
  --color-gray-500: #f9fbfa;

  --color-green-100: #1f8459;
  --color-green-200: #2cb178;

  --text-xxs: 0.625rem;
}

select {
  appearance: none;
  background-image: url("./assets/chevron-down.svg");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 1.25rem auto;
}
```

## Populando Select com categorias

```tsx
type Props = React.ComponentProps<"select"> & {
  legend?: string;
};

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <select
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300"
        {...rest}
      >
        <option value="" disabled hidden>
          Selecione
        </option>

        {children}
      </select>
    </fieldset>
  );
}
```

```tsx
import { useState } from "react";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Select } from "../components/Select";

export function Refund() {
  const [category, setCategory] = useState("");

  return (
    <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>

        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input required legend="Nome da solicitação" />
      <Select
        required
        legend="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {CATEGORIES_KEYS.map((category) => (
          <option key={category} value={category}>
            {CATEGORIES[category].name}
          </option>
        ))}
      </Select>
    </form>
  );
}
```

```tsx
import foodSvg from "../assets/food.svg";
import othersSvg from "../assets/others.svg";
import servicesSvg from "../assets/services.svg";
import transportSvg from "../assets/transport.svg";
import accommodationSvg from "../assets/accommodation.svg";

export const CATEGORIES = {
  food: {
    name: "Alimentação",
    icon: foodSvg,
  },
  others: {
    name: "Outros",
    icon: othersSvg,
  },
  services: {
    name: "Serviços",
    icon: servicesSvg,
  },
  transport: {
    name: "Transporte",
    icon: transportSvg,
  },
  accomodation: {
    name: "Hospedagem",
    icon: accommodationSvg,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
```

## Inputs um do lado do outro

```tsx
import { useState } from "react";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Select } from "../components/Select";

export function Refund() {
  const [category, setCategory] = useState("");

  return (
    <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>

        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input required legend="Nome da solicitação" />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input required legend="Nome da solicitação" />
      </div>
    </form>
  );
}
```

## Componente de Upload

```tsx
import uploadSvg from "../assets/upload.svg";

type Props = React.ComponentProps<"input"> & {
  filename?: string | null;
};

export function Upload({ filename = null, ...rest }: Props) {
  return (
    <div>
      <legend className="uppercase text-xxs text-gray-200 mb-2">
        Comprovante
      </legend>

      <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
        <input type="file" id="upload" className="hidden" {...rest} />

        <span className="text-xs text-gray-100 flex-1 pl-4">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          htmlFor="upload"
          className="flex h-12 px-4 items-center bg-green-100 rounded-lg cursor-pointer disabled:opacity-50 hover:bg-green-200 transition ease-linear"
        >
          <img src={uploadSvg} alt="Ícone de upload" className="w-6 h-6" />
        </label>
      </div>
    </div>
  );
}
```

```tsx
import { useState } from "react";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";

export function Refund() {
  const [category, setCategory] = useState("");

  return (
    <form className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg">
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>

        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input required legend="Nome da solicitação" />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input required legend="Nome da solicitação" />
      </div>

      <Upload filename="rodrigo.png" />
    </form>
  );
}
```

## Button enviar

```tsx
import { useState } from "react";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, amount, category, filename);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>

        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input
          required
          legend="Nome da solicitação"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <Upload
        filename={filename && filename.name}
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
      />

      <Button type="submit" isLoading={isLoading}>
        Enviar
      </Button>
    </form>
  );
}
```

## Confirm

```tsx
import { Navigate, useLocation } from "react-router";

export function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return <h1>Confirm</h1>;
}
```

```tsx
import { Routes, Route } from "react-router";

import { Refund } from "../pages/Refund";
import { NotFound } from "../pages/NotFound";
import { Confirm } from "../pages/Confirm";

import { AppLayout } from "../components/AppLayout";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

```tsx
import { useState } from "react";
import { useNavigate } from "react-router";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFilename] = useState<File | null>(null);

  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(name, amount, category, filename);
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-lg"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>

        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso
        </p>
      </header>

      <Input
        required
        legend="Nome da solicitação"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input
          required
          legend="Nome da solicitação"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <Upload
        filename={filename && filename.name}
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
      />

      <Button type="submit" isLoading={isLoading}>
        Enviar
      </Button>
    </form>
  );
}
```

## Finalizando confirm

```tsx
import { Navigate, useLocation } from "react-router";
import okSvg from "../assets/ok.svg";

export function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div className="bg-gray-500 lg:w-lg rounded-xl flex flex-col items-center p-10 gap-6">
      <h1 className="text-2xl font-bold text-center text-green-100">
        Solicitação enviada!
      </h1>

      <img src={okSvg} alt="Ícone de OK" className="w-28" />

      <p className="text-sm text-gray-200 text-center">
        Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o
        setor financeiro irá encontrar em contato com você.
      </p>

      <a
        href="/"
        className="p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-linear"
      >
        Nova solicitação
      </a>
    </div>
  );
}
```
