import { Title } from "../components/Title";
import { TableHead } from "../components/TableHead";
import { TicketCustomerLine } from "../components/TicketCustomerLine";

const tickets: Ticket[] = [
  {
    date: "13/04/25 20:56",
    id: "00003",
    title: "Rede lenta",
    service: "Instalação de Rede",
    value: "R$ 180,00",
    customerName: "André Costa",
    customerInitials: "AC",
    technicianName: "Carlos Silva",
    technicianInitials: "CS",
    status: "Aberto",
  },
  {
    date: "12/04/25 15:20",
    id: "00004",
    title: "Backup não está funcionando",
    service: "Recuperação de Dados",
    value: "R$ 200,00",
    customerName: "André Costa",
    customerInitials: "AC",
    technicianName: "Carlos Silva",
    technicianInitials: "CS",
    status: "Aberto",
  },
  {
    date: "12/04/25 09:01",
    id: "00001",
    title: "Computador não liga",
    service: "Manutenção de Hardware",
    value: "R$ 150,00",
    customerName: "Aline Souza",
    customerInitials: "AS",
    technicianName: "Carlos Silva",
    technicianInitials: "CS",
    status: "Em atendimento",
  },
  {
    date: "10/04/25 10:15",
    id: "00002",
    title: "Instalação de software de gestão",
    service: "Suporte de Software",
    value: "R$ 200,00",
    customerName: "Julia Maria",
    customerInitials: "JM",
    technicianName: "Ana Oliveira",
    technicianInitials: "AO",
    status: "Encerrado",
  },
  {
    date: "11/04/25 15:16",
    id: "00005",
    title: "Meu fone não conecta no computador",
    service: "Suporte de Software",
    value: "R$ 80,00",
    customerName: "Suzane Moura",
    customerInitials: "SM",
    technicianName: "Ana Oliveira",
    technicianInitials: "AO",
    status: "Encerrado",
  },
];

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
