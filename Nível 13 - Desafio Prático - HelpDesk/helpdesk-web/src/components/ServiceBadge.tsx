import { classMerge } from "../utils/classMerge";

import block from "../assets/icons/red-block.svg";
import check from "../assets/icons/green-check.svg";

type Props = {
  variant?: "Ativo" | "Inativo";
};

const variants = {
  badge: {
    Ativo: "bg-red-100/20 text-red-100",
    Inativo: "bg-green-100/20 text-green-100",
  },
};

export function ServiceBadge({ variant = "Ativo" }: Props) {
  return (
    <div
      className={classMerge([
        "w-max p-1.5 rounded-full flex gap-1.5 text-xs font-bold xl:px-3",
        variants.badge[variant],
      ])}
    >
      <img
        src={variant === "Ativo" ? block : check}
        alt="Ícone de status"
        className="flex xl:hidden"
      />

      <span className="hidden xl:flex">
        {variant === "Ativo" ? "Ativo" : "Inativo"}
      </span>
    </div>
  );
}
