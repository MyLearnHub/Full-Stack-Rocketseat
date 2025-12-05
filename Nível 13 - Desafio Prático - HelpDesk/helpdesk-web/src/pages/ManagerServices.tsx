import { Button } from "../components/Button";
import { TableHead } from "../components/TableHead";
import add from "../assets/icons/add.svg";
import { Title } from "../components/Title";
import { ServiceLine } from "../components/ServiceLine";
import { useState } from "react";
import { ServiceModal } from "../components/ServiceModal";

const services: Service[] = [
  {
    id: "1",
    title: "Instalação de Rede",
    value: "180",
    status: "Ativo",
  },
  {
    id: "2",
    title: "Recuperação de Dados",
    value: "200",
    status: "Inativo",
  },
  {
    id: "3",
    title: "Manutenção de Hardware",
    value: "150",
    status: "Ativo",
  },
  {
    id: "4",
    title: "Suporte de Software",
    value: "200",
    status: "Ativo",
  },
];

export function ManagerServices() {
  const [isServiceModal, setServiceModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  function handleNewService() {
    setSelectedService(null);
    setServiceModalOpen(true);
  }

  function handleEditService(service: Service) {
    setSelectedService(service);
    setServiceModalOpen(true);
  }

  function closeServiceModal() {
    setServiceModalOpen(false);
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 xl:mb-6">
        <Title>Serviços</Title>
        <Button
          icon={add}
          className="p-[11px] xl:px-4 xl:py-2.5 font-normal"
          responsive
          onClick={handleNewService}
        >
          Novo
        </Button>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-gray-100 text-sm">
        <table className="w-full text-left">
          <thead className="text-gray-400 font-bold">
            <tr>
              <TableHead className="w-[15%] xl:w-[50%] max-w-[87px]">
                Título
              </TableHead>
              <TableHead className="w-[35%] xl:w-[30%]">Valor</TableHead>
              <TableHead className="w-[20%] xl:w-[5%]">Status</TableHead>
              <TableHead className="w-[30%] xl:w-[15%]"></TableHead>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {services.map((service, index) => {
              const isLast = index === services.length - 1;

              return (
                <ServiceLine
                  key={service.id}
                  service={service}
                  isLast={isLast}
                  onEdit={() => handleEditService(service)}
                />
              );
            })}
          </tbody>
        </table>

        <ServiceModal
          isOpen={isServiceModal}
          service={selectedService || undefined}
          onClose={closeServiceModal}
        />
      </div>
    </div>
  );
}
