import { useFormState } from "@/src/app/contexts/FormContext";
import Image from "next/image";
import Link from "next/link";

export function Success() {
  return (
    <div className="flex gap-1 flex-col space-y-3 items-center">
      <div className="flex items-center justify-center w-[307px] h-[307px] bg-secondary rounded-full">
        <Image
          src={"/check.svg"}
          width={166}
          height={166}
          className="w-[166px] h-[166px]"
          alt="check"
        />
      </div>
      <span className="text-primary font-semibold text-6xl text-center">
        Parabéns, você cadastrou sua propriedade
      </span>
      <Link href={'/dashboard'}>
      <button className="pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[120px]">
        Ir para Plano Produtivo
      </button>
      </Link>
    </div>
  );
}
