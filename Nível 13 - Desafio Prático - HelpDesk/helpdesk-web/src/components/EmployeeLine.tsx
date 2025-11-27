import pencil from "../assets/icons/pencil.svg";

import type { Employee } from "../pages/ManagerEmployees";
import { Button } from "./Button";
import { ScheduleBadge } from "./ScheduleBadge";
import { TableData } from "./TableData";

export function EmployeeLine({
  employee,
  isLast,
}: {
  employee: Employee;
  isLast: boolean;
}) {
  return (
    <tr
      className={`border-t border-gray-100 ${isLast ? "rounded-b-[10px]" : ""}`}
    >
      <TableData>
        <div className="flex items-center gap-3">
          <span className="h-7 w-7 rounded-full bg-blue-200 text-white flex items-center justify-center text-[12px]">
            {employee.employeeInitials}
          </span>

          <p className="font-bold truncate">{employee.name}</p>
        </div>
      </TableData>

      <TableData>
        <p className="truncate">{employee.email}</p>
      </TableData>

      <TableData>
        <div className="flex gap-1 flex-wrap">
          {employee.availability.length <= 5 &&
            employee.availability.map((hour) => (
              <ScheduleBadge variant="inactive" key={hour} hour={hour} />
            ))}

          {employee.availability.length > 5 &&
            employee.availability
              .slice(0, 4)
              .map((hour) => (
                <ScheduleBadge variant="inactive" key={hour} hour={hour} />
              ))}

          {employee.availability.length > 5 && (
            <ScheduleBadge
              variant="inactive"
              hour={`+${employee.availability.length - 4}`}
            />
          )}
        </div>
      </TableData>

      <TableData>
        <a href={`/employee/${employee.id}`}>
          <Button variant="secondary" icon={pencil} />
        </a>
      </TableData>
    </tr>
  );
}
