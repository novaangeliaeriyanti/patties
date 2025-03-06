"use client"
import Menu from "@/assets/menu.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Close from "@/assets/close.png"
import { useTranslation } from "@/translations/provider";
import { twMerge } from "tailwind-merge";

export const Header = () => {
  const { translations, changeLanguage, lang } = useTranslation();
  const [open, setOpen] = useState(false)
  const [choose, setChoose] = useState(false)

  const onClickMenu = () => {
      setOpen(!open)
  }

  const onClickChooseLang = () => {
    setChoose(!choose)
  }

  const onChooseLang = (lang:string) => {
    onClickChooseLang()
    changeLanguage(lang)
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
        <motion.div 
          className="flex justify-between items-center p-6 lg:px-20"
          initial={{y:"-100%", opacity:0}}
          animate={{y:"0%", opacity:1}}
          transition={{duration:0.8}}
        >
            <div className="font-bold text-3xl md:text-5xl lg:text-7xl">{translations.greeting}</div>
            <motion.div 
              className="flex px-2 bg-[#F9F7B9] border-4 border-black rounded-3xl gap-3 items-center lg:border-[6px]"
              initial={{opacity:0, scale:0.8}}
              whileInView={{
                opacity:1,
                scale: [0, 1.3, 1],
                transition:{
                  delay:0.8,
                  duration:0.5
                }
              }}
              
            >
                <Menu className="h-10 w-10 md:hidden lg:hidden" onClick={()=>onClickMenu()}/>
                <div className="text-2xl hidden p-3 md:block lg:block lg:text-4xl">
                  <a href='#shop' className="mr-8">Shop</a>
                  <a href='#footer' className="mr-8">Store</a>
                  <button className="relative" onClick={() => onClickChooseLang()}>EN</button>
                  {choose && (
                    <div className="absolute right-0 mt-2 bg-[#F9F7B9] border-4 border-black rounded-3xl lg:border-[6px] shadow-lg">
                      <div className="flex flex-col gap-2">
                        <button disabled={lang === 'en'} onClick={()=>{lang === 'in' && onChooseLang('en')}} className={twMerge("lg:text-2xl px-4 py-2",lang === 'en' && "text-gray-500 hover:none", lang !== 'en' && "hover:text-blue-500")}>ENGLISH</button>
                        <button disabled={lang === 'in'} onClick={()=>{lang === 'en' && onChooseLang('in')}} className={twMerge("lg:text-2xl px-4 py-2",lang === 'in' && "text-gray-500 hover:none", lang !== 'in' && "hover:text-blue-500")}>INDONESIA</button>
                      </div>
                  </div>
                  )}
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
                      {lang === 'in' && <button onClick={() => {changeLanguage('en'); onClickMenu()}}>EN</button>}
                      {lang === 'en' && <button onClick={() => {changeLanguage('in'); onClickMenu()}}>IN</button>}
                    </nav>
                  </motion.div>
                )}
            </motion.div>  
        </motion.div>
    </header>
  );
};
