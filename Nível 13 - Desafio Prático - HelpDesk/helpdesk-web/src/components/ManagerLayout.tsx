import logoManager from "../assets/logo-manager.svg";
import clipboard from "../assets/icons/clipboard.svg";

import { NavOption } from "./NavOption";

export function ManagerLayout() {
  return (
    <div className="w-screen h-screen flex pt-3 bg-gray-500">
      <aside className="w-[200px] h-full">
        <img src={logoManager} alt="Logo HelpDesk" className="mx-5 my-6" />

        <div className="h-px w-full bg-gray-300"></div>

        <nav className="mx-4 my-5 flex flex-col gap-1">
          <NavOption href="/" icon={clipboard}>
            Chamados
          </NavOption>
          <NavOption href="/employees">Técnicos</NavOption>
          <NavOption href="/customers">Clientes</NavOption>
          <NavOption href="/services">Serviços</NavOption>
        </nav>
      </aside>
    </div>
  );
}
