import { useFormState } from "@/app/contexts/FormContext";
import { useForm } from "react-hook-form";

type TFormValues = {
  hasCAFDAP: boolean;
  CAFDAPDocument: string;
  hasSIGEFRegistration: boolean;
  SIGEFRegistrationDocument: string;
  hasRealEstateRegistry: boolean;
  hasSIGEFTopographicData: boolean;
  hiredTopographicProfessional: boolean;
};

export function FirstStep() {
  const { onHandleNext, setFormLand } = useFormState();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TFormValues>({defaultValues: {CAFDAPDocument: ''}});

  const hasCAFDAP = watch("hasCAFDAP");
  const hasSIGEFRegistration = watch('hasSIGEFRegistration')

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormLand((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3 max-w-2xl"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-primary font-semibold text-7xl">Passo 01</h1>
      <span className="text-[#B8BCBC] text-sm font-normal">
        Regularização fundiária: Vamos conhecer um pouco da sua propriedade
      </span>
      {/* Area Size Input */}
      <label className="text-primary text-[21px] font-semibold">
        Você tem CAF/DAP ?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("hasCAFDAP", {
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
            {...register("hasCAFDAP", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {String(hasCAFDAP) === "true" && (
        <input
          placeholder="Documento de comprovação"
          type="string"
          {...register("CAFDAPDocument")}
          className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
        />
      )}
      {errors.hasCAFDAP && (
        <p className="text-red-500">{errors.hasCAFDAP.message}</p>
      )}

      {/* Planting Date Input */}
      <label className="text-primary text-[21px] font-semibold">
        Você possui cadastro no SIGEF ?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("hasSIGEFRegistration", {
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
            {...register("hasSIGEFRegistration", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {String(hasSIGEFRegistration) === "true" && (
        <input
          placeholder="Documento de comprovação"
          type="string"
          {...register("SIGEFRegistrationDocument")}
          className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
        />
      )}
      {errors.hasSIGEFRegistration && (
        <p className="text-red-500">{errors.hasSIGEFRegistration.message}</p>
      )}

      {/* Fertilizers Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Você verificou se existe registro em cartório de imóveis para o lote?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("hasRealEstateRegistry", {
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
            {...register("hasRealEstateRegistry", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.hasRealEstateRegistry && (
        <p className="text-red-500">{errors.hasRealEstateRegistry.message}</p>
      )}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        A propriedade possui base topográfica no SIGEF?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("hasSIGEFTopographicData", {
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
            {...register("hasSIGEFTopographicData", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.hasSIGEFTopographicData && (
        <p className="text-red-500">{errors.hasSIGEFTopographicData.message}</p>
      )}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Caso não haja base topográfica no SIGEF, você contratou um profissional
        para fazer o levantamento topográfico?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("hiredTopographicProfessional", {
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
            {...register("hiredTopographicProfessional", {
              required: "Please select pesticides usage",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.hiredTopographicProfessional && (
        <p className="text-red-500">{errors.hiredTopographicProfessional.message}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="max-w-[197px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105"
      >
        Próximo Passo
      </button>
    </form>
  );
}
