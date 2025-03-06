"use client"
import Menu from "@/assets/menu.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Close from "@/assets/close.png"
import { useTranslation } from "@/translations/provider";

export const Header = () => {
  const { translations, changeLanguage, lang } = useTranslation();
  const [open, setOpen] = useState(false)

  const onClickMenu = () => {
      setOpen(!open)
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <header className='fixed z-50 w-full h-14'>
        <div className="flex justify-between items-center p-6 lg:px-20">
            <div className="font-bold text-3xl md:text-5xl lg:text-7xl">{translations.greeting}</div>
            <div className="flex px-2 bg-[#F9F7B9] border-4 border-black rounded-3xl gap-3 items-center lg:border-[6px]">
                <Menu className="h-10 w-10 md:hidden lg:hidden" onClick={()=>onClickMenu()}/>
                <div className="text-2xl hidden p-3 md:block lg:block lg:text-4xl">
                  <a href='#shop' className="mr-8">Shop</a>
                  <a href='#footer' className="mr-8">Store</a>
                  <button className="mr-8" onClick={() => changeLanguage('en')}>EN</button>
                  <button className="mr-8" onClick={() => changeLanguage('in')}>IN</button>
                </div>
                {open && (
                  <motion.div 
                    className="sm:absolute top-0 left-0 w-full h-screen bg-[#F9F7B9] p-4 bg-opacity-90"
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className='flex justify-end'>
                      <Image src={Close} alt='Close Icon' className='h-10 w-10' onClick={()=>onClickMenu()}/>
                    </div>       
                    <nav className="flex flex-col gap-4 justify-center items-center text-center font-bold text-xl md:text-2xl lg:text-3xl">
                      <a href="#shop" onClick={()=>onClickMenu()}>Shop</a>
                      <a href="#footer" onClick={()=>onClickMenu()}>Store</a>
                    </nav>
                  </motion.div>
                )}
            </div>  
        </div>
    </header>
  );
};
