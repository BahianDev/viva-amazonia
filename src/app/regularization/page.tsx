"use client";
import Image from "next/image";
import { useFormState } from "../contexts/FormContext";
import Sidebar from "../../components/sidebar";
import { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { LuTreePine } from "react-icons/lu";
import { GiFarmer } from "react-icons/gi";
import Link from "next/link";

export default function Dashboard() {
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
            Regularizaçao Ambiental e Fundiária
          </span>
          <Image
            src={"/avatar.png"}
            width={64}
            height={64}
            alt="avatar"
            className="w-[64px] h-[64px]"
          />
        </div>

        <div className="flex flex-wrap gap-4 py-6">
          <div className="flex flex-col items-center justify-center bg-primary w-96 h-72 gap-4 rounded-md relative">
            <div className="absolute flex bg-secondary text-primary rounded-full w-12 h-12 right-3 top-3 items-center justify-center font-semibold">
              0%
            </div>
            <span className="text-secondary text-5xl">
              <LuTreePine />
            </span>
            <span className="text-secondary text-2xl font-semibold">
              Regularização Ambiental
            </span>
            <Link
              href={"/regularization/environmental"}
              className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] text-primary bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[15px]"
            >
              Continuar
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center bg-secondary w-96 h-72 gap-4 rounded-md relative">
            <div className="absolute flex bg-primary text-secondary rounded-full w-12 h-12 right-3 top-3 items-center justify-center font-semibold">
              100%
            </div>
            <span className="text-primary text-5xl">
              <GiFarmer />
            </span>
            <span className="text-primary text-2xl font-semibold">
              Regularização Fundiária
            </span>
            <Link
              href={"/regularization/land"}
              className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] text-secondary bg-primary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[15px]"
            >
              Continuar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
