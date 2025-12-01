import caseWork from "../assets/icons/case.svg";
import wrench from "../assets/icons/wrench.svg";
import avatar from "../assets/avatar-manager.svg";
import employee from "../assets/icons/employee.svg";
import logoManager from "../assets/logo-manager.svg";
import clipboard from "../assets/icons/clipboard.svg";
import menu from "../assets/icons/menu.svg";

import { useState } from "react";
import { Outlet } from "react-router";
import { NavOption } from "./NavOption";

export function ManagerLayout() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="w-screen h-screen overflow-x-hidden flex flex-col bg-gray-500 xl:flex-row xl:pt-3">
      <aside className="w-[200px] h-full flex-col justify-between hidden xl:flex">
        <div>
          <img src={logoManager} alt="Logo HelpDesk" className="mx-5 my-6" />

          <div className="h-px w-full bg-gray-300"></div>

          <nav className="mx-4 my-5 flex flex-col gap-1">
            <NavOption href="/" icon={clipboard}>
              Chamados
            </NavOption>
            <NavOption href="/employees" icon={employee}>
              Técnicos
            </NavOption>
            <NavOption href="/customers" icon={caseWork}>
              Clientes
            </NavOption>
            <NavOption href="/services" icon={wrench}>
              Serviços
            </NavOption>
          </nav>
        </div>

        <div>
          <div className="h-px w-full bg-gray-300"></div>

          <div className="mx-4 my-5 flex gap-3">
            <img src={avatar} alt="Avatar Manager" />
            <div className="flex flex-col">
              <span className="text-gray-50 text-sm">Usuário Adm</span>
              <span className="text-gray-400 text-xs">user.adm@test.com</span>
            </div>
          </div>
        </div>
      </aside>

      <header className="p-6 xl:hidden flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2.5 rounded-[5px] bg-gray-300">
            <img src={menu} alt="Ícone de menu" />
          </div>

          <img src={logoManager} alt="Logo HelpDesk" />
        </div>

        <img src={avatar} alt="Avatar Manager" className="w-10" />
      </header>

      <main className="bg-gray-50 rounded-t-3xl flex flex-1 px-6 pt-7 pb-6 xl:rounded-tl-3xl xl:rounded-tr-none xl:px-12 xl:pt-[52px] xl:pb-12">
        <Outlet />
      </main>
    </div>
  );
}
