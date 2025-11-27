type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function TableData({ children, className }: Props) {
  return (
    <td className={`py-[23.5px] px-3 align-middle ${className ?? ""}`}>
      {children}
    </td>
  );
}
