type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return <h1 className="text-2xl font-bold text-blue-200">{children}</h1>;
}
