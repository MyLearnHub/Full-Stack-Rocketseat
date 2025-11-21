type Props = React.ComponentProps<"a"> & {
  icon?: string;
};

export function NavOption({ children, icon, href, ...rest }: Props) {
  return (
    <a
      href={href}
      {...rest}
      className="p-3 flex gap-3 text-gray-50 bg-blue-200 rounded-[5px] hover:bg-gray-300 transition ease-linear"
    >
      {icon && <img src={icon} alt="" />}
      {children}
    </a>
  );
}
