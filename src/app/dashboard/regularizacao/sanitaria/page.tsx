"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/components/InputField";
import RadioInputField from "@/components/RadioInputField";

const schema = z.object({
  licenca: z.boolean(),
  licencaComp: z.string().optional(),
  produtosAgricolas: z.string(),
  controleDePragas: z.boolean(),
  usaProdutosQuimicos: z.boolean(),
  armazenamentoProdutos: z.string(),
  tratamentoResiduoAgricolas: z.boolean(),
});

type Inputs = z.infer<typeof schema>;

const RegularizacaoSanitariaForm = () => {
  let data: any;
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const possuiLicenca = watch("licenca");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className="bg-white p-4 rounded-md flex-1 m-4 mt-0 flex flex-col gap-2"
      onSubmit={onSubmit}
    >
      <RadioInputField
        control={control}
        label="Você possui licença sanitária?"
        name="licenca"
        error={errors?.licenca}
      />

      {String(possuiLicenca) === "true" && (
        <InputField
          label="Nº de inscrição"
          name="licencaComp"
          defaultValue={data?.licencaComp}
          register={register}
          error={errors?.licencaComp}
        />
      )}
      <InputField
        label="Quais produtos agrícolas você cultiva e comercializa?"
        name="produtosAgricolas"
        defaultValue={data?.produtosAgricolas}
        register={register}
        error={errors?.produtosAgricolas}
      />

      <RadioInputField
        control={control}
        label="Você realiza o controle de pragas e doenças em sua propriedade?"
        name="controleDePragas"
        error={errors?.controleDePragas}
      />

      <RadioInputField
        control={control}
        label="Você utiliza produtos quimicos como pesticidas ou fertilizantes?"
        name="usaProdutosQuimicos"
        error={errors?.usaProdutosQuimicos}
      />

      <InputField
        label="Como você armazena seus produtos antes da comercialização?"
        name="armazenamentoProdutos"
        defaultValue={data?.armazenamentoProdutos}
        register={register}
        error={errors?.armazenamentoProdutos}
      />

      <RadioInputField
        control={control}
        label="Existe algum sistema de tratamento ou destinação adequada dos resíduos agrícolas na sua propriedade?"
        name="tratamentoResiduoAgricolas"
        error={errors?.tratamentoResiduoAgricolas}
      />

      <button
        type="submit"
        className="w-48 p-2 bg-limeGreen mt-5 text-lg font-semibold rounded-xl hover:scale-105"
      >
        Enviar
      </button>
    </form>
  );
};

export default RegularizacaoSanitariaForm;
