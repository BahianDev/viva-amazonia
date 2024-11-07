"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/dashboard/home",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Plano Produtivo",
        href: "/dashboard/plano-produtivo",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Regularização",
        href: "/dashboard/regularizacao",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Benefícios",
        href: "/dashboard/beneficios",
        visible: ["admin", "teacher"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname(); // Obter a rota atual

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes("admin")) {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md ${
                    isActive
                      ? "bg-lamaSkyLight font-semibold"
                      : "text-gray-500"
                  } hover:bg-lamaSkyLight`}
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => signOut()}
          className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight mt-1"
        >
          <Image src={"/logout.png"} alt="" width={20} height={20} />
          <span className="hidden lg:block">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Menu;
