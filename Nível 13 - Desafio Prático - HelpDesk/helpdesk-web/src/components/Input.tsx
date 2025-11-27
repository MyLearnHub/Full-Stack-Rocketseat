type Props = React.ComponentProps<"input"> & {
  legend: string;
  alert?: string;
};

export function Input({ legend, alert, type = "text", ...rest }: Props) {
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

      {alert && (
        <span className="mt-1.5 text-xs italic text-gray-400">{alert}</span>
      )}
    </fieldset>
  );
}
