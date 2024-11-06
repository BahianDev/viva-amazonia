"use client";
import Image from "next/image";
import Link from "next/link";
import { beneficiosData } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";
import TipoAreaChart from "@/components/TipoAreaChart";


const HomePage = () => {
  const { data: info } = useQuery({
    queryKey: ["files-list"],
    queryFn: (): Promise<any> =>
      api.get(`plano-produtivo/info/dash`).then((response) => response.data),
    refetchOnWindowFocus: false,
    initialData: [],
  });

  const data = [
    { name: "Group A", value: 92, fill: "#C3EBFA" },
    { name: "Group B", value: 8, fill: "#FAE27C" },
  ];

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex flex-col md:flex-row max-w-7xl justify-between items-center p-5 rounded-2xl border-2 gap-5 bg-white  mt-6">
        <Image
          src={"/circle.svg"}
          width={51}
          height={51}
          alt="circle"
          className="w-[51px] h-[51px]"
        />
        <span className="text-primary text-sm md:text-lg font-bold text-center md:text-left">
          Faltam 60% do seu cadastro ser concluído para ter acesso a mais
          benefícios
        </span>
        <Link
          href={"/plano-produtivo"}
          className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] bg-limeGreen text-sm md:text-lg text-center font-semibold rounded-xl hover:scale-105"
        >
          Continue seu Cadastro
        </Link>
      </div>

      <div className="flex flex-col mt-8">
        <div className="flex gap-2 items-center">
          <Image
            src={"/benefits.svg"}
            alt="benefits"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-lg font-medium">Seus Benefícios</span>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap mt-3 gap-8">
          {beneficiosData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col w-96 bg-white rounded-2xl justify-between border-2 p-5 gap-1"
            >
              <div className="w-24 h-24 bg-midGray rounded-2xl p-5">
                <div className="w-full h-full rounded-full border-2 border-white" />
              </div>
              <span className="text-gray-500 text-lg">{item.title}</span>
              <p className="text-gray-400 text-sm">{item.description}</p>
              <button className="p-2 bg-midGray text-sm text-gray-200 font-semibold rounded-xl hover:scale-105 mt-4">
                Conclua Seu Cadastro
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Image
                src={"/plan.svg"}
                alt="benefits"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-lg text-primary font-medium">
                Plano Produtivo
              </span>
            </div>
            <div className="bg-white  gap-3 flex flex-col p-5 rounded-2xl mt-3 border-2">
              <span className="text-lg text-primary font-medium">Produção</span>
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <span>Total Hectares: {info?.quantTotalHectares} </span>
                  <span>
                    Total Mudas Florestais: {info?.quantTotalMudasFlorestais}
                  </span>
                  <span>
                    Total Mudas Frutíferas: {info?.quantTotalMudasFrutiferas}
                  </span>
                </div>
              </div>
              <TipoAreaChart />

              <button className="p-2 bg-midGray text-sm text-gray-200 font-semibold rounded-xl hover:scale-105 mt-4">
                Ver mais
              </button>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-lg text-primary font-medium">
                Regularizações
              </span>
            </div>
            <div className="bg-white gap-3 flex flex-col p-5 rounded-2xl mt-3 border-2">
              <Image
                src={"/graph.svg"}
                width={144}
                height={144}
                className="w-36 h-36"
                alt="grah"
              />
              <span className="text-lg text-primary font-medium">
                Regularizações
              </span>
              <div className="flex items-center gap-20 justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-limeGreen">
                    Fundiária
                  </span>
                  <div className="rounded-full h-6 w-6 ml-[12px] bg-lamaSky text-[6px] flex items-center justify-center">
                    100%
                  </div>
                </div>
                <span className="text-primary text-sm font-medium">
                  Status: Concluído
                </span>
              </div>
              <div className="flex items-center gap-20 justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-limeGreen">
                    Ambiental
                  </span>
                  <div className="rounded-full h-6 w-6 ml-[12px] bg-lamaSky text-[6px] flex items-center justify-center">
                    100%
                  </div>
                </div>
                <span className="text-primary text-sm font-medium">
                  Status: Concluído
                </span>
              </div>
              <div className="flex items-center gap-20 justify-between">
                <div className="flex items-center">
                  <span className="text-sm font-semibold text-limeGreen">
                    Sanitária
                  </span>
                  <div className="rounded-full h-6 w-6 ml-[12px] bg-lamaSky text-[6px] flex items-center justify-center">
                    100%
                  </div>
                </div>
                <span className="text-primary text-sm font-medium">
                  Status: Concluído
                </span>
              </div>
              <button className="p-2 bg-midGray text-sm text-gray-200 font-semibold rounded-xl hover:scale-105 mt-9">
                Salvar em PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
