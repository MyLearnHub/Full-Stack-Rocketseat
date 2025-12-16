import { EmployeeTicketsRow } from "../components/EmployeeTicketRow";
import { Title } from "../components/Title";

export const tickets: Ticket[] = [
  {
    id: "00001",
    title: "Rede lenta",
    description: "Instalação de Rede",
    customer: "André Costa",
    employee: "João Almeida",
    status: "Em atendimento",
    createdAt: "10/04/2025 15:13",
    updatedAt: "10/04/2025 15:13",
    service: "Instalação de Rede",
    value: "200,00",
  },
  {
    id: "00002",
    title: "Instalação de software de gestão",
    description: "Suporte de Software",
    customer: "Julia Maria",
    employee: "João Almeida",
    status: "Aberto",
    createdAt: "10/04/2025 15:13",
    updatedAt: "10/04/2025 15:13",
    service: "Suporte de Software",
    value: "200,00",
  },
  {
    id: "00003",
    title: "Rede lenta",
    description: "Instalação de Rede",
    customer: "André Costa",
    employee: "João Almeida",
    status: "Aberto",
    createdAt: "10/04/2025 15:13",
    updatedAt: "10/04/2025 15:13",
    service: "Instalação de Rede",
    value: "200,00",
  },
  {
    id: "00004",
    title: "Backup não está funcionando",
    description: "Recuperação de Dados",
    customer: "André Costa",
    employee: "João Almeida",
    status: "Aberto",
    createdAt: "10/04/2025 15:13",
    updatedAt: "10/04/2025 15:13",
    service: "Recuperação de Dados",
    value: "200,00",
  },
  {
    id: "00005",
    title: "Meu fone não conecta no computador",
    description: "Suporte de Software",
    customer: "Suzane Moura",
    employee: "João Almeida",
    status: "Encerrado",
    createdAt: "10/04/2025 15:13",
    updatedAt: "10/04/2025 15:13",
    service: "Suporte de Software",
    value: "200,00",
  },
];

export function EmployeeTickets() {
  const openedTickets = tickets.filter((ticket) => ticket.status === "Aberto");
  const inProgressTickets = tickets.filter(
    (ticket) => ticket.status === "Em atendimento"
  );
  const closedTickets = tickets.filter(
    (ticket) => ticket.status === "Encerrado"
  );

  return (
    <div className="w-full h-max">
      <Title>Meus chamados</Title>

      <div className="mt-6 flex flex-col gap-6">
        <EmployeeTicketsRow
          status="Em atendimento"
          tickets={inProgressTickets}
        />
        <EmployeeTicketsRow status="Aberto" tickets={openedTickets} />
        <EmployeeTicketsRow status="Encerrado" tickets={closedTickets} />
      </div>
    </div>
  );
}
