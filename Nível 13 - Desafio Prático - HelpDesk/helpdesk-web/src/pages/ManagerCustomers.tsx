import { useState } from "react";
import { TableHead } from "../components/TableHead";
import { Title } from "../components/Title";
import { CustomerLine } from "../components/CustomerLine";
import { EditCustomerModal } from "../components/EditCustomerModal";
import { DeleteCustomerModal } from "../components/DeleteCustomerModal";

const customers: Customer[] = [
  {
    id: "1",
    name: "André Costa",
    email: "andre.costa@client.com",
    customerInitials: "AC",
  },
  {
    id: "2",
    name: "Julia Maria",
    email: "julia.maria@client.com",
    customerInitials: "JM",
  },
  {
    id: "3",
    name: "Aline Souza",
    email: "aline.souza@client.com",
    customerInitials: "AS",
  },
  {
    id: "4",
    name: "Marcelo Andrade",
    email: "marcelo.andrade@client.com",
    customerInitials: "MA",
  },
  {
    id: "5",
    name: "Suzane Moura",
    email: "suzane.moura@client.com",
    customerInitials: "SM",
  },
];

export function ManagerCustomers() {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  function openEditModal(customer: Customer) {
    setSelectedCustomer(customer);
    setEditModalOpen(true);
  }

  function closeEditModal() {
    setEditModalOpen(false);
    setSelectedCustomer(null);
  }

  function openDeleteModal(customer: Customer) {
    setSelectedCustomer(customer);
    setDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalOpen(false);
    setSelectedCustomer(null);
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 xl:mb-6">
        <Title>Clientes</Title>
      </div>

      <div className="overflow-hidden rounded-[10px] border border-gray-100 text-sm">
        <table className="w-full text-left">
          <thead className="text-gray-400 font-bold">
            <tr>
              <TableHead className="w-[50%]">Nome</TableHead>
              <TableHead className="w-[45%]" desktopOnly>
                E-mail
              </TableHead>
              <TableHead className="w-[5%]"></TableHead>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            {customers.map((customer, index) => {
              const isLast = index === customers.length - 1;

              return (
                <CustomerLine
                  key={customer.id}
                  customer={customer}
                  isLast={isLast}
                  onEdit={() => openEditModal(customer)}
                  onDelete={() => openDeleteModal(customer)}
                />
              );
            })}
          </tbody>
        </table>

        {selectedCustomer && (
          <EditCustomerModal
            customer={selectedCustomer}
            isOpen={isEditModalOpen}
            onClose={closeEditModal}
          />
        )}

        {selectedCustomer && (
          <DeleteCustomerModal
            customer={selectedCustomer}
            isOpen={isDeleteModalOpen}
            onClose={closeDeleteModal}
          />
       )}
      </div>
    </div>
  );
}
