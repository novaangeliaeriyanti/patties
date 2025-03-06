"use client"
import Image from 'next/image'
import React from 'react'
import Advantage from '@/assets/advantages.png'
import { useTranslation } from '@/translations/provider';
import { motion } from "framer-motion"
const Advantages = () => {
  const { translations } = useTranslation();
  return (
    <section className='bg-[#F9F7B9] py-16'>
      <motion.h2 
        className='text-center py-12 flex flex-col gap-3 items-center z-40 text-3xl md:text-4xl lg:text-6xl'
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
        {translations.advantages_title}
      </motion.h2>
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
        <Image src={Advantage} alt='Salad Image' width={200} height={200} className='h-96 w-auto md:h-[500px] lg:h-[800px]'/>
      </motion.div>
    </section>
  )
}

export default Advantages