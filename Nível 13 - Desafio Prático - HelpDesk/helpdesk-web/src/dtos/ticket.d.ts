type Ticket = {
  date: string;
  id: string;
  title: string;
  description: string;
  service: string;
  value: string;
  customerName: string;
  customerInitials: string;
  technicianName: string;
  technicianInitials: string;
  status: "Aberto" | "Em atendimento" | "Encerrado";
};
