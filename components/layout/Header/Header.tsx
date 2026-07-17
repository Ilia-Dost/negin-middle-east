"use client";
import Link from "next/link";
import Logo from "@/components/layout/Header/components/Logo";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
export default function Header() {
  return (
    <>
      <div className="flex w-full h-[100px] bg-white/45 rounded-xl ">
        <div className="w-[20%] h-[100px] lg:hidden">
          <div className="w-[95%] h-[40px] mt-7 mr-2 sm:mr-6 ">
            <Navigation></Navigation>
          </div>
        </div>

        <div className=" w-[50%] h-[30px] mt-8 lg:hidden">
          <p className="text-2xl font-bold mr-7 sm:mr-16 md:mr-20 ">{"نگین خاورمیانه"}</p>
        </div>
        <div className="w-[70%] h-[100px] hidden lg:flex">
          <Menu></Menu>
        </div>
        <div className="w-[30%] h-[80px] mt-2.5  ">
          <Logo></Logo>
        </div>
      </div>
    </>

  );
}