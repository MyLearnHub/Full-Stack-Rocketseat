import { Routes, Route } from "react-router";

import { NotFound } from "../pages/NotFound";
import { TicketDetails } from "../pages/TicketDetail";
import { NewTicket } from "../pages/NewTicket";
import { EmployeeLayout } from "../components/EmployeeLayout";
import { EmployeeTickets } from "../pages/EmployeeTickets";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EmployeeLayout />}>
        <Route index element={<EmployeeTickets />} />
        <Route path="/tickets/:id" element={<TicketDetails />} />
        <Route path="/tickets/create" element={<NewTicket />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
