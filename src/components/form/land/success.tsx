import Image from "next/image";
import Link from "next/link";

export function Success() {
  return (
    <div className="flex gap-1 flex-col items-center justify-between">
      <div className="flex items-center justify-center">
        <Image
          src={"/logo_dark.svg"}
          alt="logo"
          width={62}
          height={62}
          priority
        />
      </div>
      <div className="flex flex-col w-full items-center">
        <span className="text-primary font-semibold text-6xl text-center max-w-lg mt-20 md:leading-tight">
          Sua propriedade está sendo preparada
        </span>
        <span className="text-[#BEBFBF] text-2xl text-center max-w-2xl mt-2">
          Você sabia que através da plataforma, pode registrar suas culturas e
          saber em que ciclo deve-se retirar
        </span>
        <div className="h-3 min-w-full bg-loading mt-9"></div>
      </div>
      <Link
        href={"/dashboard"}
        className="pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[120px]"
      >
        Baixar Registro
      </Link>
    </div>
  );
}
