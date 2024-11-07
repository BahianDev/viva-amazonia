"use client";

import Announcements from "@/components/Announcements";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import Performance from "@/components/Performance";
import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinglePlanoProdutivoPage = ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = React.use(params);

  const {
    data: planoProdutivo,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["raffle-id"],
    queryFn: (): Promise<any> =>
      api.get(`plano-produtivo/${id}`).then((response) => response.data),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">
                {planoProdutivo?.user.name}
              </h1>
              <p className="text-sm text-gray-500">
                {planoProdutivo?.endereco}
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>{planoProdutivo?.user.email}</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">
                  {planoProdutivo?.hectare}
                </h1>
                <span className="text-sm text-gray-400">Hectare</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">
                  {planoProdutivo?.linhas}
                </h1>
                <span className="text-sm text-gray-400">Linhas</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">
                  {planoProdutivo?.espacamento} m²
                </h1>
                <span className="text-sm text-gray-400">Espaçamento</span>
              </div>
            </div>
            {/* CARD */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">
                  {planoProdutivo?.tipoDeArea}
                </h1>
                <span className="text-sm text-gray-400">Tipo de Área</span>
              </div>
            </div>
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Área</h1>
          <GoogleMapComponent lat={planoProdutivo?.lat} lng={planoProdutivo?.lng}/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Produção</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <div className="p-3 rounded-md bg-lamaSkyLight">
              Fertilizantes: {planoProdutivo?.usaFertilizantes ? "Sim" : "Não"}
            </div>
            <div className="p-3 rounded-md bg-lamaPurpleLight">
              Pesticidas: {planoProdutivo?.usaPesticidas ? "Sim" : "Não"}
            </div>
            <div className="p-3 rounded-md bg-pink-50">
              Cliclo: {planoProdutivo?.clicloProducao}
            </div>
            <div className="p-3 rounded-md bg-lamaSkyLight">
              Calcário(50kg): {planoProdutivo?.calcario}
            </div>
            <div className="p-3 rounded-md bg-lamaYellowLight">
              Adulbo Orgânico(50kg): {planoProdutivo?.adulboOrganico}
            </div>
          </div>
        </div>
        <Announcements
          especiesMudasFlorestais={planoProdutivo?.especiesMudasFlorestais}
          especiesMudasFrutiferas={planoProdutivo?.especiesMudasFrutiferas}
        />
        <Performance />
      </div>
    </div>
  );
};

export default SinglePlanoProdutivoPage;
