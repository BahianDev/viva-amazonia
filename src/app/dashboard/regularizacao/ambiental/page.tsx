"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boolean, z } from "zod";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import { comoCompensarOptions } from "@/lib/data";
import RadioInputField from "@/components/RadioInputField";

const schema = z.object({
  possuiCar: z.boolean(),
  carComp: z.string().optional(),
  possuiReservaLegal: z.boolean(),
  reservaLegalRegularizada: z.boolean(),
  reservaLegalRegularizadaComp: z.string().optional(),
  desejaRegReservaLegal: z.boolean(),
  excedenteVegNatReservaLegal: boolean(),
  comoCompensar: z.string(),
});

type Inputs = z.infer<typeof schema>;

const RegularizacaoAmbientalForm = () => {
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

  const possuiCar = watch("possuiCar");
  const possuiReservaLegalRegularizada = watch("reservaLegalRegularizada");

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
        label="Você já possui cadastro no Cadastro Ambiental Rural (CAR)?"
        name="possuiCar"
        error={errors?.possuiCar}
      />

      {String(possuiCar) === "true" && (
        <InputField
          label="Nº de inscrição"
          name="carComp"
          defaultValue={data?.carComp}
          register={register}
          error={errors?.carComp}
        />
      )}

      <RadioInputField
        control={control}
        label="Sua propriedade possui área de Reserva Legal?"
        name="possuiReservaLegal"
        error={errors?.possuiReservaLegal}
      />

      <RadioInputField
        control={control}
        label="A Reserva Legal está regularizada?"
        name="reservaLegalRegularizada"
        error={errors?.reservaLegalRegularizada}
      />

      {String(possuiReservaLegalRegularizada) === "true" && (
        <InputField
          label="Nº de inscrição"
          name="reservaLegalRegularizadaComp"
          defaultValue={data?.reservaLegalRegularizadaComp}
          register={register}
          error={errors?.reservaLegalRegularizadaComp}
        />
      )}

      <RadioInputField
        control={control}
        label="Deseja regularizar a Reserva Legal?"
        name="desejaRegReservaLegal"
        error={errors?.desejaRegReservaLegal}
      />

      <RadioInputField
        control={control}
        label="Há excedente de vegetação nativa na propriedade para compensação da Reserva Legal?"
        name="excedenteVegNatReservaLegal"
        error={errors?.excedenteVegNatReservaLegal}
      />

      <SelectField
        options={comoCompensarOptions}
        label="Como deseja realizar essa compensação?"
        name="comoCompensar"
        defaultValue={data?.comoCompensar}
        register={register}
        error={errors?.comoCompensar}
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

export default RegularizacaoAmbientalForm;
