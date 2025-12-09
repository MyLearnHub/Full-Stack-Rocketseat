import logoCustomer from "../assets/logo-customer.svg";
import clipboard from "../assets/icons/clipboard.svg";
import avatar from "../assets/avatar-manager.svg";
import close from "../assets/icons/close.svg";
import menu from "../assets/icons/menu.svg";
import add from "../assets/icons/add.svg";

import { useState } from "react";
import { Outlet } from "react-router";
import { NavOption } from "./NavOption";

export function CustomerLayout() {
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
          <img src={logoCustomer} alt="Logo HelpDesk" className="mx-5 my-6" />

          <div className="h-px w-full bg-gray-300"></div>

          <nav className="mx-4 my-5 flex flex-col gap-1">
            <NavOption href="/" icon={clipboard}>
              Meus chamados
            </NavOption>
            <NavOption href="/tickets/create" icon={add}>
              Criar chamado
            </NavOption>
          </nav>
        </div>

        <div>
          <div className="h-px w-full bg-gray-300"></div>

          <div className="mx-4 my-5 flex gap-3">
            <img src={avatar} alt="Avatar Customer" />
            <div className="flex flex-col">
              <span className="text-gray-50 text-sm">Usuário Cliente</span>
              <span className="text-gray-400 text-xs">
                user.client@test.com
              </span>
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

          <img src={logoCustomer} alt="Logo HelpDesk" />
        </div>

        <img src={avatar} alt="Avatar Customer" className="w-10" />
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
          <NavOption href="/tickets/create" icon={add}>
            Criar chamado
          </NavOption>
        </nav>
      </aside>

      <main className="bg-gray-50 rounded-t-3xl flex flex-1 px-6 pt-7 pb-6 xl:rounded-tl-3xl xl:rounded-tr-none xl:px-12 xl:pt-[52px] xl:pb-12">
        <Outlet />
      </main>
    </div>
  );
}
