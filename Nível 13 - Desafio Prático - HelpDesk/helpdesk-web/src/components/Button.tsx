import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
  icon?: string;
};

const variants = {
  button: {
    primary: "bg-gray-300 text-gray-50 hover:bg-gray-500",
    secondary: "bg-gray-100 hover:bg-gray-400 hover:text-gray-500",
  },
};

export function Button({
  children,
  type = "button",
  variant = "primary",
  icon,
  className,
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={classMerge([
        "w-full text-sm rounded-[5px] cursor-pointer transition ease-linear font-bold",
        variants.button[variant],
        icon ? "flex items-center justify-center p-[7px] w-max gap-2" : "p-2.5",
        className,
      ])}
      {...rest}
    >
      {icon && <img src={icon} alt="Ícone de botão" />}
      {children}
    </button>
  );
}
