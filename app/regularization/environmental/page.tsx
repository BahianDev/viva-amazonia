"use client";

import Image from "next/image";
import { Success } from "../../components/form/environmental/success";

import { useFormState } from "../../contexts/FormContext";
import { FirstStep } from "@/app/components/form/environmental/firstStep";
import { SecondStep } from "@/app/components/form/environmental/secondStep";

function ActiveStepFormComponent() {
  const { step } = useFormState();
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <Success />;
    default:
      return null;
  }
}

export default function Land() {
  return (
    <main className="flex max-h-screen">
      <div className="hidden md:flex  flex-col justify-between h-screen bg-primary md:overflow-hidden overflow-auto md:hover:overflow-auto px-6 py-6">
        <Image src={"/logo.svg"} alt="logo" width={62} height={62} />
        <span className="text-secondary text-6xl font-semibold mt-[12px]">
          Ambiental
        </span>
      </div>
      <div className="flex bg-white flex-col min-h-screen flex-1 px-6 py-6 overflow-y-scroll">
        <ActiveStepFormComponent />
      </div>
    </main>
  );
}
