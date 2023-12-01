import { useFormState } from "@/app/contexts/FormContext";
import { useForm } from "react-hook-form";

type TFormValues = {
  hasSurplusNativeVegetation: boolean;
  compensationMethod: string;
  agreeIntegration: boolean;
  agreeTermsOfService: boolean;
};

export function SecondStep() {
  const { onHandleNext, setFormEnvironmental } = useFormState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TFormValues>();

  const onHandleFormSubmit = async (data: TFormValues) => {
    setFormEnvironmental((prev: any) => ({ ...prev, ...data }));
    onHandleNext();
  };

  return (
    <form
      className="flex gap-1 flex-col space-y-3 max-w-2xl"
      onSubmit={handleSubmit(onHandleFormSubmit)}
    >
      <h1 className="text-primary font-semibold text-7xl">Passo 02</h1>
      <span className="text-[#B8BCBC] text-sm font-normal">
        Regularização ambiental: Vamos detalhar sua propriedade
      </span>
      {/* Fertilizers Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Há excedente de vegetação nativa na propriedade para compensação da
        Reserva Legal?
      </label>
      <div className="flex space-x-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("hasSurplusNativeVegetation", {
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
            {...register("hasSurplusNativeVegetation", {
              required: "Please select a option",
            })}
            value="false"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">Não</span>
        </label>
      </div>
      {errors.hasSurplusNativeVegetation && (
        <p className="text-red-500">{errors.hasSurplusNativeVegetation.message}</p>
      )}

      {/* Pesticides Used Input */}
      <label className="text-primary text-[21px] font-semibold">
        Como deseja realizar essa compensação?
      </label>
      <div className="flex flex-col gap-4">
        {/* Sim (Yes) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("compensationMethod", {
              required: "Please select a option",
            })}
            value="1"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Aquisição de Cota de Reserva Ambiental (CRA)
          </span>
        </label>

        {/* Não (No) Radio */}
        <label className="flex items-center">
          <input
            type="radio"
            {...register("compensationMethod", {
              required: "Please select a option",
            })}
            value="2"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Arrendamento de área sob servidão ambiental ou reserva legal
          </span>
        </label>

        <label className="flex items-center">
          <input
            type="radio"
            {...register("compensationMethod", {
              required: "Please select a option",
            })}
            value="3"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Doação ao poder público de área pendente de regularização fundiária
          </span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            {...register("compensationMethod", {
              required: "Please select a option",
            })}
            value="4"
            className="h-6 w-6"
          />
          <span className="text-primary text-[18px] font-medium ml-2">
            Cadastramento de outra área equivalente e excedente à Reserva Legal
          </span>
        </label>
      </div>
      {errors.compensationMethod && (
        <p className="text-red-500">{errors.compensationMethod.message}</p>
      )}

      <div className="flex gap-4">
        <button className="px-4 py-4 border border-[#9ED3CE] rounded-lg">
          Saiba Mais
        </button>
        <button className="px-4 py-4 border border-[#9ED3CE] rounded-lg">
          Baixar Conteúdo
        </button>
      </div>

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
