import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const variants = {
  button: {
    primary: "bg-gray-300 text-gray-50 hover:bg-blue-600",
    secondary: "bg-gray-100 hover:bg-blue-600",
  },
};

export function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={classMerge([
        "w-full text-sm p-2.5 rounded-[5px] cursor-pointer transition ease-linear font-bold",
        variants.button[variant],
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
