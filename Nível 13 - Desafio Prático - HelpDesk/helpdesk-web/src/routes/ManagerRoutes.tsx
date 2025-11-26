import { Routes, Route } from "react-router";

import { ManagerLayout } from "../components/ManagerLayout";
import { ManagerTickets } from "../pages/ManagerTickets";
import { NotFound } from "../pages/NotFound";
import { TicketDetail } from "../pages/TicketDetail";
import { ManagerEmployees } from "../pages/ManagerEmployees";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ManagerLayout />}>
        <Route index element={<ManagerTickets />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
        <Route path="employees" element={<ManagerEmployees />} />
        <Route path="customers" element={<h1>Clientes </h1>} />
        <Route path="services" element={<h1>Serviços</h1>} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
