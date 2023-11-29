"use client";

import Image from "next/image";
import { CultureForm } from "../components/form/culture";
import { ProductionCycleForm } from "../components/form/productionCycle";
import { ProductionCycleFinalForm } from "../components/form/productionCycleFinal";
import { Success } from "../components/form/success";

import { useFormState } from "../contexts/FormContext";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <CultureForm />;
    case 2:
      return <ProductionCycleForm />;
    case 3:
      return <ProductionCycleFinalForm />;
    case 4:
      return <Success />;
    default:
      return null;
  }
}

export default function ProductionPlan() {
  return (
    <main className="flex max-h-screen">
      <div className="flex flex-col	 bg-primary min-h-screen min-w-[20%] p-80px rounded-r-3xl relative">
        <Image src={"/logo.svg"} alt="logo" width={62} height={62} />
        <span className="text-secondary text-6xl font-semibold mt-[12px]">
          Culturas
        </span>
      </div>
      <div className="flex flex-col min-h-screen flex-1 pl-[100px] py-[70px] overflow-y-scroll">
        <ActiveStepFormComponent />
      </div>
    </main>
  );
}
