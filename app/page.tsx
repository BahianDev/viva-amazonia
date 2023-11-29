import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex max-h-screen">
      <div className="flex flex-col	 bg-primary min-h-screen min-w-[34%] pl-80px pt-80px pb-80px rounded-r-3xl justify-between relative">
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
      <div className="flex flex-col bg-white min-h-screen flex-1 pl-[100px] py-[70px] overflow-y-scroll">
        <span className="text-primary text-[73px] font-semibold">
          Faça Login
        </span>
        <span className="text-primary text-[20px] font-semibold mt-[125px]">
          Seu CPF
        </span>
        <input className="w-[80%] min-h-[73px] max-w-[90%]  border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none" />
        <span className="text-primary text-[20px] font-semibold mt-[60px]">
          Senha
        </span>
        <input className="w-[80%] min-h-[73px] max-w-[90%]  border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none" />
        <span className="cursor-pointer text-secondary text-[13px] font-medium underline decoration-2">
          Esqueci minha sennha
        </span>
        <Link  href={'/dashboard'} className="max-w-[197px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[120px]">
          Faça seu Login
        </Link>
        <div className="flex flex-col justify-center items-center">
          <button className="max-w-[230px] pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-primary text-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-[100px]">
            Faça seu Cadastro
          </button>
        </div>
      </div>
    </main>
  );
}
