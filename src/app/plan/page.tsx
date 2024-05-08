"use client";
import Image from "next/image";
import { useFormState } from "../contexts/FormContext";
import Sidebar from "../../components/sidebar";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export default function Plan() {
  const { activeMenu, screenSize, setScreenSize, setActiveMenu } =
    useFormState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (Number(screenSize) <= 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const { data: isEnvironmental, isLoading } = useQuery({
    queryKey: ["environmental-list"],
    queryFn: (): Promise<any[]> =>
      api.get(`environmental`).then((response) => response.data),
    refetchOnWindowFocus: false,
  });

  const { data: productions, isLoading: isLoadingProductions } = useQuery({
    queryKey: ["production-list"],
    queryFn: (): Promise<any[]> =>
      api.get(`production`).then((response) => response.data),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="flex relative">
      {activeMenu ? (
        <div className="w-80 fixed sidebar bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 bg-white">
          <Sidebar />
        </div>
      )}
      {isEnvironmental && isEnvironmental.length > 0 ? (
        <div
          className={`bg-[#F9F9F9] min-h-screen w-full px-6 py-6 ${
            activeMenu ? "md:ml-80" : "flex-2"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className="flex md:hidden rounded-full text-4xl"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            >
              <AiOutlineMenu />
            </span>
            <span className="text-primary text-xl md:text-4xl font-semibold text-center">
              Plano Produtivo da Propriedade
            </span>
            <Image
              src={"/avatar.png"}
              width={64}
              height={64}
              alt="avatar"
              className="w-[64px] h-[64px]"
            />
          </div>

          {/*Culture types */}
          <div className="w-full bg-gray h-[1px] mt-10" />
          <div className="flex gap-2 mt-3 mb-3">
            {!isLoadingProductions &&
              productions &&
              productions.map((production, index) => (
                <>
                  <span>{production.type}</span>
                </>
              ))}
          </div>
          <div className="w-full bg-gray h-[1px]" />

          {/*Culture types Ends */}

          {/*Land Name */}
          <div className="flex items-center gap-4 mt-2">
            <span className="text-secondary font-bold text-5xl md:text-7xl">
              Sítio São Matheus
            </span>
            <Image
              src={"/edit.svg"}
              width={24}
              height={24}
              alt="edit"
              className="w-6 h-6"
            />
          </div>
          {/*Land Name Ends */}

          {/*Info Cards */}
          <div className="flex gap-4 flex-wrap items-center justify-center md:justify-start mt-5">
            <div className="flex flex-col bg-[#75B83B] w-96 h-72 gap-4 rounded-md px-6 py-7 justify-between">
              <span className="text-primary text-lg">Culturas Registradas</span>
              <div className="flex  items-end justify-between">
                {!isLoadingProductions && productions && (
                  <span className="text-white text-9xl font-medium">
                    {productions.length}
                  </span>
                )}
                <Link
                  href={"/"}
                  className="bg-white rounded-xl hover:scale-105 mb-3"
                >
                  <Image
                    src={"/arrow-up-right.svg"}
                    alt="arrow"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col bg-primary w-96 h-72 gap-4 rounded-md px-6 py-7 justify-between">
              <span className="text-secondary text-lg">
                Lotes ou sacas Colhidas
              </span>
              <div className="flex  items-end justify-between">
                <span className="text-white text-9xl font-medium">0</span>
                <Link
                  href={"/"}
                  className="bg-white rounded-xl hover:scale-105 mb-3"
                >
                  <Image
                    src={"/arrow-up-right.svg"}
                    alt="arrow"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col bg-[#75B83B] w-96 h-72 gap-4 rounded-md px-6 py-7 justify-between">
              <span className="text-primary text-lg">Agropecuária</span>
              <div className="flex  items-end justify-between">
                <span className="text-white text-9xl font-medium">0</span>
                <Link
                  href={"/"}
                  className="bg-white rounded-xl hover:scale-105 mb-3"
                >
                  <Image
                    src={"/arrow-up-right.svg"}
                    alt="arrow"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/*Info Cards Ends*/}

          {/*Progresso SISPITA */}
          <div className="flex max-w-4xl flex-col gap-4 bg-white py-9 px-11  border border-[#9ED3CE] mt-14">
            <span className="text-primary text-lg font-semibold">
              Progresso SISPITA
            </span>
            <div className="flex gap-16 flex-col md:flex-row">
              <div className="flex md:flex-col justify-between">
                <span className="text-blackTransparent text-sm font-semibold">
                  2023
                </span>
                <span className="text-blackTransparent text-sm font-semibold">
                  2024
                </span>
                <span className="text-blackTransparent text-sm font-semibold">
                  2025
                </span>
                <span className="text-blackTransparent text-sm font-semibold">
                  2026
                </span>
                <span className="text-blackTransparent text-sm font-semibold">
                  2027
                </span>
              </div>
              <div className="flex items-end gap-4 md:gap-8">
                <div className="flex flex-col">
                  <div className="w-8 md:w-20 h-8 bg-secondary"></div>
                  <div className="w-8 md:w-20 h-5 bg-blue"></div>
                  <div className="w-8 md:w-20 h-3 bg-primary"></div>
                </div>
                <div className="flex flex-col">
                  <div className="w-8 md:w-20 h-16 bg-secondary"></div>
                  <div className="w-8 md:w-20 h-10 bg-blue"></div>
                  <div className="w-8 md:w-20 h-8 bg-primary"></div>
                </div>
                <div className="flex flex-col">
                  <div className="w-8 md:w-20 h-28 bg-secondary"></div>
                  <div className="w-8 md:w-20 h-16 bg-blue"></div>
                  <div className="w-8 md:w-20 h-12 bg-primary"></div>
                </div>
                <div className="flex flex-col">
                  <div className="w-8 md:w-20 h-20 bg-secondary"></div>
                  <div className="w-8 md:w-20 h-14 bg-blue"></div>
                  <div className="w-8 md:w-20 h-9 bg-primary"></div>
                </div>
                <div className="flex flex-col">
                  <div className="w-8 md:w-20 h-36 bg-secondary"></div>
                  <div className="w-8 md:w-20 h-20 bg-blue"></div>
                  <div className="w-8 md:w-20 h-14 bg-primary"></div>
                </div>
              </div>
            </div>
          </div>

          {/*Progresso SISPITA Ends*/}

          {/* SISPITA Checklits */}
          <div className="flex max-w-4xl items-center flex-col md:flex-row gap-4 bg-white py-9 px-11 justify-between border border-[#9ED3CE] mt-14">
            <span className="text-primary font-semibold text-3xl">
              Edite o seu plano de produção
            </span>
            <Link
              href={"/production-plan"}
              className="bg-secondary px-9 py-3 rounded"
            >
              Adcionar
            </Link>
          </div>
          {/* SISPITA Checklits Ends*/}

          {/* SISPITA Checklits */}
          <div className="flex max-w-4xl items-center flex-col md:flex-row gap-4 bg-white py-9 px-11 justify-between border border-[#9ED3CE] mt-14">
            <span className="text-primary font-semibold text-3xl">
              Faça o Checklist para o seu SISPITA
            </span>
            <button className="bg-secondary px-9 py-3 rounded">
              Continuar
            </button>
          </div>
          {/* SISPITA Checklits Ends*/}
        </div>
      ) : (
        <div
          className={`bg-[#F9F9F9] min-h-screen w-full px-6 py-6 ${
            activeMenu ? "md:ml-80" : "flex-2"
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className="flex md:hidden rounded-full text-4xl"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            >
              <AiOutlineMenu />
            </span>
            <span className="text-primary text-xl md:text-4xl font-semibold text-center">
              Plano Produtivo da Propriedade
            </span>
            <Image
              src={"/avatar.png"}
              width={64}
              height={64}
              alt="avatar"
              className="w-[64px] h-[64px]"
            />
          </div>
          <div className="flex flex-col w-full h-full items-center justify-center gap-5">
            <img src="/padlock.svg" className="h-44" alt="padlock icon" />
            <span className="text-5xl text-primary font-bold">
              Plano Produtivo Bloqueado
            </span>
            <span className="text-[#B8BCBC] text-xl">
              Necessário a conclusão do cadastro ambiental
            </span>
            <Link
              href={"/regularization/environmental"}
              className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] bg-secondary text-3zl text-center font-semibold rounded-xl hover:scale-105"
            >
              Continue seu Cadastro
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
