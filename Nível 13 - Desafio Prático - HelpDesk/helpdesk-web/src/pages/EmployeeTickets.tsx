import { EmployeeTicketsRow } from "../components/EmployeeTicketRow";
import { Title } from "../components/Title";

export function EmployeeTickets() {
  return (
    <div className="w-full h-max">
      <Title>Meus chamados</Title>

      <div className="mt-6 flex flex-col gap-6">
        <EmployeeTicketsRow status="Em atendimento" />
        <EmployeeTicketsRow status="Aberto" />
        <EmployeeTicketsRow status="Encerrado" />
      </div>
    </div>
  );
}
