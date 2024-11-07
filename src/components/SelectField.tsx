import { FieldError } from "react-hook-form";

interface SelectOption {
  value: string;
  label: string;
}

type InputFieldProps = {
  label: string;
  options: SelectOption[];
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const SelectField = ({
  label,
  options,
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/2">
      <label className="text-xs text-gray-500">{label}</label>
      <select
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      >
        <option value="">Selecionar...</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default SelectField;
