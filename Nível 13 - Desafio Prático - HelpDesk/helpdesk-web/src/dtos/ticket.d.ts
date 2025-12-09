type Ticket = {
  id: string;
  title: string;
  description: string;
  customer: string;
  employee: string;
  status: "Aberto" | "Em atendimento" | "Encerrado";
  createdAt: string;
  updatedAt: string;
  service: string;
  value: string;
};
