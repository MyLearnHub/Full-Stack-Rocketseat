# Rotas Manager

---

## Criando a página dashboard

```tsx
export function Dashboard() {
  return <h1>Dashboard</h1>;
}
```

```tsx
import { Routes, Route } from "react-router";

import { Dashboard } from "../pages/Dashboard";

import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

```tsx
import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
```

## Continuando o dashboard

```tsx
export function Dashboard() {
  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>
    </div>
  );
}
```

## Input de pesquisa

```tsx
import { useState } from "react";
import { Input } from "../components/Input";

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}
```

## Variantes do botão

```bash
npm i clsx
```

```bash
npm i tailwind-merge
```

```tsx
import { useState } from "react";

import searchSvg from "../assets/search.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>
    </div>
  );
}
```

```tsx
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function classMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```tsx
import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-10 w-10",
  },
};

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "base",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={classMerge([
        "flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress",
        variants.button[variant],
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
```

## Componente RefundItem

```tsx
export type RefundItemProps = {
  id: string;
  name: string;
  category: string;
  amount: string;
  categoryImg: string;
};

type Props = React.ComponentProps<"a"> & {
  data: RefundItemProps;
};

export function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      className="flex items-center gap-3 hover:bg-green-100/5 cursor-pointer rounded-md p-2"
      {...rest}
    >
      <img
        src={data.categoryImg}
        alt="Ícone da categoria"
        className="w-8 h-8"
      />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.name}</strong>
        <span className="text-xs text-gray-200">{data.category}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$ </small>
        {data.amount}
      </span>
    </a>
  );
}
```

```tsx
import { useState } from "react";

import searchSvg from "../assets/search.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transporte",
  amount: "34,50",
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div>
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
    </div>
  );
}
```

## Customizando Scroll

```tsx
import { useState } from "react";

import searchSvg from "../assets/search.svg";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transporte",
  amount: "34,50",
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
    </div>
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

::-webkit-scrollbar {
  width: 0.4rem;
}

::-webkit-scrollbar-thumb {
  background-color: #e4ece9;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}
```

## formatCurrency

```tsx
import { useState } from "react";

import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { RefundItem } from "../components/RefundItem";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
    </div>
  );
}
```

```tsx
export function formatCurrency(value: number) {
  const currency = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return currency.format(value).replace("R$", "");
}
```

## Componente de Pagination

```tsx
import { useState } from "react";

import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import { RefundItem } from "../components/RefundItem";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE} />
      </div>

      <Pagination current={1} total={10} />
    </div>
  );
}
```

```tsx
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";

import { Button } from "./Button";

type Props = {
  current: number;
  total: number;
};

export function Pagination({ current, total }: Props) {
  return (
    <div className="flex flex-1 justify-center items-center gap-4">
      <Button variant="iconSmall">
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>

      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>

      <Button variant="iconSmall">
        <img src={rightSvg} alt="Ícone de avançar" />
      </Button>
    </div>
  );
}
```

## handlePagination

```tsx
import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
    iconSmall: "h-8 w-8",
  },
};

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "base",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={classMerge([
        "flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50",
        variants.button[variant],
        isLoading && "cursor-progress",
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
```

```tsx
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";

import { Button } from "./Button";

type Props = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({ current, total, onNext, onPrevious }: Props) {
  return (
    <div className="flex flex-1 justify-center items-center gap-2">
      <Button variant="iconSmall" onClick={onPrevious} disabled={current === 1}>
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>

      <span className="text-sm text-gray-200">
        {current}/{total}
      </span>

      <Button variant="iconSmall" onClick={onNext} disabled={current === total}>
        <img src={rightSvg} alt="Ícone de avançar" />
      </Button>
    </div>
  );
}
```

```tsx
import { useState } from "react";

import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import { RefundItem } from "../components/RefundItem";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <RefundItem data={REFUND_EXAMPLE} />
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
```

## Refund somente leitura

```tsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

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
  const params = useParams<{ id: string }>();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

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
        disabled={!!params.id}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      <Upload
        filename={filename && filename.name}
        onChange={(e) => e.target.files && setFilename(e.target.files[0])}
      />

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
```

```tsx
import { Routes, Route } from "react-router";

import { Dashboard } from "../pages/Dashboard";

import { AppLayout } from "../components/AppLayout";
import { NotFound } from "../pages/NotFound";
import { Refund } from "../pages/Refund";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/refund/:id" element={<Refund />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
```

```tsx
import { useState } from "react";

import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Pagination } from "../components/Pagination";
import { RefundItem, type RefundItemProps } from "../components/RefundItem";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPage] = useState(10);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();

    console.log(name);
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-3xl">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(e) => setName(e.target.value)}
        />

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Ícone de pesquisar" className="w-5" />
        </Button>
      </form>

      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
```

## Botão para visualizar arquivo

```tsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import fileSvg from "../assets/file.svg";
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
  const params = useParams<{ id: string }>();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

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
        disabled={!!params.id}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      {params.id ? (
        <a
          href="https://www.rocketseat.com.br"
          target="_blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="Ícone de arquivo" />
          Abrir comprovante
        </a>
      ) : (
        <Upload
          filename={filename && filename.name}
          onChange={(e) => e.target.files && setFilename(e.target.files[0])}
        />
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Voltar" : "Enviar"}
      </Button>
    </form>
  );
}
```

## Componente de Loading

```tsx
import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isLoading = false;

export function Routes() {
  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
```

```tsx
import { Outlet } from "react-router";
import logoSvg from "../assets/logo.svg";

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-gray-400 flex flex-col justify-center items-center text-gray-100 p-8">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col w-full md:max-w-[462px]">
        <img src={logoSvg} alt="Logo" className="my-8" />

        <Outlet />
      </main>
    </div>
  );
}
```

```tsx
export function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <span className="text-gray-200 font-semibold text-sm">Carregando...</span>
    </div>
  );
}
```

## Role de usuário

```tsx
import { BrowserRouter } from "react-router";

import { Loading } from "../components/Loading";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

const isLoading = false;
// const session = undefined;
 
const session = {
  user: {
    role: "manager",
  },
}; 

export function Routes() {
  function Route() {
    switch (session?.user.role) {
      case "employee":
        return <EmployeeRoutes />;
      case "manager":
        return <ManagerRoutes />;
      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
```
