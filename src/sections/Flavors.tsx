"use client"
import React from 'react'
import Product from '@/assets/cinnamon.webp'
import Medium from '@/assets/medium.png'
import Small from '@/assets/small.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/button'
import { useTranslation } from "@/translations/provider";

const Flavors = () => {
  const { translations } = useTranslation();

  return (
    <section className='bg-[#A5DFF9] py-16'>
            <div className='container text-center py-12 flex flex-col gap-3 items-center z-40 text-3xl md:text-4xl lg:text-6xl'>
                <h2>{translations.flavors_description}</h2>
            </div> 
            <div className='flex overflow-hidden'>
              <motion.div 
                className='flex p-8 flex-none'
                animate={{
                  translateX:"-50%",
                }}
                transition={{
                  duration:80,
                  repeat:Infinity,
                  ease:'linear',
                  repeatType:'loop'
                }}
              >
                  <motion.img 
                    src={Small.src} 
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors' 
                    animate={{
                      translateY:[20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Medium.src}
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors'
                    animate={{
                      translateY:[-20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                 <motion.img 
                    src={Small.src} 
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors' 
                    animate={{
                      translateY:[20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Medium.src}
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors'
                    animate={{
                      translateY:[-20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Small.src} 
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors' 
                    animate={{
                      translateY:[20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Medium.src}
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors'
                    animate={{
                      translateY:[-20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Small.src} 
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors' 
                    animate={{
                      translateY:[20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Medium.src}
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors'
                    animate={{
                      translateY:[-20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Small.src} 
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors' 
                    animate={{
                      translateY:[20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Medium.src}
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors'
                    animate={{
                      translateY:[-20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Small.src} 
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors' 
                    animate={{
                      translateY:[20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
                  <motion.img 
                    src={Medium.src}
                    alt="Product Image" 
                    width={200} 
                    height={250}
                    className='product-flavors'
                    animate={{
                      translateY:[-20,0],
                    }}
                    transition={{
                      repeat:Infinity,
                      repeatType:'mirror',
                      duration:3,
                      ease:'easeInOut'
                    }}
                  />
              </motion.div>
            </div>
            <div className='flex justify-center py-12'>
              <a href="#shop" className="text-center w-3/4 max-w-[36rem] md:w-1/2 lg:w-full py-4 px-8 bg-[#F9F7B9] border-4 border-black rounded-3xl gap-3 lg:border-[9px] text-3xl md:text-4xl lg:text-6xl transition-all duration-500 ease-out hover:bg-[#E8C6DE] hover:rounded-[2.5rem]">{translations.flavors_button}</a>
            </div>
    </section>
  )
}

export default Flavors