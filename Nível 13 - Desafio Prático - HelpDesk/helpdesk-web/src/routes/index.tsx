import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
  function Route() {
    return <ManagerRoutes />;
  }

  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
