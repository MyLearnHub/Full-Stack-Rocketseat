import logoEmployee from "../assets/logo-employee.svg";
import clipboard from "../assets/icons/clipboard.svg";
import avatar from "../assets/avatar-manager.svg";
import close from "../assets/icons/close.svg";
import menu from "../assets/icons/menu.svg";

import { useState } from "react";
import { Outlet } from "react-router";
import { NavOption } from "./NavOption";
import { ProfileModal } from "./ProfileModal";
import { UpdatePasswordModal } from "./UpdatePasswordModal";

const mockEmployee: Employee = {
  id: "1",
  name: "Técnico Teste",
  email: "tech@test.com",
  employeeInitials: "TT",
  password: "123456",
  availability: ["07:00", "09:00", "11:00", "15:00", "17:00", "19:00"],
};

export function EmployeeLayout() {
  const [open, setOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isUpdatePasswordModalOpen, setUpdatePasswordModalOpen] =
    useState(false);

  function openProfileModal(employee: Employee) {
    setSelectedEmployee(employee);
    setProfileModalOpen(true);
  }

  function closeProfileModal() {
    setProfileModalOpen(false);
    setSelectedEmployee(null);
  }

  function closeUpdatePasswordModal() {
    setUpdatePasswordModalOpen(false);
  }

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col bg-gray-500 xl:flex-row xl:pt-3 overflow-hidden">
      <aside className="w-[200px] h-full flex-col justify-between hidden xl:flex">
        <div>
          <img src={logoEmployee} alt="Logo HelpDesk" className="mx-5 my-6" />

          <div className="h-px w-full bg-gray-300"></div>

          <nav className="mx-4 my-5 flex flex-col gap-1">
            <NavOption href="/" icon={clipboard}>
              Meus chamados
            </NavOption>
          </nav>
        </div>

        <div
          className="w-full px-4 py-5 border-t border-gray-300 cursor-pointer"
          onClick={() => openProfileModal(mockEmployee)}
        >
          <div className="flex gap-3">
            <img src={avatar} alt="Avatar Employee" />
            <div className="flex flex-col">
              <span className="text-gray-50 text-sm">Usuário Técnico</span>
              <span className="text-gray-400 text-xs">user.tech@test.com</span>
            </div>
          </div>
        </div>
      </aside>

      <header className="p-6 flex items-center justify-between xl:hidden">
        <div className="flex items-center gap-4">
          <div
            className="p-2.5 rounded-[5px] bg-gray-300 cursor-pointer"
            onClick={toggleMenu}
          >
            <img src={menu} alt="Ícone de menu" />
          </div>

          <img src={logoEmployee} alt="Logo HelpDesk" />
        </div>

        <img
          src={avatar}
          alt="Avatar Employee"
          className="w-10 cursor-pointer"
          onClick={() => openProfileModal({} as Employee)}
        />
      </header>

      <aside
        className={`w-44 h-screen absolute bg-gray-500 xl:hidden z-10 ${
          open ? "block" : "hidden"
        }`}
      >
        <img
          src={close}
          alt="Ícone de fechar"
          className="mx-5 my-6 w-7 cursor-pointer"
          onClick={closeMenu}
        />

        <nav className="mx-4 my-5 flex flex-col gap-1">
          <NavOption href="/" icon={clipboard}>
            Meus chamados
          </NavOption>
        </nav>
      </aside>

      <main className="bg-gray-50 rounded-t-3xl flex flex-1 px-6 pt-7 pb-6 overflow-y-scroll xl:rounded-tl-3xl xl:rounded-tr-none xl:px-12 xl:pt-[52px] xl:pb-12">
        <Outlet />
      </main>

      {selectedEmployee && (
        <ProfileModal
          employee={selectedEmployee}
          isOpen={isProfileModalOpen}
          onClose={closeProfileModal}
        />
      )}

      {isUpdatePasswordModalOpen && (
        <UpdatePasswordModal
          isOpen={isUpdatePasswordModalOpen}
          onClose={closeUpdatePasswordModal}
        />
      )}
    </div>
  );
}
