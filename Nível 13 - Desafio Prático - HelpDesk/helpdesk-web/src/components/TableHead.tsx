type Props = {
  children?: React.ReactNode;
  className?: string;
};

export function TableHead({ children, className }: Props) {
  return <th className={`py-3.5 px-3 ${className}`}>{children}</th>;
}
