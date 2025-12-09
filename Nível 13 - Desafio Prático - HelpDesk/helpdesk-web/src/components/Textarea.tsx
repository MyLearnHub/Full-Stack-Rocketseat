type Props = React.ComponentProps<"textarea"> & {
  legend: string;
  alert?: string;
  help?: string;
};

export function Textarea({ legend, alert, help, ...rest }: Props) {
  return (
    <fieldset className="text-gray-200 focus-within:text-blue-100 relative">
      <legend className="uppercase text-xxs font-bold text-inherit">
        {legend}
      </legend>

      <textarea
        {...rest}
        className={`w-full py-2 outline-none border-b text-md text-gray-300 border-gray-100 focus:border-blue-100 placeholder-gray-400 h-[154px] resize-none ${
          help ? "pl-7" : ""
        }`}
      />

      {alert && (
        <span className="mt-1.5 text-xs italic text-gray-400">{alert}</span>
      )}

      {help && (
        <span className="bottom-[9px] text-md absolute left-0 text-gray-300">
          {help}
        </span>
      )}
    </fieldset>
  );
}
