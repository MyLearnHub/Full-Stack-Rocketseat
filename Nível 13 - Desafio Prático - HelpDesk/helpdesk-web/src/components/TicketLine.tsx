import pencil from "../assets/icons/pencil.svg";

import type { Ticket } from "../pages/ManagerTickets";
import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";
import { TableData } from "./TableData";

export function TicketLine({ t, isLast }: { t: Ticket; isLast: boolean }) {
  return (
    <tr
      key={t.id}
      className={`border-t border-gray-100 ${isLast ? "rounded-b-[10px]" : ""}`}
    >
      <TableData>
        <div className="text-xs">{t.date}</div>
      </TableData>
      <TableData>
        <div className="font-semibold text-xs">{t.id}</div>
      </TableData>

      <TableData>
        <div className="font-bold">{t.title}</div>
        <div className="text-xs">{t.service}</div>
      </TableData>

      <TableData>{t.value}</TableData>

      <TableData>
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8.75px]">
            {t.customerInitials}
          </span>
          {t.customerName}
        </div>
      </TableData>

      <TableData>
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[8.75px]">
            {t.technicianInitials}
          </span>
          {t.technicianName}
        </div>
      </TableData>

      <TableData>
        <StatusBadge status={t.status} />
      </TableData>

      <TableData>
        <a href="/ticket/1">
          <Button variant="secondary" icon={pencil}></Button>
        </a>
      </TableData>
    </tr>
  );
}
