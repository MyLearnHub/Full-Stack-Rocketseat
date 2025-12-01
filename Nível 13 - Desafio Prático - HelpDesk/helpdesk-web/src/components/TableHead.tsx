type Props = {
  children?: React.ReactNode;
  className?: string;
  desktopOnly?: boolean;
};

export function TableHead({ children, desktopOnly, className }: Props) {
  return (
    <th
      className={`py-3.5 px-3 whitespace-nowrap overflow-hidden text-ellipsis ${className} ${
        desktopOnly && "hidden xl:table-cell"
      }`}
    >
      {children}
    </th>
  );
}
