import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
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
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={classMerge([
        "w-full text-sm p-2.5 rounded-[5px] cursor-pointer transition ease-linear font-bold",
        variants.button[variant],
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
