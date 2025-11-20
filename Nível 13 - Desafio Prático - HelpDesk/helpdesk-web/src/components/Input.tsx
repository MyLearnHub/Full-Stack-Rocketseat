type Props = React.ComponentProps<"input"> & {
  legend?: string;
};

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset>
      {legend && (
        <legend className="uppercase text-xxs font-bold text-gray-200">
          {legend}
        </legend>
      )}

      <input
        type={type}
        {...rest}
        className="w-full py-2 outline-none border-b border-gray-100"
      />
    </fieldset>
  );
}
