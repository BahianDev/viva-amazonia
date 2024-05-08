import { useFormState } from "@/src/app/contexts/FormContext";
import { api } from "@/src/app/services/api";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type TFormValues = {
  areaSize: number;
  plantingDate: string;
  varietiesUsed: string;
  fertilizersUsed: boolean;
  pesticidesUsed: boolean;
};

export function ProductionCycleFinalForm() {
  const { onHandleNext, formData } = useFormState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormValues>();

  const onHandleFormSubmit = async (data: TFormValues) => {
    toast.loading("Enviando...");

    const body = { ...formData, ...data };
    const request = {
      type: body.cultureType,
      cycle: body.productionCycle,
      sizePlantedArea: Number(body.areaSize),
      datePlantedArea: new Date(body.plantingDate),
    };

    await api.post("production", request)

    toast.dismiss();
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      {/* Area Size Input */}
      <label className="text-primary text-2xl font-semibold">
        Tamanho de área plantada
      </label>
      <input
        type="number"
        {...register("areaSize", { required: "Area size is required" })}
        className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
      />
      {errors.areaSize && (
        <p className="text-red-500">{errors.areaSize.message}</p>
      )}

      {/* Planting Date Input */}
      <label className="text-primary text-[21px] font-semibold">
        Data de Plantio
      </label>
      <input
        type="date"
        {...register("plantingDate", { required: "Planting date is required" })}
        className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
      />
      {errors.plantingDate && (
        <p className="text-red-500">{errors.plantingDate.message}</p>
      )}

      {/* Varieties Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Variedades Utilizadas
      </label>
      <input
        type="text"
        {...register("varietiesUsed", {
          required: "Varieties used is required",
        })}
        className="max-w-[412px] h-[51px] border border-[#D6D8D8] rounded-[16px] px-2"
      />
      {errors.varietiesUsed && (
        <p className="text-red-500">{errors.varietiesUsed.message}</p>
      )}

      {/* Fertilizers Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Uso de fertilizantes
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("fertilizersUsed", {
              required: "Please select fertilizers usage",
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
            {...register("fertilizersUsed", {
              required: "Please select fertilizers usage",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.fertilizersUsed && (
        <p className="text-red-500">{errors.fertilizersUsed.message}</p>
      )}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Uso de pesticidas
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("pesticidesUsed", {
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
            {...register("pesticidesUsed", {
              required: "Please select pesticides usage",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.pesticidesUsed && (
        <p className="text-red-500">{errors.pesticidesUsed.message}</p>
      )}

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
