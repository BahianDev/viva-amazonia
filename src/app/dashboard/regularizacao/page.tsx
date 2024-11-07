"use client";
import { LuTreePine } from "react-icons/lu";
import { GiFarmer } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex flex-wrap gap-4 py-6">
        <div className="flex flex-col items-center justify-center bg-lamaSky w-96 h-72 gap-4 rounded-md relative">
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
            href={"/dashboard/regularizacao/ambiental"}
            className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] text-primary bg-lamaSkyLight text-[15px] font-semibold rounded-xl hover:scale-105 mt-[15px]"
          >
            Continuar
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center bg-lamaSky w-96 h-72 gap-4 rounded-md relative">
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
            href={"/dashboard/regularizacao/fundiaria"}
            className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] text-secondary bg-lamaPurpleLight text-[15px] font-semibold rounded-xl hover:scale-105 mt-[15px]"
          >
            Continuar
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center bg-lamaSky w-96 h-72 gap-4 rounded-md relative">
          <div className="absolute flex bg-secondary text-primary rounded-full w-12 h-12 right-3 top-3 items-center justify-center font-semibold">
            100%
          </div>
          <span className="text-secondary text-5xl">
            <MdOutlineHealthAndSafety />
          </span>
          <span className="text-secondary text-2xl font-semibold">
            Regularização Sanitária
          </span>
          <Link
            href={"/dashboard/regularizacao/sanitaria"}
            className="pt-[8px] pb-[8px] pl-[22px] pr-[22px] text-primary bg-lamaPurpleLight text-[15px] font-semibold rounded-xl hover:scale-105 mt-[15px]"
          >
            Continuar
          </Link>
        </div>
      </div>
    </div>
  );
}
