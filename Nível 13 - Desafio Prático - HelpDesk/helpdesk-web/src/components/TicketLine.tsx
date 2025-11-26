import pencil from "../assets/icons/pencil.svg";

import type { Ticket } from "../pages/ManagerTickets";
import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";
import { TableData } from "./TableData";

export function TicketLine({
  ticket,
  isLast,
}: {
  ticket: Ticket;
  isLast: boolean;
}) {
  return (
    <tr
      key={ticket.id}
      className={`border-t border-gray-100 ${isLast ? "rounded-b-[10px]" : ""}`}
    >
      <TableData>
        <div className="text-xs">{ticket.date}</div>
      </TableData>
      <TableData>
        <div className="font-semibold text-xs">{ticket.id}</div>
      </TableData>

      <TableData>
        <div className="font-bold">{ticket.title}</div>
        <div className="text-xs">{ticket.service}</div>
      </TableData>

      <TableData>{ticket.value}</TableData>

      <TableData>
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-blue-200 text-white flex items-center justify-center text-[8.75px]">
            {ticket.customerInitials}
          </span>
          {ticket.customerName}
        </div>
      </TableData>

      <TableData>
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-blue-200 text-white flex items-center justify-center text-[8.75px]">
            {ticket.technicianInitials}
          </span>
          {ticket.technicianName}
        </div>
      </TableData>

      <TableData>
        <StatusBadge status={ticket.status} />
      </TableData>

      <TableData>
        <a href="/ticket/1">
          <Button variant="secondary" icon={pencil}></Button>
        </a>
      </TableData>
    </tr>
  );
}
