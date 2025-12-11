import close from "../assets/icons/close-black.svg";
import avatar from "../assets/avatar/andre-costa.svg";
import update from "../assets/icons/update.svg";
import trash from "../assets/icons/trash.svg";
import { Input } from "./Input";
import { Button } from "./Button";

type Props = {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
};

export function ProfileModal({ customer, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen bg-[#00000050] absolute inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-50 w-[358px] rounded-[10px] border border-gray-100 xl:w-[440px]">
        <div className="px-7 py-5 flex justify-between items-center">
          <h2 className="text-md font-bold text-gray-300">Perfil</h2>
          <img
            src={close}
            alt="Ícone de fechar"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="px-7 pt-7 pb-8 border-y border-gray-100">
          <div className="w-full flex gap-3 items-center mb-5">
            <img src={avatar} alt="" className="w-12" />

            <div className="flex gap-1">
              <Button variant="secondary" icon={update} className="text-xs">
                Nova imagem
              </Button>
              <Button variant="secondary" icon={trash}></Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Input
              name="name"
              required
              legend="Nome"
              placeholder="Nome completo"
              defaultValue={customer.name}
            />
            <Input
              name="email"
              required
              legend="E-mail"
              type="email"
              placeholder="exemplo@mail.com"
              defaultValue={customer.email}
            />
            <Input
              name="password"
              required
              legend="Senha"
              type="password"
              placeholder="*********"
              defaultValue={customer.password}
            />
          </div>
        </div>

        <div className="px-7 py-6">
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
