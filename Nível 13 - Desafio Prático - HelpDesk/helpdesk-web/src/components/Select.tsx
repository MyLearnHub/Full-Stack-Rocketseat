import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

type Item = {
  label: string;
  value: string;
};

type Props = {
  legend?: string;
  help?: string;
  alert?: string;
  value?: string;
  onChange?: (value: string) => void;
  items: Item[];
  disabled?: boolean;
};

export function Select({
  legend,
  help,
  alert,
  value,
  onChange,
  items,
  disabled,
}: Props) {
  const [open, setOpen] = useState(false);

  const selected = items.find((i) => i.value === value);

  return (
    <fieldset className="w-full relative">
      <legend className="uppercase text-xxs font-bold text-gray-200">
        {legend}
      </legend>

      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={`w-full border-b border-gray-100 py-2 flex justify-between items-center text-md focus:border-blue-100 ${
          selected ? "text-gray-300" : "text-gray-400"
        }`}
      >
        {selected ? selected.label : "Selecione a categoria de atendimento"}

        {open ? (
          <ChevronUp size={18} className="text-gray-400" />
        ) : (
          <ChevronDown size={18} className="text-gray-400" />
        )}
      </button>

      {help && (
        <span className="text-md absolute left-0 bottom-[9px] text-gray-400">
          {help}
        </span>
      )}

      {alert && (
        <span className="mt-1.5 text-xs italic text-red-300">{alert}</span>
      )}

      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-[0_12px_40px_-4px_rgba(0,0,0,0.15)] py-4 px-5">
          <span className="uppercase text-xxs text-gray-400 font-bold">
            Opções
          </span>

          <div className="mt-4 flex flex-col">
            {items.map((item) => (
              <button
                key={item.value}
                type="button"
                onClick={() => {
                  onChange?.(item.value);
                  setOpen(false);
                }}
                className={`w-full flex justify-between items-center py-[9px] rounded-md hover:bg-gray-50 text-md ${
                  item.value === value
                    ? "font-bold text-gray-300"
                    : "text-gray-400"
                }`}
              >
                {item.label}

                {item.value === value && (
                  <Check size={16} className="text-blue-100" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </fieldset>
  );
}
