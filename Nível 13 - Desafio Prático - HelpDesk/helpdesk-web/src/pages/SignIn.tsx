import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignIn() {
  return (
    <div className="w-[400px]">
      <form className="border border-gray-100 p-7 rounded-[10px] w-full">
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

        <Button type="submit">Entrar</Button>
      </form>

      <div className="border border-gray-100 p-7 rounded-[10px] w-full mt-3">
        <div className="mb-6">
          <h2 className="mb-0.5 text-gray-300 text-md font-bold">
            Ainda não tem uma conta?
          </h2>
          <p className="text-gray-200 text-xs">Cadastre agora mesmo</p>
        </div>

        <Button type="submit" variant="secondary">
          Criar conta
        </Button>
      </div>
    </div>
  );
}
