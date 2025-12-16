import { TableHead } from "../components/TableHead";
import { TicketLine } from "../components/TicketLine";
import { Title } from "../components/Title";
import { tickets } from "./EmployeeTickets";

export function ManagerTickets() {
  return (
    <div className="w-full">
      <div className="mb-4 xl:mb-6">
        <Title>Chamados</Title>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-gray-100 text-sm">
        <table className="w-full text-left table-auto">
          <thead className="text-gray-400 font-bold">
            <tr>
              <TableHead>Atualizado em</TableHead>
              <TableHead desktopOnly>Id</TableHead>
              <TableHead>Título e Serviço</TableHead>
              <TableHead desktopOnly>Valor total</TableHead>
              <TableHead desktopOnly>Cliente</TableHead>
              <TableHead desktopOnly>Técnico</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {tickets.map((ticket, index) => {
              const isLast = index === tickets.length - 1;

              return (
                <TicketLine key={ticket.id} ticket={ticket} isLast={isLast} />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
