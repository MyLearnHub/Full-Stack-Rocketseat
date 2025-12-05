import close from "../assets/icons/close-black.svg";
import { Input } from "./Input";
import { Button } from "./Button";

type Props = {
  isOpen: boolean;
  service?: Service;
  onClose: () => void;
};

export function ServiceModal({ service, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen bg-[#00000050] absolute inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-50 w-[358px] rounded-[10px] border border-gray-100 xl:w-[440px]">
        <div className="px-7 py-5 flex justify-between items-center">
          <h2 className="text-md font-bold text-gray-300">
            Cadastro de serviço
          </h2>
          <img
            src={close}
            alt="Ícone de fechar"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="px-7 pt-7 pb-8 border-y border-gray-100 flex flex-col gap-4">
          <Input
            name="title"
            required
            legend="Título"
            placeholder="Nome do serviço"
            defaultValue={service?.title}
          />
          <Input
            name="value"
            required
            legend="Valor"
            placeholder="0,00"
            help="R$"
            defaultValue={service?.value}
          />
        </div>

        <div className="px-7 py-6">
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
