import block from "../assets/icons/block.svg";
import check from "../assets/icons/check.svg";
import pencil from "../assets/icons/pencil.svg";

import { Button } from "./Button";
import { TableData } from "./TableData";
import { ServiceBadge } from "./ServiceBadge";

export function ServiceLine({
  service,
  isLast,
  onEdit = () => {},
}: {
  service: Service;
  isLast: boolean;
  onEdit?: () => void;
}) {
  return (
    <tr
      className={`border-t border-gray-100 ${isLast ? "rounded-b-[10px]" : ""}`}
    >
      <TableData className="max-w-[87px]">
        <p className="font-bold text-gray-300 truncate">{service.title}</p>
      </TableData>

      <TableData>
        <p className="text-gray-300">{`R$ ${service.value},00`}</p>
      </TableData>

      <TableData>
        <ServiceBadge variant={service.status} />
      </TableData>

      <TableData>
        <div className="flex items-center gap-2.5 justify-end">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-200">
            <img
              src={service.status === "Ativo" ? block : check}
              alt="Ícone de status"
              className="w-3.5 h-3.5"
            />
            <p className="hidden xl:flex">
              {service.status === "Ativo" ? "Desativar" : "Reativar"}
            </p>
          </div>

          <Button variant="secondary" icon={pencil} onClick={onEdit} />
        </div>
      </TableData>
    </tr>
  );
}
