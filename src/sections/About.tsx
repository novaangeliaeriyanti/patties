"use client"
import React from 'react'
import Logo from '@/assets/logo.svg'
import LogoCamilanJworo from '@/assets/logocamilanjworo.png'
import Strawberry from "@/assets/strawberry.png"
import Mango from "@/assets/mango.png"
import Grape from "@/assets/grape.png"
import Melon from "@/assets/melon.png"
import Kiwi from "@/assets/kiwi.png"
import Image from 'next/image'
import { motion } from "framer-motion"
import { useTranslation } from "@/translations/provider";

const About = () => {
  const { translations } = useTranslation();

  return (
    <div className='relative bg-[#A5DFF9] h-screen flex justify-center items-center overflow-x-clip'>
            <div className='text-center flex flex-col gap-3 items-center z-40'>
                <motion.img 
                  src={LogoCamilanJworo.src} 
                  alt='Logo Camilan Jworo' 
                  width={300} 
                  height={200} 
                  className="h-52 w-52 text-3xl md:h-60 md:w-60 lg:h-72 lg:w-72"
                  initial={{opacity:0, scale:0.8}}
                  whileInView={{
                    opacity:1,
                    scale:[0, 1.3, 1],
                    transition:{
                      duration:0.5
                    }
                  }}
                />
                <motion.h2 
                  className='w-2/3 lg:w-1/2 text-3xl md:text-4xl lg:text-6xl'
                  initial={{y:"100%", opacity:0}}
                  animate={{y:"0%", opacity:1}}
                  transition={{duration:0.8}}
                >
                  {translations.about_description}
                </motion.h2>
            </div>
            <motion.div 
              className='absolute h-full w-full'
              transition={{delay:0.4, duration: 0.5, ease: "easeOut" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute transform -translate-y-3/4 top-0 md:hidden lg:hidden rotate-[15deg]'
                  animate={{
                    y: [-150, -140, -150],
                    rotate: [15, 15],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'mirror', 
                    duration: 3,
                    ease: 'easeInOut'
                  }}
                />
                <motion.img 
                  src={Melon.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute transform translate-x-52 -translate-y-1/3 top-0 md:hidden lg:hidden'
                  animate={{
                    translateY:[-50,-30],
                    x:[230,220]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' width={120} 
                  height={120} className='absolute transform -translate-x-44 translate-y-50 top-0 md:hidden lg:hidden rotate-[-15deg]'
                  animate={{
                    translateY:[10,-5],
                    x:[-200,-190],
                    rotate:[-15,-15]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Grape.src} 
                  alt='Strawberry' 
                  width={80} 
                  height={80} 
                  className='absolute transform -translate-x-20 translate-y-32 top-0 md:hidden lg:hidden rotaet-[35deg]'
                  animate={{
                    translateY:[120,110],
                    x:[-70,-60],
                    rotate: [35,35]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' 
                  width={60} 
                  height={60} 
                  className='absolute transform translate-x-20 translate-y-24 top-0 md:hidden lg:hidden rotate-[35deg]'
                  animate={{
                    translateY:[90,80],
                    x:[80,70],
                    rotate:[-35,-35]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Kiwi.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute transform -translate-x-52 -translate-y-40 bottom-0 md:hidden lg:hidden'
                  animate={{
                    translateY:[-180,-170],
                    x:[-230,-220]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute transform translate-x-36 -translate-y-40 bottom-0 md:hidden lg:hidden rotate-[60deg]'
                  animate={{
                    translateY:[-160,-150],
                    x:[180,170],
                    rotate:[60,60]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Grape.src} 
                  alt='Strawberry' 
                  width={100} 
                  height={100} 
                  className='absolute transform translate-x-24 -translate-y-10 bottom-0 md:hidden lg:hidden rotate-[-50deg]'
                  animate={{
                    translateY:[-50,-40],
                    x:[80,70],
                    rotate:[-50,-50]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Mango.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute transform -translate-x-20 -translate-y-1 bottom-0 rotate-[70deg] md:hidden lg:hidden'
                  animate={{
                    translateY:[-10,0],
                    x:[-100,-90],
                    rotate:[70,70]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                /> 
                {/* MEDIUM */}
                <motion.img 
                  src={Melon.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden md:block transform -translate-y-3/4 top-0'
                  animate={{
                    translateY:[-170,-160],
                    x:[-10,0],
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden md:block transform md:-translate-y-8 top-0 md:translate-x-64'
                  animate={{
                    translateY:[-30,-20],
                    x:[250,240],
                    rotate:[-15,-15]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Kiwi.src} 
                  alt='Strawberry' width={120} 
                  height={120} className='absolute hidden md:block transform md:-translate-y-50 top-0 md:-translate-x-64'
                  animate={{
                    translateY:[10,-5],
                    x:[-250,-240],
                    rotate:[-15,-15]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Grape.src} 
                  alt='Strawberry' 
                  width={80} 
                  height={80} 
                  className='absolute hidden md:block top-0 md:translate-y-48 md:-translate-x-44 rotate-[35deg]'
                  animate={{
                    translateY:[192,182],
                    x:[-176,-166],
                    rotate: [35,35]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' 
                  width={60} 
                  height={60} 
                  className='absolute hidden md:-translate-y-20 md:-translate-x-96'
                  animate={{
                    translateY:[90,80],
                    x:[-384,-374]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Melon.src} 
                  alt='Strawberry' 
                  width={60} 
                  height={60} 
                  className='absolute hidden md:block transform top-0 md:translate-y-44 md:translate-x-36 rotate-[-35deg]'
                  animate={{
                    translateY:[176,166],
                    x:[144,134],
                    rotate:[-35,-35]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden md:block transform md:-translate-y-40 bottom-0 md:-translate-x-80 rotate-[-15deg]'
                  animate={{
                    translateY:[-160,-170],
                    x:[-320,-310],
                    rotate:[-15, -15]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Mango.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute hidden md:block transform bottom-0 md:translate-x-64 md:-translate-y-64 rotate-[60deg]'
                  animate={{
                    translateY:[-256,-246],
                    x:[256,245],
                    rotate:[60,60]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Strawberry.src} 
                  alt='Strawberry' 
                  width={100} 
                  height={100} 
                  className='absolute hidden transform md:-translate-y-10 bottom-0 md:translate-x-36 rotate-[-50deg]'
                  animate={{
                    translateY:[-40,-30],
                    x:[144,134],
                    rotate:[-50,-50]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Grape.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute hidden md:block transform md:-translate-x-20 bottom-0 rotate-[70deg] md:-translate-y-0'
                  animate={{
                    translateY:[-10,0],
                    x:[-80,-90],
                    rotate:[70,70]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                /> 
                <motion.img 
                  src={Kiwi.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden md:block transform md:translate-y-1/3 bottom-0 md:translate-x-96 rotate-[45deg]'
                  animate={{
                    translateY:[60,50],
                    x:[360,350],
                    rotate:[45,45]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Melon.src} 
                  alt='Strawberry' 
                  width={60} 
                  height={60} 
                  className='absolute hidden md:block transform md:translate-y-1/3 bottom-0 md:-translate-x-96 rotate-[-35deg]'
                  animate={{
                    translateY:[30,40],
                    x:[-380,-370],
                    rotate:[-35,-35]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                {/* LARGE */}
                <motion.img 
                  src={Kiwi.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute hidden lg:block transform lg:translate-y-28 left-10 top-0 rotate-[-35deg]'
                  animate={{
                    translateY:[112,102],
                    rotate:[-35,-35]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Mango.src}
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute hidden lg:block transform lg:-translate-y-28 lg:-left-20 bottom-0 rotate-[35deg]'
                  animate={{
                    translateY:[-112,-102],
                    translateX:[-0,-10],
                    rotate:[35,35]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Melon.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden lg:block transform lg:translate-y-28 right-10 top-0 rotate-[15deg]'
                  animate={{
                    translateY:[112,102],
                    translateX:[40, 30],
                    rotate:[15,15]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={Mango.src} 
                  alt='Strawberry' 
                  width={200} 
                  height={200} 
                  className='absolute hidden lg:block transform lg:-translate-y-28 -right-20 bottom-0 rotate-[-40deg]'
                  animate={{
                    translateY:[-112,-102],
                    translateX: [-10, -10],
                    rotate:[-40,-40]
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
  )
}

export default About