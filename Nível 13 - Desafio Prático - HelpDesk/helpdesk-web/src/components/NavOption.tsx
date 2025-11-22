import { NavLink } from "react-router";

type Props = {
  icon?: string;
  href: string;
  children: React.ReactNode;
};

export function NavOption({ icon, href, children, ...rest }: Props) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        [
          "p-3 rounded-[5px] transition ease-linear",
          isActive ? "text-gray-50" : "text-gray-400",
          isActive ? "bg-blue-200" : "bg-transparent",
          !isActive && "hover:bg-gray-300",
        ]
          .filter(Boolean)
          .join(" ")
      }
      {...rest}
    >
      {({ isActive }) => (
        <div className="flex gap-3 text-sm">
          {icon && (
            <img
              src={icon}
              alt=""
              className={isActive ? "opacity-100" : "opacity-50"}
            />
          )}
          {children}
        </div>
      )}
    </NavLink>
  );
}
