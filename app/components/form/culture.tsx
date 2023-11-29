import { useFormState } from "@/app/contexts/FormContext";
import { useForm, Controller } from "react-hook-form";

type TFormValues = {
  cultureType: string;
};

export function CultureForm() {
  const { onHandleNext, setFormData, onHandleBack, formData } = useFormState();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: formData,
  });

  const onHandleFormSubmit = (data: TFormValues) => {
    console.log("Seleção:", data.cultureType);
    setFormData((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <label className="flex flex-col text-primary text-[30px] font-semibold">
        Selecione o tipo de cultura a ser registrada:
      </label>

      <div>
        <label className="flex">
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="radio"
                  value="Carbono"
                  className="h-6 w-6"
                />
              </>
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Carbono
          </span>
        </label>
      </div>
      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Orgânico"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Orgânico
          </span>
        </label>
      </div>
      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Guaraná"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Guaraná
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Cupuaçu"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Cupuaçu
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input {...field} type="radio" value="Açaí" className="h-6 w-6" />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Açaí
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Buriti"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Buriti
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Cacau Silvestre"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Cacau Silvestre
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Murmuru"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Murmuru
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Seringueira"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Seringueira
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Tucumã"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Tucumã
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Andibora"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Andibora
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Patauá"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Patauá
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Carbono"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Carbono
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Orgânico"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Orgânico
          </span>
        </label>
      </div>

      <div>
        <label>
          <Controller
            name="cultureType"
            rules={{ required: "Este campo é obrigatório" }}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="radio"
                value="Produto madeireiro para movelaria"
                className="h-6 w-6"
              />
            )}
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Produto madeireiro para movelaria
          </span>
        </label>
      </div>

      {errors.cultureType && (
        <p className="text-red-500">{errors.cultureType.message}</p>
      )}

      <button
        type="submit"
        className="max-w-[197px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[120px]"
      >
        Próximo Passo
      </button>
    </form>
  );
}
