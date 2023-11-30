import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex max-h-screen">
      <div className="hidden md:flex  flex-col justify-between h-screen bg-primary md:overflow-hidden overflow-auto md:hover:overflow-auto px-6 py-6">
        <Image src={"/logo.svg"} alt="logo" width={62} height={62} />
        <div className="flex flex-col">
          <span className="text-white text-6xl font-semibold max-w-[400px]">
            Comece sua Jornada Aqui
          </span>
          <span className="text-apoiosea text-[26px] text-left font-normal max-w-[327px] mt-[35px]">
            Descubra como sua propriedade pode crescer
          </span>
        </div>
        <button className="w-[290px] h-[65px] bg-secondary rounded-xl hover:scale-105">
          Fale Conosco
        </button>
      </div>
      <div className="flex flex-col bg-white min-h-screen flex-1 px-6 py-6 overflow-y-scroll">
        <span className="text-primary text-6xl font-semibold">
          Faça Login
        </span>
        <span className="text-primary text-[20px] font-semibold mt-[125px]">
          Seu CPF
        </span>
        <input className=" min-h-[73px] md:max-w-[90%] border-primary  border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none" />
        <span className="text-primary text-[20px] font-semibold mt-[60px]">
          Senha
        </span>
        <input className="min-h-[73px] md:max-w-[90%] border-primary border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none" />
        <span className="cursor-pointer text-secondary text-[13px] font-medium underline decoration-2 mt-8">
          Esqueci minha sennha
        </span>
        <Link  href={'/dashboard'} className="w-[197px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-20">
          Faça seu Login
        </Link>
        <div className="flex flex-col justify-center items-center">
          <button className="max-w-[230px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-primary text-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-20">
            Faça seu Cadastro
          </button>
        </div>
      </div>
    </div>
  );
}
