"use client"
import Menu from "@/assets/menu.svg"
import Image from "next/image";

export const Header = () => {
  return (
    <header 
      className='fixed z-50 w-full h-14'
    >
        <div className="flex justify-between items-center p-6 lg:px-14">
            <div className="font-bold text-3xl lg:text-5xl">WELCOME</div>
            <div className="flex px-2  bg-[#F9F7B9] border-4 border-black rounded-3xl gap-3 items-center">
                <Menu className="h-10 w-10 md:hidden lg:hidden " />
                <div className="text-2xl hidden p-3 md:block lg:block lg:text-4xl">
                  <span className="mr-8">Shop</span>
                  <span>Store</span>
                </div>
            </div>  
        </div>
    </header>
  );
};
