import { Button } from "../components/Button";
import { TableHead } from "../components/TableHead";
import add from "../assets/icons/add.svg";
import { EmployeeLine } from "../components/EmployeeLine";
import { Title } from "../components/Title";

export type Employee = {
  id: string;
  name: string;
  email: string;
  employeeInitials: string;
  availability: string[];
};

const employees: Employee[] = [
  {
    id: "1",
    name: "Carlos Silva",
    email: "carlos.silva@test.com",
    employeeInitials: "CS",
    availability: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
    ],
  },
  {
    id: "2",
    name: "Ana Oliveira",
    email: "ana.oliveira@test.com",
    employeeInitials: "AO",
    availability: ["13:00", "14:00", "15:00", "16:00"],
  },
  {
    id: "3",
    name: "Cintia Lúcia",
    email: "cintia.lucia@test.com",
    employeeInitials: "CL",
    availability: ["08:00", "09:00", "14:00", "15:00", "18:00"],
  },
  {
    id: "4",
    name: "Marcos Alves",
    email: "marcos.alves@test.com",
    employeeInitials: "MA",
    availability: [
      "07:00",
      "09:00",
      "11:00",
      "15:00",
      "17:00",
      "19:00",
      "21:00",
    ],
  },
];

export function ManagerEmployees() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <Title>Técnicos</Title>
        <a href="/employees/new">
          <Button icon={add} className="px-4 py-2.5 font-normal">
            Novo
          </Button>
        </a>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-gray-100 text-sm">
        <table className="w-full table-fixed text-left">
          <thead className="text-gray-400 font-bold">
            <tr>
              <TableHead className="w-[30%]">Nome</TableHead>
              <TableHead className="w-[30%]">E-mail</TableHead>
              <TableHead className="w-[30%]">Disponibilidade</TableHead>
              <TableHead className="w-[4.6%]"></TableHead>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {employees.map((employee, index) => {
              const isLast = index === employees.length - 1;

              return (
                <EmployeeLine
                  key={employee.id}
                  employee={employee}
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
