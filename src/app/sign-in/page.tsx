"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function SignIn() {
  const router = useRouter();
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });

    if (!res?.ok) {
      return toast.error("Email ou senha incorretos");
    }

    router.push("http://localhost:3000");
  };

  return (
    <div className="flex max-h-screen w-full">
      <div className="hidden md:flex flex-col px-6 py-6 bg-hero bg-cover bg-center w-3/4 items-center">
        <Image
          className="self-start"
          src={"/logo.svg"}
          alt="logo"
          width={62}
          height={62}
        />
        <div className="flex flex-col bg-blackTransparent rounded-lg p-2 mt-52 text-center items-center justify-center gap-10 max-w-lg">
          <span className="text-white text-4xl font-semibold">
            Comece sua Jornada Aqui
          </span>
          <span className="text-gray text-2xl font-normal">
            Descubra como sua propriedade pode crescer
          </span>
        </div>
        <button className="w-[290px] h-[65px] bg-secondary rounded-xl hover:scale-105 mt-20 font-bold">
          Fale Conosco
        </button>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col bg-white min-h-screen overflow-y-scroll w-full items-center justify-center gap-10"
      >
        <span className="text-primary text-6xl font-semibold">Faça Login</span>

        <div className="flex flex-col w-full items-center gap-5 max-w-lg p-2">
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => (userName.current = e.target.value)}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="Senha"
            type="password"
            onChange={(e) => (pass.current = e.target.value)}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <span className="cursor-pointer text-secondary text-[13px] self-start font-medium underline decoration-2">
            Esqueci minha sennha
          </span>
          <button
            type="submit"
            className="py-4 px-10 bg-secondary self-start text-[15px] font-semibold rounded-xl hover:scale-105"
          >
            Faça seu Login
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Link
            href={"/sign-up"}
            className="py-4 px-10 bg-primary text-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-10"
          >
            Faça seu Cadastro
          </Link>
        </div>
      </form>
    </div>
  );
}
