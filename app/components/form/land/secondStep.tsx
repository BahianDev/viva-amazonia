import { useFormState } from "@/app/contexts/FormContext";
import { useForm } from "react-hook-form";

type TFormValues = {
  areaSize: number;
  plantingDate: string;
  varietiesUsed: string;
  fertilizersUsed: boolean;
  pesticidesUsed: boolean;
};

export function SecondStep() {
  const { onHandleNext, setFormEnvironmental, onHandleBack, formData } = useFormState();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm<TFormValues>();

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormEnvironmental((prev: any) => ({ ...prev, ...{localization: 'null'} }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3 max-w-2xl"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-primary font-semibold text-7xl">Passo 02</h1>
      <span className="text-[#B8BCBC] text-sm font-normal">
        Regularização fundiária: Vamos conhecer um pouco da sua propriedade
      </span>

      <label className="text-primary text-[21px] font-semibold">
        Indique sua Localização
      </label>

      <div className="bg-primary w-full md:w-2/3 h-56 rounded-2xl bg-map">

      </div>

      <span className="text-primary text-lg font-semibold">Toque em ‘’permitir’’ para raestrearmos sua localização</span>

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
