"use client"
import Menu from "@/assets/menu.svg"
import Image from "next/image";

export const Header = () => {
  return (
    <header 
      className='fixed z-50 w-full h-14'
    >
        <div className="flex justify-between items-center p-6">
            <div className="font-bold text-3xl">WELCOME</div>
            <div className="flex px-2  bg-[#F9F7B9] border-4 border-black rounded-3xl gap-3 items-center">
                <Menu className="h-10 w-10" />
            </div>  
        </div>
    </header>
  );
};
