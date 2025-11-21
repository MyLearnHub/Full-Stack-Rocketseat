type Props = React.ComponentProps<"input"> & {
  legend: string;
};

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="text-gray-200 focus-within:text-blue-100">
      <legend className="uppercase text-xxs font-bold text-inherit">
        {legend}
      </legend>

      <input
        type={type}
        {...rest}
        className="w-full py-2 outline-none border-b text-md text-gray-300 border-gray-100 focus:border-blue-100 placeholder-gray-400"
      />
    </fieldset>
  );
}
