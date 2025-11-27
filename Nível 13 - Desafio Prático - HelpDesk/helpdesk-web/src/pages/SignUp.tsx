import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp() {
  return (
    <div className="w-full mx-auto sm:w-[400px]">
      <form className="border border-gray-100 p-7 rounded-[10px] w-full">
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
          />
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
            alert="Mínimo de 6 dígitos"
          />
        </div>

        <Button type="submit">Cadastrar</Button>
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
