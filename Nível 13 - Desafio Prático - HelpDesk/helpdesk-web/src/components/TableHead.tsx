type Props = {
  children?: React.ReactNode;
};

export function TableHead({ children }: Props) {
  return <th className="py-3.5 px-3">{children}</th>;
}
