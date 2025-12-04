import pencil from "../assets/icons/pencil.svg";
import trash from "../assets/icons/trash.svg";

import { Button } from "./Button";
import { TableData } from "./TableData";

export function CustomerLine({
  customer,
  isLast,
  onEdit,
  onDelete,
}: {
  customer: Customer;
  isLast: boolean;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <tr
      className={`border-t border-gray-100 ${isLast ? "rounded-b-[10px]" : ""}`}
    >
      <TableData>
        <div className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-full bg-blue-200 text-white flex items-center justify-center text-[12px]">
            {customer.customerInitials}
          </span>

          <p className="font-bold truncate">{customer.name}</p>
        </div>
      </TableData>

      <TableData>
        <p className="truncate">{customer.email}</p>
      </TableData>

      <TableData className="flex gap-2">
        <Button variant="secondary" icon={trash} onClick={onDelete} />

        <Button variant="secondary" icon={pencil} onClick={onEdit} />
      </TableData>
    </tr>
  );
}
