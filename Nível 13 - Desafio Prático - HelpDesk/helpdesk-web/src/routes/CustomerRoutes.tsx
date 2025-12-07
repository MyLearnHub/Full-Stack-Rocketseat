import { Routes, Route } from "react-router";

import { NotFound } from "../pages/NotFound";
import { CustomerTickets } from "../pages/CustomerTickets";
import { CustomerLayout } from "../components/CustomerLayout";

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CustomerLayout />}>
        <Route index element={<CustomerTickets />} />
        {/* <Route path="/tickets" element={<CustomerTickets />} /> */}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
