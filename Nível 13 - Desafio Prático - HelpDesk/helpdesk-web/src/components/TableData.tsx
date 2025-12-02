type Props = {
  children?: React.ReactNode;
  className?: string;
  desktopOnly?: boolean;
};

export function TableData({ children, desktopOnly, className }: Props) {
  return (
    <td
      className={`
        py-[23.5px] px-3 align-middle
        ${desktopOnly ? "hidden xl:table-cell" : ""}
        ${className ?? ""}
      `}
    >
      {children}
    </td>
  );
}
