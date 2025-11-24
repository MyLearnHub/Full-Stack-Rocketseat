type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return <h1 className="text-2xl font-bold text-blue-200 mb-6">{children}</h1>;
}
