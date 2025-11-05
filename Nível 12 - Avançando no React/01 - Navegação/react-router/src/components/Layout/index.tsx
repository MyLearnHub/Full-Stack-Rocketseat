import "./styles.css";

import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="layout">
      <header className="user">
        <p>Olá, Rodrigo</p>
      </header>

      <Outlet />

      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  );
}
