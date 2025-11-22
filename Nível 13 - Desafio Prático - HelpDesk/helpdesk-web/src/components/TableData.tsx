type Props = {
  children?: React.ReactNode;
};

export function TableData({ children }: Props) {
  return <td className="py-[23.5px] px-3">{children}</td>;
}
