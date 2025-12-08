import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { tickets } from "./ManagerTickets";
import { Title } from "../components/Title";
import arrowLeft from "../assets/icons/arrow-left.svg";
import { StatusBadge } from "../components/StatusBadge";
import andreCosta from "../assets/avatar/andre-costa.svg";
import carlosSilva from "../assets/avatar/carlos-silva.svg";
import { NotFound } from "./NotFound";
import { useAuth } from "../hooks/useAuth";

export function TicketDetails() {
  const { session } = useAuth();
  const canViewCustomerInfo = ["admin", "employee"].includes(
    session?.user.role ?? ""
  );

  const navigate = useNavigate();
  const { id } = useParams();

  const ticket = tickets.find((t) => t.id === id);

  if (!ticket) {
    return <NotFound />;
  }

  return (
    <div className="mx-auto max-w-[800px] w-full">
      <div className="w-full mb-4 xl:mb-6">
        <div
          className="flex items-center gap-2 cursor-pointer p-0.5 mb-1"
          onClick={() => navigate(-1)}
        >
          <img src={arrowLeft} alt="Ícone de voltar" />
          <span className="text-xs font-bold text-gray-200">Voltar</span>
        </div>

        <Title>Chamado detalhado</Title>
      </div>

      <div className="w-full flex gap-4 flex-col xl:flex-row xl:gap-6">
        <div className="max-w-[480px] w-full p-5 border border-gray-100 rounded-[10px] flex gap-5 flex-col xl:p-6">
          <div className="w-full">
            <div className="flex items-center justify-between gap-0.5">
              <span className="text-xs font-bold text-gray-200">
                {ticket.id}
              </span>
              <StatusBadge status={"Aberto"} />
            </div>
            <h2 className="text-md font-bold text-gray-300">{ticket.title}</h2>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-xs font-bold text-gray-400">Descrição</h3>
            <p className="text-sm text-gray-300">{ticket.description}</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-xs font-bold text-gray-400">Categoria</h3>
            <p className="text-sm text-gray-300">{ticket.service}</p>
          </div>
          <div className="flex *:max-w-[200px] *:w-full justify-between">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xs font-bold text-gray-400">Criado em</h3>
              <p className="text-xs text-gray-300">{ticket.date}</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="text-xs font-bold text-gray-400">Atualizado em</h3>
              <p className="text-xs text-gray-300">{ticket.date}</p>
            </div>
          </div>
          {canViewCustomerInfo && (
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-gray-400">Cliente</h3>
              <div className="flex gap-2">
                <img src={andreCosta} alt="Ícone de Avatar" />
                <p className="text-sm text-gray-300">{ticket.customerName}</p>
              </div>
            </div>
          )}
        </div>

        <div className="w-full p-5 border border-gray-100 rounded-[10px] h-min xl:max-w-[296px] xl:p-6">
          <div className="flex flex-col gap-2 mb-8">
            <h3 className="text-xs font-bold text-gray-400">
              Técnico Responsável
            </h3>
            <div className="flex gap-2">
              <img src={carlosSilva} alt="Ícone de Avatar" className="w-8" />
              <div className="flex flex-col">
                <p className="text-sm text-gray-300">{ticket.technicianName}</p>
                <span className="text-xs text-gray-200">
                  carlos.silva@test.com
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-gray-400">Valores</h3>
              <div className="flex justify-between">
                <p className="text-xs text-gray-300">Preço base</p>
                <span className="text-xs text-gray-300">{ticket.value}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold text-gray-400">Adicionais</h3>
              <div className="flex justify-between">
                <p className="text-xs text-gray-300">Assinatura de backup</p>
                <span className="text-xs text-gray-300">R$ 120,00</span>
              </div>
              <div className="flex justify-between">
                <p className="text-xs text-gray-300">Formatação do PC</p>
                <span className="text-xs text-gray-300">R$ 75,00</span>
              </div>
            </div>

            <div className="flex border-t border-gray-100 justify-between pt-3">
              <p className="text-sm font-bold text-gray-300">Total</p>
              <span className="text-sm font-bold text-gray-300">R$ 395,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
