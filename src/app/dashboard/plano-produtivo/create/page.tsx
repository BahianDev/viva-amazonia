"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import {
  cicloProducaoOptios,
  especiesMudasFlorestaisOptions,
  especiesMudasFrutiferasOptions,
  tipoAreaOptions,
} from "@/lib/data";
import CheckBoxInputField from "@/components/CheckBoxInputField";

const schema = z.object({
  endereco: z.string(),
  tipoDeArea: z.string(),
  dataInicioPlantio: z.date(),
  usaFertilizantes: z.boolean(),
  usaPesticidas: z.boolean(),
  hectare: z.number(),
  linhas: z.number(),
  espacamento: z.number(),
  quantMudasFlorestais: z.number(),
  quantMudasFrutiferas: z.number(),
  calcario: z.number(),
  adulboOrganico: z.number(),
  especiesMudasFlorestais: z.string(),
  especiesMudasFrutiferas: z.string(),
  especiesMudasFlorestaisOutro: z.string().optional(),
  especiesMudasFrutiferasOutro: z.string().optional(),
  clicloProducao: z.string(),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const mudaFlorestalSelecionada = watch("especiesMudasFlorestais");
  const mudaFrutiferaSelecionada = watch("especiesMudasFrutiferas");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className="bg-white p-4 rounded-md flex-1 m-4 mt-0 flex flex-col gap-2"
      onSubmit={onSubmit}
    >
      <InputField
        label="Endereço"
        name="endereco"
        defaultValue={data?.endereco}
        register={register}
        error={errors?.endereco}
      />
      <SelectField
        options={tipoAreaOptions}
        label="Tipo de Área"
        name="tipoDeArea"
        defaultValue={data?.tipoDeArea}
        register={register}
        error={errors?.tipoDeArea}
      />
      <InputField
        label="Data de Início do Plantio"
        name="dataInicioPlantio"
        defaultValue={data?.dataInicioPlantio}
        register={register}
        error={errors?.dataInicioPlantio}
        type="date"
      />

      <label className="text-xs text-gray-500">Uso de Fertilizantes?</label>
      <div className="flex space-x-4">
        <Controller
          control={control}
          name="usaFertilizantes"
          defaultValue={false}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              {/* Sim (Yes) Radio */}
              <label className="flex items-center">
                <input
                  type="radio"
                  onBlur={onBlur} // notify when input is touched
                  onChange={() => onChange(true)}
                  checked={value === true}
                  value="true"
                  className="h-3 w-3"
                />
                <span className="text-primary text-xs font-medium ml-2">
                  Sim
                </span>
              </label>

              {/* Não (No) Radio */}
              <label className="flex items-center">
                <input
                  type="radio"
                  onBlur={onBlur} // notify when input is touched
                  onChange={() => onChange(false)} // send value to hook form
                  checked={value === false}
                  value="false"
                  className="h-3 w-3"
                />
                <span className="text-primary text-xs font-medium ml-2">
                  Não
                </span>
              </label>
            </>
          )}
        />
      </div>
      {errors.usaFertilizantes && (
        <p className="text-red-500">{errors.usaFertilizantes?.message}</p>
      )}

      <label className="text-xs text-gray-500">Uso de Pesticidas?</label>
      <div className="flex space-x-4">
        <Controller
          control={control}
          name="usaPesticidas"
          defaultValue={false}
          rules={{ required: false }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <>
              {/* Sim (Yes) Radio */}
              <label className="flex items-center">
                <input
                  type="radio"
                  onBlur={onBlur} // notify when input is touched
                  onChange={() => onChange(true)}
                  checked={value === true}
                  value="true"
                  className="h-3 w-3"
                />
                <span className="text-primary text-xs font-medium ml-2">
                  Sim
                </span>
              </label>

              {/* Não (No) Radio */}
              <label className="flex items-center">
                <input
                  type="radio"
                  onBlur={onBlur} // notify when input is touched
                  onChange={() => onChange(false)} // send value to hook form
                  checked={value === false}
                  value="false"
                  className="h-3 w-3"
                />
                <span className="text-primary text-xs font-medium ml-2">
                  Não
                </span>
              </label>
            </>
          )}
        />
      </div>
      {errors.usaPesticidas && (
        <p className="text-red-500">{errors.usaPesticidas?.message}</p>
      )}

      <InputField
        label="Hectare da propriedade"
        name="hectare"
        defaultValue={data?.hectare}
        register={register}
        error={errors?.hectare}
        type="number"
      />
      <InputField
        label="Linhas da propriedade"
        name="linhas"
        defaultValue={data?.linhas}
        register={register}
        error={errors?.linhas}
        type="number"
      />
      <InputField
        label="Espaçamento da propriedade"
        name="espacamento"
        defaultValue={data?.espacamento}
        register={register}
        error={errors?.espacamento}
        type="number"
      />
      <InputField
        label="Quantidade de Mudas Florestais"
        name="quantMudasFlorestais"
        defaultValue={data?.quantMudasFlorestais}
        register={register}
        error={errors?.quantMudasFlorestais}
        type="number"
      />
      <InputField
        label="Quantidade de Mudas Frutíferas"
        name="quantMudasFrutiferas"
        defaultValue={data?.quantMudasFrutiferas}
        register={register}
        error={errors?.quantMudasFrutiferas}
        type="number"
      />
      <InputField
        label="Calcário (50 kg)"
        name="calcario"
        defaultValue={data?.calcario}
        register={register}
        error={errors?.calcario}
        type="number"
      />
      <InputField
        label="Adulbo Orgânico (50kg)"
        name="adulboOrganico"
        defaultValue={data?.adulboOrganico}
        register={register}
        error={errors?.adulboOrganico}
        type="number"
      />

      <CheckBoxInputField
        options={especiesMudasFlorestaisOptions}
        label="Espécies de Mudas Florestais"
        name="especiesMudasFlorestais"
        register={register}
        error={errors?.especiesMudasFlorestais}
      />
      <CheckBoxInputField
        options={especiesMudasFrutiferasOptions}
        label="Espécies de Mudas Frutíferas"
        name="especiesMudasFrutiferas"
        register={register}
        error={errors?.especiesMudasFrutiferas}
      />

      {mudaFlorestalSelecionada &&
        mudaFlorestalSelecionada.includes("Outro") && (
          <>
            <InputField
              label="Digite o nome da espécie"
              name="especiesMudasFlorestaisOutro"
              defaultValue={data?.especiesMudasFlorestaisOutro}
              register={register}
              error={errors?.especiesMudasFlorestaisOutro}
            />
          </>
        )}

      {mudaFrutiferaSelecionada &&
        mudaFrutiferaSelecionada.includes("Outro") && (
          <>
            <InputField
              label="Digite o nome da espécie"
              name="especiesMudasFrutiferasOutro"
              defaultValue={data?.especiesMudasFrutiferasOutro}
              register={register}
              error={errors?.especiesMudasFrutiferasOutro}
            />
          </>
        )}

      <SelectField
        options={cicloProducaoOptios}
        label="Ciclo de Produção"
        name="clicloProducao"
        defaultValue={data?.clicloProducao}
        register={register}
        error={errors?.clicloProducao}
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

export default TeacherForm;
