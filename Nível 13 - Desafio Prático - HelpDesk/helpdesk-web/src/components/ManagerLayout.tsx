import logoManager from "../assets/logo-manager.svg";
import clipboard from "../assets/icons/clipboard.svg";
import employee from "../assets/icons/employee.svg";
import caseWork from "../assets/icons/case.svg";
import wrench from "../assets/icons/wrench.svg";
import avatar from "../assets/avatar-manager.svg";

import { NavOption } from "./NavOption";
import { Outlet } from "react-router";

export function ManagerLayout() {
  return (
    <div className="w-screen h-screen flex pt-3 bg-gray-500">
      <aside className="w-[200px] h-full flex flex-col justify-between">
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

      <main className="bg-gray-50 rounded-tl-3xl flex flex-1 px-12 pt-[52px] pb-12">
        <Outlet />
      </main>
    </div>
  );
}
