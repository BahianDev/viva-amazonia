"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/components/InputField";
import RadioInputField from "@/components/RadioInputField";

const schema = z.object({
  possuiCafDap: z.boolean(),
  cafDapComp: z.string().optional(),
  possuiSigef: z.boolean(),
  sigefComp: z.string().optional(),
  registCartorioLote: z.boolean(),
  possuiBaseTopoSigef: z.boolean(),
  encontrouProfParaLevantamento: z.boolean(),
  localizacao: z.string(),
  ccirNoSncrDoIncra: z.boolean(),
  ccirNoSncrDoIncraComp: z.string().optional(),
});

type Inputs = z.infer<typeof schema>;

const RegularizacaoFundiariaForm = () => {
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

  const possuiCafDap = watch("possuiCafDap");
  const possuiSigef = watch("possuiSigef");
  const possuiCcirNoSncrDoIncra = watch("ccirNoSncrDoIncra");

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
        label=" Você tem CAF/DAP?"
        name="possuiCafDap"
        error={errors?.possuiCafDap}
      />

      {String(possuiCafDap) === "true" && (
        <InputField
          label="Nº de inscrição"
          name="cafDapComp"
          defaultValue={data?.cafDapComp}
          register={register}
          error={errors?.cafDapComp}
        />
      )}

      <RadioInputField
        control={control}
        label="Você possui cadastro no SIGEF?"
        name="possuiSigef"
        error={errors?.possuiSigef}
      />

      {String(possuiSigef) === "true" && (
        <InputField
          label="Nº de inscrição"
          name="sigefComp"
          defaultValue={data?.sigefComp}
          register={register}
          error={errors?.sigefComp}
        />
      )}

      <RadioInputField
        control={control}
        label="Você verificou se existe registro em cartório de imóveis para o lote?"
        name="registCartorioLote"
        error={errors?.registCartorioLote}
      />

      <RadioInputField
        control={control}
        label="A propriedade possui base topográfica no SIGEF?"
        name="possuiBaseTopoSigef"
        error={errors?.possuiBaseTopoSigef}
      />

      <RadioInputField
        control={control}
        label="Caso não haja base topográfica no SIGEF, você contratou um profissional para fazer o levantamento topográfico?"
        name="encontrouProfParaLevantamento"
        error={errors?.encontrouProfParaLevantamento}
      />

      <InputField
        label="Localização"
        name="localizacao"
        defaultValue={data?.localizacao}
        register={register}
        error={errors?.localizacao}
      />

      <RadioInputField
        control={control}
        label="Você obteve o CCIR no SNCR do INCRA?"
        name="ccirNoSncrDoIncra"
        error={errors?.ccirNoSncrDoIncra}
      />

      {String(possuiCcirNoSncrDoIncra) === "true" && (
        <InputField
          label="Nº de inscrição"
          name="ccirNoSncrDoIncraComp"
          defaultValue={data?.ccirNoSncrDoIncraComp}
          register={register}
          error={errors?.ccirNoSncrDoIncraComp}
        />
      )}

      <button
        type="submit"
        className="w-48 p-2 bg-limeGreen mt-5 text-lg font-semibold rounded-xl hover:scale-105"
      >
        Enviar
      </button>
    </form>
  );
};

export default RegularizacaoFundiariaForm;
