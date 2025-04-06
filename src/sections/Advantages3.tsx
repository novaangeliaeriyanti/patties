"use client"
import Image from 'next/image'
import React from 'react'
import Paket from '@/assets/paket.png'
import { useTranslation } from '@/translations/provider';
import { motion } from "framer-motion"
import DiamondsYellow from '@/assets/diamonds-yellow.png'
const Advantages3 = () => {
  const { translations } = useTranslation();
  return (
    <section className='bg-brown'>
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
          <div className='flex lg:flex-col items-end justify-start'>
              <motion.h2 
              className='uppercase text-yellow text-end font-mono font-bold py-12 flex flex-col gap-3 items-start z-40 text-2xl md:text-5xl lg:text-8xl'
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
              {translations.advantages3_title}
            </motion.h2>
            <Image src={DiamondsYellow} alt='Diamonds Image' width={200} height={200} className='flex-1 hidden w-auto lg:block lg:h-12'/>
          </div>
          <Image src={Paket} alt='Advantages Image' width={200} height={200} className='h-42 w-auto md:h-[500px] lg:h-[500px]'/>
        </div>
      </motion.div>
    </section>
  )
}

export default Advantages3