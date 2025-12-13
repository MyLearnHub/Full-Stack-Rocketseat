import { Button } from "./Button";

type Props = React.ComponentProps<"input"> & {
  legend: string;
  alert?: string;
  help?: string;
  updatePassword?: () => void;
};

export function Input({
  updatePassword,
  legend,
  alert,
  type = "text",
  help,
  ...rest
}: Props) {
  return (
    <fieldset className="text-gray-200 focus-within:text-blue-100 relative">
      <legend className="uppercase text-xxs font-bold text-inherit">
        {legend}
      </legend>

      <input
        type={type}
        {...rest}
        className={`w-full py-2 outline-none border-b text-md text-gray-300 border-gray-100 focus:border-blue-100 placeholder-gray-400 ${
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

      {updatePassword && (
        <div className="flex absolute right-0 bottom-2">
          <Button
            variant="secondary"
            className="text-gray-300 py-[5.5px] px-2"
            onClick={updatePassword}
          >
            Alterar
          </Button>
        </div>
      )}
    </fieldset>
  );
}
