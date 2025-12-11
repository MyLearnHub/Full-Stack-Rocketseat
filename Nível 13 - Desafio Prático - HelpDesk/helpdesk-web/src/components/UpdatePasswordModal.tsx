import close from "../assets/icons/close-black.svg";
import { Input } from "./Input";
import { Button } from "./Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function UpdatePasswordModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen bg-[#00000080] fixed inset-0 flex justify-center items-center z-60">
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
          <div className="flex flex-col gap-4">
            <Input
              name="password"
              required
              legend="Senha atual"
              type="password"
              placeholder="Digite sua senha atual"
            />
            <Input
              name="confirm-password"
              required
              legend="Nova senha"
              type="password"
              placeholder="Digite sua nova senha"
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
