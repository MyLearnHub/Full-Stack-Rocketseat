import avatar from "../assets/avatar/andre-costa.svg";
import pencil from "../assets/icons/pencil.svg";
import check from "../assets/icons/circle-check.svg";
import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";
import { Link } from "react-router";

type Props = {
  ticket: Ticket;
};

export function TicketCard({ ticket }: Props) {
  return (
    <div className="w-full max-w-[341px] p-5 flex flex-col gap-4 rounded-[10px] border border-gray-100 relative">
      <div>
        <span className="text-xs font-bold text-gray-400 mb-1">
          {ticket.id}
        </span>
        <h3 className="font-bold text-gray-500">{ticket.title}</h3>
        <p className="text-xs text-gray-300">{ticket.service}</p>
      </div>

      <div className="text-gray-300 flex justify-between items-end">
        <p className="text-xs">{ticket.createdAt}</p>
        <p className="text-sm">
          <span className="text-xxs">R$</span>
          {ticket.value}
        </p>
      </div>

      <div className="border-b border-gray-100"></div>

      <div className="flex justify-between">
        <div className="flex flex-1 items-center gap-1.5">
          <img src={avatar} alt="avatar" />
          <p className="text-xs font-bold text-gray-300">{ticket.customer}</p>
        </div>

        <StatusBadge status={ticket.status} justIcon />
      </div>

      <div className="flex gap-1 items-center absolute top-3 right-3">
        <Link to={`/tickets/${ticket.id}`}>
          <Button icon={pencil} variant="secondary"></Button>
        </Link>
        {ticket.status !== "Encerrado" && (
          <Button icon={check} className="py-1">
            {ticket.status === "Em atendimento" ? "Encerrar" : "Iniciar"}
          </Button>
        )}
      </div>
    </div>
  );
}
