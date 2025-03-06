"use client"
import Image from 'next/image'
import React from 'react'
import Advantage from '@/assets/advantages.png'
import { useTranslation } from '@/translations/provider';
const Advantages = () => {
  const { translations } = useTranslation();
  return (
    <section className='bg-[#F9F7B9] py-16'>
      <h2 className='text-center py-12 flex flex-col gap-3 items-center z-40 text-3xl md:text-4xl lg:text-6xl'>{translations.advantages_title}</h2>
      <div className='flex justify-center'>
        <Image src={Advantage} alt='Salad Image' width={200} height={200} className='h-96 w-auto md:h-[500px] lg:h-[800px]'/>
      </div>
    </section>
  )
}

export default Advantages