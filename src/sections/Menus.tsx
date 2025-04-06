"use client"
import { useTranslation } from '@/translations/provider';
import { motion } from 'framer-motion'
import Sides from "@/assets/sides.png"
import Shakes from "@/assets/shakes.png"
import Chicken from "@/assets/chicken.png"
import Smashburger from "@/assets/smashburger.png"
import Veggie from "@/assets/veggie.png"
import KidsMeal from "@/assets/kids-meal.png"
import Image from 'next/image';

const MenuList = [
    {
        url_image: Smashburger,
        title_en: "Smashburger",
        title_fren: "Smashburger",
        menu: "smashburger"
    },
    {
        url_image: Sides,
        title_en: "Sides",
        title_fren: "Accompagnements",
        menu: "sides"
    },
    {
        url_image: Shakes,
        title_en: "Hand-spun Shakes",
        title_fren: "Milkshakes à la Main",
        menu: "shakes"
    },
    {
        url_image: Chicken,
        title_en: "Chicken",
        title_fren: "Poulet",
        menu: "chicken"
    },
    {
        url_image: Veggie,
        title_en: "Veggie",
        title_fren: "Légumes",
        menu: "veggie"
    },
    {
        url_image: KidsMeal,
        title_en: "Kids Meal",
        title_fren: "Repas Enfant",
        menu: "kids-meal"
    },
]

const Menus = () => {
  const { translations,lang } = useTranslation();
  
  return (
    <section id="menus" className='bg-mayo py-16 px-4 md:px-10 lg:px-16 overflow-x-clip'>
        <motion.div 
            className='container text-brown font-bold text-center py-12 flex flex-col gap-3 items-center z-40 text-2xl md:text-3xl lg:text-5xl'
            initial={{opacity:0, scale:0.8}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{
                duration:0.5
                }
            }}
            viewport={{
                once:true,
            }}
        >
            <h2 className='text-red'>{translations.menus_title}</h2>
            <span className='text-brown text-base italic'>{translations.menus_notes}</span>
        </motion.div> 
        <motion.div
            className='flex justify-center items-center'
            initial={{opacity:0, scale:0.8}}
            whileInView={{
                opacity:1,
                scale:1,
                transition:{
                duration:0.5
                }
            }}
            viewport={{
                once:true,
            }}
        >
            <div className='flex flex-wrap w-full justify-start'>
                {
                    MenuList?.map(item => (
                        <div className='flex flex-col gap-1 items-center w-full md:w-1/2 lg:w-1/3'>
                            <Image src={item?.url_image} alt={lang === 'en' ? item?.title_en : item?.title_fren} width={200} height={200} className='w-full lg:h-80'/>
                            <div className='cursor-pointer font-bold uppercase border-[1px] border-red text-red p-2 rounded-md hover:text-brown transition-all duration-300 ease-in-out'>{lang === 'en' ? item?.title_en : item?.title_fren}</div>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    </section>
  )
}

export default Menus