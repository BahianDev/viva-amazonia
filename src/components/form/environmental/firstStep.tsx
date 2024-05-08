import { useFormState } from "@/src/app/contexts/FormContext";
import { useForm } from "react-hook-form";

type TFormValues = {
  isCAR: boolean;
  CARcode: string;
  legalReserveArea: boolean;
  isLegalReserveRegularized: boolean;
  legalReserveRegularizedDocument: string;
  wantRegularizeLegalReserve: boolean;
};

export function FirstStep() {
  const { onHandleNext, setFormEnvironmental } = useFormState();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: { CARcode: "", legalReserveRegularizedDocument: "" },
  });

  const isCAR = watch("isCAR");
  const isLegalReserveRegularized = watch("isLegalReserveRegularized");

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormEnvironmental((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3 max-w-2xl"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-primary font-semibold text-7xl">Passo 01</h1>
      <span className="text-[#B8BCBC] text-sm font-normal">
        Regularização ambiental: Vamos detalhar sua propriedade
      </span>
      {/* CAR Input */}
      <label className="text-primary text-[21px] font-semibold">
        Você já possui cadastro no Cadastro Ambiental Rural (CAR)?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("isCAR", {
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
            {...register("isCAR", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {String(isCAR) === "true" && (
        <input
          placeholder="Nº de inscrição"
          type="string"
          {...register("CARcode")}
          className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
        />
      )}
      {errors.isCAR && <p className="text-red-500">{errors.isCAR.message}</p>}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Sua propriedade possui área de Reserva Legal?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("legalReserveArea", {
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
            {...register("legalReserveArea", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.legalReserveArea && (
        <p className="text-red-500">{errors.legalReserveArea.message}</p>
      )}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        A Reserva Legal está regularizada?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("isLegalReserveRegularized", {
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
            {...register("isLegalReserveRegularized", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {String(isLegalReserveRegularized) === "true" && (
        <input
          placeholder="Documento de comprovação"
          type="string"
          {...register("legalReserveRegularizedDocument")}
          className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
        />
      )}
      {errors.isLegalReserveRegularized && (
        <p className="text-red-500">
          {errors.isLegalReserveRegularized.message}
        </p>
      )}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Deseja regularizar a Reserva Legal?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("wantRegularizeLegalReserve", {
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
            {...register("wantRegularizeLegalReserve", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.wantRegularizeLegalReserve && (
        <p className="text-red-500">
          {errors.wantRegularizeLegalReserve.message}
        </p>
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
