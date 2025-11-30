import { useState } from "react";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";

import { api } from "../services/api";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 dígitos" }),
});

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setIsLoading(true);

      const data = signUpSchema.parse({
        name,
        email,
        password,
      });

      await api.post("/users", data);

      if (confirm("Cadastrado com sucesso. Ir para tela de entrar?")) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return alert(error.issues[0].message);
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message);
      }

      alert("Não foi possível cadastrar!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full mx-auto sm:w-[400px]">
      <form
        onSubmit={onSubmit}
        className="border border-gray-100 p-7 rounded-[10px] w-full"
      >
        <div>
          <h1 className="mb-0.5 text-gray-300 text-xl font-bold">
            Crie sua conta
          </h1>
          <p className="text-gray-200 text-xs">
            Informe seu nome, e-mail e senha
          </p>
        </div>

        <div className="my-10 flex flex-col gap-4">
          <Input
            name="name"
            required
            legend="Nome"
            placeholder="Digite o nome completo"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="email"
            required
            legend="E-mail"
            type="email"
            placeholder="exemplo@mail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="password"
            required
            legend="Senha"
            type="password"
            placeholder="Digite sua senha"
            alert="Mínimo de 6 dígitos"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" isLoading={isLoading}>
          Cadastrar
        </Button>
      </form>

      <div className="border border-gray-100 p-7 rounded-[10px] w-full mt-3">
        <div className="mb-6">
          <h2 className="mb-0.5 text-gray-300 text-md font-bold">
            Já tem uma conta?
          </h2>
          <p className="text-gray-200 text-xs">Entre agora mesmo</p>
        </div>

        <a href="/">
          <Button type="submit" variant="secondary">
            Acessar conta
          </Button>
        </a>
      </div>
    </div>
  );
}
