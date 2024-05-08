"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

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

    if (!res?.error) {
      router.push("http://localhost:3000");
    }
  };

  return (
    <div className="flex max-h-screen w-full">
      <div className="hidden md:flex flex-col px-6 py-6 bg-blue w-2/4 items-center">
        <Image
          src={"/logo.svg"}
          className="self-start"
          alt="logo"
          width={62}
          height={62}
        />

        <div className="flex flex-col gap-5 text-center max-w-lg mt-36 items-center">
          <h1 className="text-white font-bold text-5xl">Bem vindo de volta!</h1>
          <span className="text-white text-lg font-light">
            Mantenha-se conectado conosco. Por favor, faça o login usando suas
            credenciais
          </span>
          <Link href={'/signin'} className="w-1/2 h-14 pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-transparent border border-white text-white text-[15px] font-semibold rounded-xl hover:scale-105 mt-10">
            Login
          </Link>
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col bg-white min-h-screen overflow-y-scroll w-full items-center justify-center gap-10"
      >
        <span className="text-primary text-6xl font-semibold">Criar Conta</span>

        <div className="flex flex-col w-full items-center gap-5 max-w-md p-2">
          <input
            placeholder="Nome"
            onChange={(e) => (userName.current = e.target.value)}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => (userName.current = e.target.value)}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="CPF"
            onChange={(e) => (userName.current = e.target.value)}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="Senha"
            type="password"
            onChange={(e) => (pass.current = e.target.value)}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="Confirmar senha"
            type="password"
            onChange={(e) => (pass.current = e.target.value)}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          
          <button
            type="submit"
            className="w-full h-14 py-4 px-10 bg-secondary text-[15px] font-semibold rounded-xl hover:scale-105 mt-10"
          >
            Criar Conta
          </button>
        </div>
      </form>
    </div>
  );
}
