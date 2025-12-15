import avatar from "../assets/avatar/andre-costa.svg";
import pencil from "../assets/icons/pencil.svg";
import check from "../assets/icons/circle-check.svg";
import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";

export function TicketCard() {
  return (
    <div className="w-full max-w-[346px] p-5 flex flex-col gap-4 rounded-[10px] border border-gray-100 relative">
      <div>
        <span className="text-xs font-bold text-gray-400 mb-1">00003</span>
        <h3 className="font-bold text-gray-500">Rede lenta</h3>
        <p className="text-xs text-gray-300">Instalação de Rede</p>
      </div>

      <div className="text-gray-300 flex justify-between items-end">
        <p className="text-xs">10/04/2025</p>
        <p className="text-sm">
          <span className="text-xxs">R$</span>200,00
        </p>
      </div>

      <div className="border-b border-gray-100"></div>

      <div className="flex justify-between">
        <div className="flex flex-1 items-center gap-1.5">
          <img src={avatar} alt="avatar" />
          <p className="text-xs font-bold text-gray-300">André Costa</p>
        </div>

        <StatusBadge status="Em atendimento" justIcon />
      </div>

      <div className="flex gap-1 items-center absolute top-3 right-3">
        <Button icon={pencil} variant="secondary"></Button>
        <Button icon={check} className="py-1">
          Encerrar
        </Button>
      </div>
    </div>
  );
}
