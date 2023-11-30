"use client";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "../contexts/FormContext";
import { formatHash } from "../utils/formatHash";
import Sidebar from "../components/sidebar";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Dashboard() {
  const { formData, activeMenu, screenSize, setScreenSize, setActiveMenu } =
    useFormState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Your client-side code that uses window goes here
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (Number(screenSize) <= 960) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
      <div className="flex relative">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg bg-green-300">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full p-2 ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="flex  items-center justify-between">
            <span
              className="rounded-full text-4xl"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            >
              <AiOutlineMenu />
            </span>
            <span className="text-[#75B83B] text-5xl font-semibold">
              Bem Vindo
            </span>
            <Image
              src={"/avatar.png"}
              width={64}
              height={64}
              alt="avatar"
              className="w-[64px] h-[64px]"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center px-[33px] py-[37px] rounded-[24px] border-apoioazulpistache border-[1px] gap-5 bg-white  mt-6">
            <Image
              src={"/circle.svg"}
              width={51}
              height={51}
              alt="circle"
              className="w-[51px] h-[51px]"
            />
            <span className="text-primary text-2xl font-bold text-center md:text-left">
              Faltam 60% do seu cadastro ser concluído para ter acesso a mais
              benefícios
            </span>
            <Link
              href={"/production-plan"}
              className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] bg-secondary text-sm text-center font-semibold rounded-xl hover:scale-105"
            >
              Continue seu Cadastro
            </Link>
          </div>

          <div className="flex flex-col mt-[35px]">
            <div className="flex items-center">
              <Image
                src={"/benefits.svg"}
                alt="benefits"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
              />
              <span className="ml-[8px] text-[30px] font-medium">
                Seus benefícios
              </span>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap mt-[10px] gap-[40px]">
              <div className="flex flex-col">
                <div className="bg-white rounded-[36px] border-[1px] border-[#C6E5DE] px-[30px] py-[37px]">
                  <div className="w-[91px] h-[91px] bg-[#818181] rounded-[18px]"></div>
                  <span className="text-[#8C8C8C] text-[23px]">
                    Benefícios X
                  </span>
                  <p className="text-[#B8BCBC] text-[13px]">
                    Benefícios XBenefícios XBenefícios XBenefícios XBenefícios
                    XBenefícios XBenefícios X
                  </p>
                  <button className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] bg-[#9E9E9E] text-[15px] text-[#818181] font-semibold rounded-xl hover:scale-105 mt-[16px]">
                    Conclua Seu Cadastro
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-white rounded-[36px] border-[1px] border-[#C6E5DE] px-[30px] py-[37px]">
                  <div className="w-[91px] h-[91px] bg-[#818181] rounded-[18px]"></div>
                  <span className="text-[#8C8C8C] text-[23px]">
                    Benefícios X
                  </span>
                  <p className="text-[#B8BCBC] text-[13px]">
                    Benefícios XBenefícios XBenefícios XBenefícios XBenefícios
                    XBenefícios XBenefícios X
                  </p>
                  <button className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] bg-[#9E9E9E] text-[15px] text-[#818181] font-semibold rounded-xl hover:scale-105 mt-[16px]">
                    Conclua Seu Cadastro
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="bg-white rounded-[36px] border-[1px] border-[#C6E5DE] px-[30px] py-[37px]">
                  <div className="w-[91px] h-[91px] bg-[#818181] rounded-[18px]"></div>
                  <span className="text-[#8C8C8C] text-[23px]">
                    Benefícios X
                  </span>
                  <p className="text-[#B8BCBC] text-[13px]">
                    Benefícios XBenefícios XBenefícios XBenefícios XBenefícios
                    XBenefícios XBenefícios X
                  </p>
                  <button className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] bg-[#9E9E9E] text-[15px] text-[#818181] font-semibold rounded-xl hover:scale-105 mt-[16px]">
                    Conclua Seu Cadastro
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-[36px]">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Image
                    src={"/plan.svg"}
                    alt="benefits"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px]"
                  />
                  <span className="ml-[8px] text-[30px] text-primary font-medium">
                    Plano Produtivo
                  </span>
                </div>
                <div className="bg-white gap-[10px] flex flex-col px-[58px] py-[33px] rounded-[36px] min-h-[500px] mt-[10px] border-[#9ED3CE] border-[1px]">
                  <span className="text-[20px] text-primary font-medium">
                    Produção
                  </span>
                  <div className="flex">
                    <span
                      className={`text-[100px] ${
                        formData ? "text-secondary" : "text-[#B8BCBC]"
                      }`}
                    >
                      {formData ? "100%" : "0%"}
                    </span>
                    <div className="flex">
                      <div
                        className={` ${
                          formData ? "hidden" : "flex"
                        } items-center`}
                      >
                        <Image
                          src={"/lock.svg"}
                          alt="benefits"
                          width={24}
                          height={24}
                          className="w-[24px] h-[24px]"
                        />
                        <span className="ml-[8px] text-[24px] font-medium">
                          Plano Produtivo bloqueado
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[20px] text-primary font-medium">
                      Culturas
                    </span>
                    {formData && formData.transactionHash && (
                      <Link
                        href={`https://mumbai.polygonscan.com/tx/${formData.transactionHash}`}
                        className="flex items-center gap-2"
                      >
                        <Image
                          src={"/polygon-matic-logo.svg"}
                          width={10}
                          height={10}
                          alt="polygon logo"
                          className="w-5 h-5"
                        />
                        <span className="text-lg text-primary font-semibold">
                          {formatHash(formData.transactionHash)}
                        </span>
                      </Link>
                    )}
                  </div>
                  <div className="border-[#9ED3CE] border-[1px] h-[56px]"></div>
                  <div className="border-[#9ED3CE] border-[1px] h-[56px]"></div>
                  <button className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] text-[#262626] bg-[#9E9E9E] text-[15px] font-semibold rounded-xl hover:scale-105">
                    Ver mais
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="ml-[8px] text-[30px] text-primary font-medium">
                    Regularizações
                  </span>
                </div>
                <div className="bg-white gap-[15px] flex flex-col px-[58px] py-[33px] rounded-[36px] min-h-[500px] mt-[10px] border-[#9ED3CE] border-[1px]">
                  <Image
                    src={"/graph.svg"}
                    width={167}
                    height={167}
                    className="w-[167px] h-[167px]"
                    alt="grah"
                  />
                  <span className="text-[14px] text-primary font-medium">
                    Regularizações
                  </span>
                  <Image
                    src={"/graph_line.svg"}
                    width={244}
                    height={7}
                    className="w-[244px] h-[7px]"
                    alt="grah"
                  />
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <span className="text-[14px] font-semibold text-[#75B83B]">
                        Fundiária
                      </span>
                      <div className="rounded-full h-[24px] w-[24px] ml-[12px] bg-[#C6E5DE] text-[6px] flex items-center justify-center">
                        100%
                      </div>
                    </div>
                    <span className="text-primary text-[6px] font-medium">
                      Status: Concluído
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <span className="text-[14px] font-semibold text-[#75B83B]">
                        Fundiária
                      </span>
                      <div className="rounded-full h-[24px] w-[24px] ml-[12px] bg-[#C6E5DE] text-[6px] flex items-center justify-center">
                        100%
                      </div>
                    </div>
                    <span className="text-primary text-[6px] font-medium">
                      Status: Concluído
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <span className="text-[14px] font-semibold text-[#75B83B]">
                        Fundiária
                      </span>
                      <div className="rounded-full h-[24px] w-[24px] ml-[12px] bg-[#C6E5DE] text-[6px] flex items-center justify-center">
                        100%
                      </div>
                    </div>
                    <span className="text-primary text-[6px] font-medium">
                      Status: Concluído
                    </span>
                  </div>
                  <button className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] text-[#262626] bg-[#9E9E9E] text-[15px] font-semibold rounded-xl hover:scale-105 mt-[15px]">
                    Salvar em PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
