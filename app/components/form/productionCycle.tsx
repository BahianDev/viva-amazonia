import { useFormState } from "@/app/contexts/FormContext";
import { useForm, Controller } from "react-hook-form";

type TFormValues = {
  productionCycle: string;
};

export function ProductionCycleForm() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TFormValues>();

  const onHandleFormSubmit = (data: TFormValues) => {
    // Handle form submission logic here
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <label className="flex flex-col text-primary text-[30px] font-semibold">
        Informe o ciclo de produção
      </label>

      {/* Radio Options */}
      <div>
        <label className="flex">
          <Controller
            name="productionCycle"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  value="Anual"
                  type="radio"
                  className="h-6 w-6"
                />
              </>
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Anual
          </span>
        </label>
      </div>
      <div>
        <label>
          <Controller
            name="productionCycle"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value="Bianual"
                type="radio"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Bianual
          </span>
        </label>
      </div>
      <div>
        <label>
          <Controller
            name="productionCycle"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value="Semestral"
                type="radio"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Semestral
          </span>
        </label>
      </div>
      <div>
        <label>
          <Controller
            name="productionCycle"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value="Bimestral"
                type="radio"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Bimestral
          </span>
        </label>
      </div>

      {errors.productionCycle && (
        <p className="text-red-500">{errors.productionCycle.message}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="max-w-[197px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[120px]"
      >
        Próximo Passo
      </button>
    </form>
  );
}
