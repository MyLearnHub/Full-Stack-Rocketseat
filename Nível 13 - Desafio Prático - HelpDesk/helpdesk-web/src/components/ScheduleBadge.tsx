import { useState } from "react";
import { classMerge } from "../utils/classMerge";
import close from "../assets/icons/close.svg";

type Props = {
  hour: string;
  variant?: "default" | "selected" | "inactive";
};

const variants = {
  badge: {
    default: "border-gray-400 text-gray-300 hover:bg-gray-100 cursor-pointer",
    selected: "bg-blue-100 text-gray-50 cursor-pointer",
    inactive: "border-gray-100 text-gray-400",
  },
};

export function ScheduleBadge({ hour, variant = "default" }: Props) {
  const [currentVariant, setCurrentVariant] = useState<
    "default" | "selected" | "inactive"
  >(variant);

  function activate() {
    if (currentVariant === "inactive") return;
    if (currentVariant === "default") setCurrentVariant("selected");
  }

  function removeSelected(e: React.MouseEvent) {
    e.stopPropagation();
    setCurrentVariant("default");
  }

  return (
    <div
      onClick={activate}
      className={classMerge([
        "shrink-0 border rounded-full text-xs font-bold h-min transition-all select-none",
        currentVariant === "selected"
          ? "pl-3 pr-1.5 py-[7px] flex gap-1.5"
          : "max-w-[55px] px-3 py-1.5",
        variants.badge[currentVariant],
      ])}
    >
      {hour}

      {currentVariant === "selected" && (
        <img
          src={close}
          alt="Remover"
          className="cursor-pointer shrink-0"
          onClick={removeSelected}
        />
      )}
    </div>
  );
}
