import { Title } from "../components/Title";
import { TableHead } from "../components/TableHead";
import { TicketCustomerLine } from "../components/TicketCustomerLine";
import { tickets } from "./ManagerTickets";

export function CustomerTickets() {
  return (
    <div className="w-full">
      <div className="mb-4 xl:mb-6">
        <Title>Meus chamados</Title>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-gray-100 text-sm">
        <table className="w-full text-left table-auto">
          <thead className="text-gray-400 font-bold">
            <tr>
              <TableHead className="w-[24%] max-w-20 xl:w-[10.5%] xl:max-w-28">
                Atualizado em
              </TableHead>
              <TableHead desktopOnly className="xl:w-[6%] xl:max-w-16">
                Id
              </TableHead>
              <TableHead className="w-[43%] max-w-[146px] xl:w-[21%] xl:max-w-[226px]">
                Título
              </TableHead>
              <TableHead desktopOnly className="xl:w-[19%] xl:max-w-[200px]">
                Serviço
              </TableHead>
              <TableHead desktopOnly className="xl:w-[10%] xl:max-w-[104px]">
                Valor total
              </TableHead>
              <TableHead desktopOnly className="xl:w-[15%] xl:max-w-40">
                Técnico
              </TableHead>
              <TableHead className="w-[19%] max-w-16 xl:w-[14%] xl:max-w-[152px]">
                Status
              </TableHead>
              <TableHead className="w-[5%] max-w-[52px]"></TableHead>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {tickets.map((ticket, index) => {
              const isLast = index === tickets.length - 1;

              return (
                <TicketCustomerLine
                  key={ticket.id}
                  ticket={ticket}
                  isLast={isLast}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
