import { StatusBadge } from "./StatusBadge";
import { TicketCard } from "./TicketCard";

type Props = {
  status: "Aberto" | "Em atendimento" | "Encerrado";
};

export function EmployeeTicketsRow({ status }: Props) {
  return (
    <div>
      <StatusBadge status={status} />

      <div className="mt-4">
        <TicketCard />
      </div>
    </div>
  );
}
