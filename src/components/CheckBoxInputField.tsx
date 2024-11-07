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
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const CheckBoxInputField = ({
  label,
  options,
  register,
  name,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs text-gray-500">{label}</label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {options.map((opt, index) => (
          <label key={index} className="p-2 flex rounded-md text-sm w-full gap-2">
            <input
              type="checkbox"
              className=""
              value={opt.value}
              {...register(name, { required: true })}
            />
            {opt.value}
          </label>
        ))}
      </div>

      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default CheckBoxInputField;
