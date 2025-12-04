import { Routes, Route } from "react-router";

import { NotFound } from "../pages/NotFound";
import { TicketDetail } from "../pages/TicketDetail";
import { ManagerTickets } from "../pages/ManagerTickets";
import { NewEmployee } from "../pages/NewEmployee";
import { ManagerLayout } from "../components/ManagerLayout";
import { ManagerEmployees } from "../pages/ManagerEmployees";
import { EditEmployee } from "../pages/EditEmployee";
import { ManagerCustomers } from "../pages/ManagerCustomers";
import { ManagerServices } from "../pages/ManagerServices";

export function ManagerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ManagerLayout />}>
        <Route index element={<ManagerTickets />} />
        <Route path="/ticket/:id" element={<TicketDetail />} />
        <Route path="/employees" element={<ManagerEmployees />} />
        <Route path="/employees/new" element={<NewEmployee />} />
        <Route path="/employees/:id" element={<EditEmployee />} />
        <Route path="/customers" element={<ManagerCustomers />} />
        <Route path="/services" element={<ManagerServices />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
