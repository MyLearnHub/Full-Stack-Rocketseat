import { TableHead } from "../components/TableHead";
import { TicketLine } from "../components/TicketLine";

export type Ticket = {
  date: string;
  id: string;
  title: string;
  service: string;
  value: string;
  customerName: string;
  customerInitials: string;
  technicianName: string;
  technicianInitials: string;
  status: "Aberto" | "Em atendimento" | "Encerrado";
};

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

export function ManagerTickets() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold text-blue-200 mb-6">Chamados</h1>

      <div className="overflow-hidden rounded-[10px] border border-gray-100 text-sm">
        <table className="w-full text-left">
          <thead className="text-gray-400 font-bold">
            <tr>
              <TableHead>Atualizado em</TableHead>
              <TableHead>Id</TableHead>
              <TableHead>Título e Serviço</TableHead>
              <TableHead>Valor total</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Técnico</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {tickets.map((t, index) => {
              const isLast = index === tickets.length - 1;

              return <TicketLine key={t.id} t={t} isLast={isLast} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
