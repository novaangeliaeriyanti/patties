"use client"
import Menu from "@/assets/menu.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Close from "@/assets/close.png"
import { useTranslation } from "@/translations/provider";
import { twMerge } from "tailwind-merge";
import MayoPatties from "@/assets/mayo-patties.png"
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
          className="flex bg-red text-mayo justify-between items-center p-3 lg:px-20"
          initial={{y:"-100%", opacity:0}}
          animate={{y:"0%", opacity:1}}
          transition={{duration:0.8}}
        >
            {/* <div className="font-bold text-2xl md:text-xl lg:text-4xl">{translations.greeting}</div> */}
            <Image src={MayoPatties} alt='Mayo Patties Icon' className='w-32'/>
            <motion.div 
              className="flex px-2 bg-red border-4 border-mayo rounded-3xl gap-2 items-center lg:border-[4px]"
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
                <div className="text-xl font-bold hidden p-3 md:block lg:block lg:text-xl">
                  <a href='#shop' className="mr-8">Shop</a>
                  <a href='#footer' className="mr-8">Store</a>
                  <button className="relative uppercase" onClick={() => onClickChooseLang()}>{lang}</button>
                  {choose && (
                    <motion.div 
                      className="absolute right-0 mt-2 bg-red text-mayo border-4 border-mayo rounded-3xl lg:border-[4px] shadow-lg"
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex flex-col items-start">
                        <button disabled={lang === 'en'} onClick={()=>{lang === 'in' && onChooseLang('en')}} className={twMerge("lg:text-xl px-4 pt-1",lang === 'en' && "text-brown hover:none", lang !== 'en' && "hover:text-mayo/60")}>ENGLISH</button>
                        <button disabled={lang === 'in'} onClick={()=>{lang === 'en' && onChooseLang('in')}} className={twMerge("lg:text-xl px-4 py-1",lang === 'in' && "text-brown hover:none", lang !== 'in' && "hover:text-mayo/60")}>INDONESIA</button>
                      </div>
                  </motion.div>
                  )}
                </div>
                {open && (
                  <motion.div 
                    className="sm:absolute top-0 left-0 w-full h-screen bg-red p-4 bg-opacity-90"
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
