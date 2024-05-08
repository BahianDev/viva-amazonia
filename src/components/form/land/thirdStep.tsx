import { useFormState } from "@/src/app/contexts/FormContext";
import { useForm } from "react-hook-form";

type TFormValues = {
  checkedSIGEFRegistration: number;
  obtainedCCIR: boolean;
  CCIRDocument: string;
  agreeIntegration: boolean;
  agreeTermsOfService: boolean;
};

export function ThirdStep() {
  const { onHandleNext, setFormLand } = useFormState();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TFormValues>({ defaultValues: { CCIRDocument: "" } });

  const obtainedCCIR = watch("obtainedCCIR");

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormLand((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3 max-w-2xl"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-primary font-semibold text-7xl">Passo 03</h1>
      <span className="text-[#B8BCBC] text-sm font-normal">
        Regularização fundiária: Vamos conhecer um pouco da sua propriedade
      </span>
      {/* Fertilizers Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Você já verificou se a propriedade está registrada no SIGEF?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("checkedSIGEFRegistration", {
              required: "Please select a option",
            })}
            value="true"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Sim</span>
        </label>

        {/* Não (No) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("checkedSIGEFRegistration", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.checkedSIGEFRegistration && (
        <p className="text-red-500">
          {errors.checkedSIGEFRegistration.message}
        </p>
      )}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Você obteve o CCIR no SNCR do INCRA?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("obtainedCCIR", {
              required: "Please select pesticides usage",
            })}
            value="true"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Sim</span>
        </label>

        {/* Não (No) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("obtainedCCIR", {
              required: "Please select pesticides usage",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {String(obtainedCCIR) === "true" && (
        <input
          placeholder="Documento de comprovação"
          type="string"
          {...register("CCIRDocument")}
          className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
        />
      )}
      {errors.obtainedCCIR && (
        <p className="text-red-500">{errors.obtainedCCIR.message}</p>
      )}

      <label className="flex items-center">
        <input
          type="radio"
          {...register("agreeIntegration", {
            required: "Please select a option",
          })}
          value="true"
          className="h-6 w-6"
        />
        <span className="text-secondary text-sm font-medium ml-2">
          Você concorda em disponibilizar esses dados para fins de integração...
        </span>
      </label>

      <label className="flex items-center">
        <input
          type="radio"
          {...register("agreeTermsOfService", {
            required: "Please select a option",
          })}
          value="true"
          className="h-6 w-6"
        />
        <span className="text-secondary text-sm font-medium ml-2">
          Concorda com os termos e Serviços da plataforma
        </span>
      </label>
      {/* Submit Button */}
      <button
        type="submit"
        className="max-w-[197px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105"
      >
        Enviar
      </button>
    </form>
  );
}
