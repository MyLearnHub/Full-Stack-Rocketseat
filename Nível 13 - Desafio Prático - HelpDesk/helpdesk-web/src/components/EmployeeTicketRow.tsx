import { StatusBadge } from "./StatusBadge";
import { TicketCard } from "./TicketCard";

type Props = {
  status: "Aberto" | "Em atendimento" | "Encerrado";
  tickets?: Ticket[];
};

export function EmployeeTicketsRow({ status, tickets }: Props) {
  return (
    <div>
      <StatusBadge status={status} />

      <div className="w-full mt-4 flex gap-4 flex-wrap">
        {tickets &&
          tickets.map((ticket, index) => {
            return <TicketCard key={index} ticket={ticket} />;
          })}
      </div>
    </div>
  );
}
