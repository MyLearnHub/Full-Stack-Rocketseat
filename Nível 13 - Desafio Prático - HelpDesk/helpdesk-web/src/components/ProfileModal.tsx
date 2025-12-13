import close from "../assets/icons/close-black.svg";
import avatar from "../assets/avatar/andre-costa.svg";
import update from "../assets/icons/update.svg";
import trash from "../assets/icons/trash.svg";
import { Input } from "./Input";
import { Button } from "./Button";
import { UpdatePasswordModal } from "./UpdatePasswordModal";
import { useState } from "react";
import { ScheduleBadge } from "./ScheduleBadge";

type Props = {
  customer?: Customer;
  employee?: Employee;
  isOpen: boolean;
  onClose: () => void;
};

export function ProfileModal({ customer, employee, isOpen, onClose }: Props) {
  const [isUpdatePasswordModalOpen, setUpdatePasswordModalOpen] =
    useState(false);

  function closeUpdatePassword() {
    setUpdatePasswordModalOpen(false);
  }

  if (!isOpen) return null;

  if (isUpdatePasswordModalOpen) {
    return (
      <UpdatePasswordModal
        isOpen={isUpdatePasswordModalOpen}
        onClose={closeUpdatePassword}
      />
    );
  }

  const availabilityCount = employee?.availability?.length ?? 0;

  return (
    <div className="w-screen h-screen bg-[#00000050] absolute inset-0 flex justify-center items-center z-50">
      <div className="bg-gray-50 w-[358px] rounded-[10px] border border-gray-100 xl:w-[440px]">
        <div className="px-7 py-5 flex justify-between items-center">
          <h2 className="text-md font-bold text-gray-300">Perfil</h2>
          <img
            src={close}
            alt="Ícone de fechar"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="w-full px-7 pt-7 pb-8 flex flex-col gap-5 border-y border-gray-100">
          <div className="flex items-center gap-3">
            <img src={avatar} alt="" className="w-12" />
            <div className="flex gap-1">
              <Button variant="secondary" icon={update} className="text-xs">
                Nova imagem
              </Button>
              <Button
                variant="secondary"
                icon={trash}
                onClick={() => setUpdatePasswordModalOpen(true)}
              ></Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              name="name"
              required
              legend="Nome"
              placeholder="Nome completo"
              defaultValue={
                (customer && customer.name) || (employee && employee.name)
              }
            />
            <Input
              name="email"
              required
              legend="E-mail"
              type="email"
              placeholder="exemplo@mail.com"
              defaultValue={
                (customer && customer.email) || (employee && employee.email)
              }
            />
            <Input
              name="password"
              required
              legend="Senha atual"
              type="password"
              placeholder="Digite sua senha atual"
              defaultValue={
                (customer && customer.password) ||
                (employee && employee.password)
              }
              updatePassword={() => setUpdatePasswordModalOpen(true)}
            />
          </div>
        </div>

        {employee && (
          <div className="px-7 py-5 border-b border-gray-100">
            <h2 className="text-sm font-bold text-gray-300">Disponibilidade</h2>
            <p className="text-xs text-gray-200 mb-3">
              Horários de atendimento definidos pelo admin
            </p>

            {availabilityCount > 0 ? (
              <div className="flex gap-1 flex-wrap">
                {employee.availability.map((hour) => (
                  <ScheduleBadge variant="inactive" key={hour} hour={hour} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-400">Sem horários</p>
            )}
          </div>
        )}

        <div className="px-7 py-6">
          <Button>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
