'use client'

import React, { useState } from "react";
import Image from "next/image";
import { useFormState } from "../app/contexts/FormContext";
import { IoIosClose } from "react-icons/io";
import { RiGovernmentLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const Sidebar = () => {
  const pathname = usePathname()

  const { activeMenu, setActiveMenu } = useFormState();

  const [pageActive, setPageActive] = useState(pathname);
  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto px-6 py-6">
      {activeMenu && (
        <>
          <div className="flex justify-between">
            <Image
              src={"/logo_dark.svg"}
              alt="logo"
              width={62}
              height={62}
              priority
            />
            <button
              type="button"
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className="text-5xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
            >
              <IoIosClose />
            </button>
          </div>
          <div className="flex flex-col gap-[50px] mt-[100px]">
            <Link
              href={"/dashboard"}
              onClick={() => setPageActive("dashboard")}
              className={`flex items-center cursor-pointer ${pageActive === '/dashboard' && 'gap-2'}`}
            >
              { pageActive === '/dashboard' && <div className="bg-secondary h-10 w-2 rounded-lg" />}
              <Image
                src={"/dashboard.svg"}
                alt="dashboard icon"
                width={24}
                height={24}
                priority
              />
              <span className="text-primary text-[24px] font-semibold ml-[14px]">
                Dashboard
              </span>
            </Link>
            <Link
              href={"/plan"}
              className={`flex items-center cursor-pointer ${pageActive === '/plan' && 'gap-2'}`}
            >
              { pageActive === '/plan' && <div className="bg-secondary h-10 w-2 rounded-lg" />}

              <Image
                src={"/plan.svg"}
                alt="dashboard icon"
                width={24}
                height={24}
                priority
              />
              <span className="text-primary text-[24px] font-semibold ml-[14px]">
                Plano Produtivo
              </span>
            </Link>
            <Link
              href={"/regularization"}
              className={`flex items-center cursor-pointer ${pageActive === '/regularization' && 'gap-2'}`}
            >
              { pageActive === '/regularization' && <div className="bg-secondary h-10 w-2 rounded-lg" />}

              <span className="text-primary text-3xl">
                <RiGovernmentLine />
              </span>
              <span className="text-primary text-[24px] font-semibold ml-[14px]">
                Regularização
              </span>
            </Link>
            <div className="flex items-center cursor-pointer">
              <Image
                src={"/benefits.svg"}
                alt="dashboard icon"
                width={24}
                height={24}
                priority
              />
              <span className="text-primary text-[24px] font-semibold ml-[14px]">
                Seus benefícios
              </span>
            </div>

            <div className="flex items-center cursor-pointer">
              <Image
                src={"/settings.svg"}
                alt="dashboard icon"
                width={24}
                height={24}
                priority
              />
              <span className="text-primary text-[24px] font-semibold ml-[14px]">
                Configurações
              </span>
            </div>
          </div>
          <button className="max-w-[197px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[120px]">
            Fale Conosco
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
