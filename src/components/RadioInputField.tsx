import { Controller, FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  name: string;
  error?: FieldError;
  control: any;
};

const RadioInputField = ({ label, name, error, control }: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/2">
      <label className="text-xs text-gray-500">{label}</label>
      <div className="flex space-x-4">
        <Controller
          control={control}
          name={name}
          defaultValue={false}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              {/* Sim (Yes) Radio */}
              <label className="flex items-center">
                <input
                  type="radio"
                  onBlur={onBlur} 
                  onChange={() => onChange(true)}
                  checked={value === true}
                  value="true"
                  className="h-3 w-3"
                />
                <span className="text-primary text-xs font-medium ml-2">
                  Sim
                </span>
              </label>

              {/* Não (No) Radio */}
              <label className="flex items-center">
                <input
                  type="radio"
                  onBlur={onBlur} 
                  onChange={() => onChange(false)}
                  checked={value === false}
                  value="false"
                  className="h-3 w-3"
                />
                <span className="text-primary text-xs font-medium ml-2">
                  Não
                </span>
              </label>
            </>
          )}
        />
      </div>
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default RadioInputField;
