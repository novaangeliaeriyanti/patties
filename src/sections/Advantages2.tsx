"use client"
import Image from 'next/image'
import React from 'react'
import CookiesAndCream from '@/assets/cookies-and-cream.png'
import { useTranslation } from '@/translations/provider';
import { motion } from "framer-motion"
import Diamonds from '@/assets/diamonds.png'
const Advantages2 = () => {
  const { translations } = useTranslation();
  return (
    <section className='bg-yellow pt-6 overflow-x-clip'>
      <motion.div 
        className='flex justify-center'
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
        <div className='flex flex-col lg:flex-row px-4'>
          <Image src={CookiesAndCream} alt='Cookies And Cream Image' width={200} height={200} className='h-42 w-auto md:h-[500px] lg:h-[400px]'/>
          <div className='flex lg:flex-col items-start justify-start'>
              <motion.h2 
              className='uppercase text-red text-start font-mono font-bold py-12 flex flex-col gap-3 items-start z-40 text-2xl md:text-5xl lg:text-8xl'
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
              {translations.advantages2_title}
            </motion.h2>
            {/* <Image src={Diamonds} alt='Diamonds Image' width={200} height={200} className='flex-1 hidden h-24 w-auto lg:block lg:h-[100px]'/> */}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Advantages2