"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { api } from "../services/api";
import toast from "react-hot-toast";

type TFormValues = {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
};

export default function SignIn() {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: {
      name: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password: any = useRef(null);
  password.current = watch("password", "");

  const onHandleFormSubmit = async (data: TFormValues) => {
    try {
      await api.post("user/register", {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        password: data.password,
      });

      toast.success("Usuário criado com sucesso!");

      router.push("http://localhost:3000/");
    } catch (error) {
      return toast.error("Algo de errado aconteceu!");
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
          <Link
            href={"/sign-in"}
            className="w-1/2 h-14 pt-[15px] pb-[15px] pl-[40px] pr-[40px] bg-transparent border border-white text-white text-[15px] font-semibold rounded-xl hover:scale-105 mt-10"
          >
            Login
          </Link>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onHandleFormSubmit)}
        className="flex flex-col bg-white min-h-screen overflow-y-scroll w-full items-center justify-center gap-10"
      >
        <span className="text-primary text-6xl font-semibold">Criar Conta</span>

        <div className="flex flex-col w-full items-center gap-5 max-w-md p-2">
          <input
            placeholder="Nome"
            {...register("name", {
              required: "Por favor, insira seu nome",
            })}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="Email"
            {...register("email", {
              required: "Por favor, insira seu email",
            })}
            type="email"
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="CPF"
            {...register("cpf", {
              required: "Por favor, insira o cpf",
            })}
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="Senha"
            {...register("password", {
              required: "Por favor, insira a senha",
            })}
            type="password"
            className="h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none"
          />
          <input
            placeholder="Confirmar senha"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password.current || "As senhas não coincindem!",
            })}
            type="password"
            className={`h-14 w-full border-primary px-5 border-2 rounded-2xl focus:ring-secondary focus:ring-inset focus:ring-2 focus:shadow-secondary focus:border-secondary focus:outline-none`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}{" "}
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}{" "}
          {errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
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
