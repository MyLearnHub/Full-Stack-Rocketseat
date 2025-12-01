type Props = {
  children: React.ReactNode;
};

export function Title({ children }: Props) {
  return <h1 className="text-xl font-bold text-blue-200 xl:text-2xl">{children}</h1>;
}
