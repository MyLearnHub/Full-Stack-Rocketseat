import { Routes, Route } from "react-router";

import { NotFound } from "../pages/NotFound";
import { TicketDetails } from "../pages/TicketDetail";
import { CustomerTickets } from "../pages/CustomerTickets";
import { CustomerLayout } from "../components/CustomerLayout";
import { NewTicket } from "../pages/NewTicket";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CustomerLayout />}>
        <Route index element={<CustomerTickets />} />
        <Route path="/tickets/:id" element={<TicketDetails />} />
        <Route path="/tickets/create" element={<NewTicket />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
