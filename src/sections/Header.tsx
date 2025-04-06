"use client"
import Menu from "@/assets/menu.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import Close from "@/assets/close.png"
import { useTranslation } from "@/translations/provider";
import { twMerge } from "tailwind-merge";
import MayoPatties from "@/assets/mayo-patties.png"
import America from "@/assets/america.png"
import French from "@/assets/prancis.png"
import { ChevronDown } from "lucide-react"

export const Header = () => {
  const { translations, changeLanguage, lang } = useTranslation();
  const [open, setOpen] = useState(false)
  const [choose, setChoose] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

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
    <header className={`fixed z-50 w-full h-14 transition-all duration-30`}>
        <motion.div 
          className={`flex justify-between items-center p-3 lg:px-20 ${isScrolled ? 'bg-red' : 'bg-transparent'} text-mayo`}
          initial={{y:"-100%", opacity:0}}
          animate={{y:"0%", opacity:1}}
          transition={{duration:0.8}}
        >
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
                  <a href='#menus' className="mr-8 hover:text-yellow transition-all duration-300 ease-in-out">Menu</a>
                  <button className="relative uppercase" onClick={() => onClickChooseLang()}>
                    <div className="flex flex-row gap-1 items-center hover:text-yellow transition-all duration-300 ease-in-out">
                      <Image src={lang === 'en' ? America : French} alt={lang} width={200} height={200} className="h-4 w-6 border-mayo border-[1px]" />
                      {lang}
                      <ChevronDown />
                    </div>                  
                  </button>
                  {choose && (
                    <motion.div 
                      className="absolute right-0 mt-2 bg-red text-mayo border-4 border-mayo rounded-3xl lg:border-[4px] shadow-lg"
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="flex flex-col items-start p-1">
                        <button disabled={lang === 'en'} onClick={()=>{lang === 'fren' && onChooseLang('en')}} className={twMerge("lg:text-xl px-4 pt-1",lang === 'en' && "text-brown hover:none", lang !== 'en' && "hover:text-yellow transition-all duration-300 ease-in-out")}>
                          <div className="flex flex-row gap-1 items-center">
                            <Image src={America} alt="America Flag" width={200} height={200} className="h-4 w-6 border-mayo border-[1px]" />
                            ENGLISH
                          </div>
                        </button>
                        <button disabled={lang === 'fren'} onClick={()=>{lang === 'en' && onChooseLang('fren')}} className={twMerge("lg:text-xl px-4 py-1",lang === 'fren' && "text-brown hover:none", lang !== 'fren' && "hover:text-yellow transition-all duration-300 ease-in-out")}>
                          <div className="flex flex-row gap-1 items-center">
                            <Image src={French} alt="French Flag" width={200} height={200} className="h-4 w-6 border-mayo border-[1px]" />
                            FRENCH
                          </div>
                        </button>
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
                      <a href="#menus" onClick={()=>onClickMenu()}>Menus</a>
                      {lang === 'fren' && (
                        <button onClick={() => {changeLanguage('en'); onClickMenu()}}>
                          <div className="flex flex-row gap-1 items-center">
                            <Image src={America} alt="America Flag" width={200} height={200} className="h-4 w-6 border-mayo border-[1px]" />
                            ENGLISH
                          </div>
                        </button>
                      )}
                      {lang === 'en' && (
                        <button onClick={() => {changeLanguage('fren'); onClickMenu()}}>
                            <div className="flex flex-row gap-1 items-center">
                            <Image src={French} alt="French Flag" width={200} height={200} className="h-4 w-6 border-mayo border-[1px]" />
                            FRENCH
                          </div>
                        </button>
                      )}
                    </nav>
                  </motion.div>
                )}
            </motion.div>  
        </motion.div>
    </header>
  );
};
