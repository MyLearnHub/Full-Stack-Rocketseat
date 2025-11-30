import { useActionState } from "react";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";

import { api } from "../services/api";
import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

const signInSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, { message: "Informe a senha" }),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  const auth = useAuth();

  async function signIn(prevState: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });

      const response = await api.post("/sessions", data);
      auth.save(response.data);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        return { message: error.issues[0].message };
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message };
      }

      return { message: "Não foi possivel entrar!" };
    }
  }

  return (
    <div className="w-full mx-auto sm:w-[400px]">
      <form
        action={formAction}
        className="border border-gray-100 p-7 rounded-[10px] w-full"
      >
        <div>
          <h1 className="mb-0.5 text-gray-300 text-xl font-bold">
            Acesse o portal
          </h1>
          <p className="text-gray-200 text-xs">
            Entre usando seu e-mail e senha cadastrados
          </p>
        </div>

        <div className="my-10 flex flex-col gap-4">
          <Input
            name="email"
            required
            legend="E-mail"
            type="email"
            placeholder="exemplo@mail.com"
          />
          <Input
            name="password"
            required
            legend="Senha"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>

        <Button type="submit" isLoading={isLoading}>
          Entrar
        </Button>
      </form>

      <div className="border border-gray-100 p-7 rounded-[10px] w-full mt-3">
        <div className="mb-6">
          <h2 className="mb-0.5 text-gray-300 text-md font-bold">
            Ainda não tem uma conta?
          </h2>
          <p className="text-gray-200 text-xs">Cadastre agora mesmo</p>
        </div>

        <a href="/signup">
          <Button type="submit" variant="secondary">
            Criar conta
          </Button>
        </a>
      </div>
    </div>
  );
}
