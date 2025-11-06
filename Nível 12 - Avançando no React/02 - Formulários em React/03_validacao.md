# Validação

---

## Instalando o Yup

```bash
npm i @hookform/resolvers@3.9.1 yup@1.5.0
```

```tsx
import "./App.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

const schema = yup.object({})

export default function App() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      date: "",
      subject: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  function onSbubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSbubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        <span className="error">Nome é obrigatório</span>

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" {...field} />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="javascript">Javascript</option>
              <option value="typescript">Typescript</option>
            </select>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
```

## Utilizando schema na validação

```tsx
import "./App.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  date: yup.string().required("Data é obrigatória"),
  subject: yup.string().required("Selecione um assunto"),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(10, "A descrição precisa ter pelo menos 10 dígitos"),
});

export default function App() {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
      date: "",
      subject: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  function onSbubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSbubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        <span className="error">Nome é obrigatório</span>

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" {...field} />
          )}
        />

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="javascript">Javascript</option>
              <option value="typescript">Typescript</option>
            </select>
          )}
        />

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
```

## Exibindo erros de validação

```tsx
import "./App.css";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  date: string;
  subject: string;
  description: string;
};

const schema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  date: yup.string().required("Data é obrigatória"),
  subject: yup.string().required("Selecione um assunto"),
  description: yup
    .string()
    .required("Descrição é obrigatória")
    .min(10, "A descrição precisa ter pelo menos 10 dígitos"),
});

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      date: "",
      subject: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });

  function onSbubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
      <h1>Evento</h1>

      <form onSubmit={handleSubmit(onSbubmit)}>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <input type="text" placeholder="Nome do evento" {...field} />
          )}
        />

        {errors.name?.message && (
          <span className="error">{errors.name.message}</span>
        )}

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <input type="date" placeholder="Nome do evento" {...field} />
          )}
        />

        {errors.date?.message && (
          <span className="error">{errors.date.message}</span>
        )}

        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <select {...field}>
              <option value="" disabled>
                Selecione...
              </option>

              <option value="react">React</option>
              <option value="nodejs">Node.js</option>
              <option value="javascript">Javascript</option>
              <option value="typescript">Typescript</option>
            </select>
          )}
        />

        {errors.subject?.message && (
          <span className="error">{errors.subject.message}</span>
        )}

        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <textarea placeholder="Descrição" rows={4} {...field} />
          )}
        />

        {errors.description?.message && (
          <span className="error">{errors.description.message}</span>
        )}

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
```
