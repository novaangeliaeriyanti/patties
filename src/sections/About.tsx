"use client"
import React from 'react'
import BurgerWhite from '@/assets/burger-white.png'
import BrownPattiesLogo from '@/assets/brown-patties.png'
import { motion } from "framer-motion"
import { useTranslation } from "@/translations/provider";

const About = () => {
  const { translations } = useTranslation();

  return (
    <div className='relative bg-red text-mayo h-screen flex justify-center items-center overflow-x-clip'>
            <div className='text-center flex flex-col gap-3 items-center z-40'>
                <motion.img 
                  src={BrownPattiesLogo.src} 
                  alt='Mayo Patties Logo' 
                  width={300} 
                  height={200} 
                  className="w-60 text-3xl lg:w-1/2"
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
                  className='w-2/3 leading-relaxed lg:w-1/2 text-2xl font-bold md:text-3xl lg:text-5xl'
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute transform -translate-y-3/4 translate-x-20 top-0 md:hidden lg:hidden rotate-[15deg]'
                  animate={{
                    y: [-150, -140, -150],
                    translateX:[80,90],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={220} 
                  height={220} 
                  className='absolute transform translate-x-72 translate-y-2 top-0 md:hidden lg:hidden'
                  animate={{
                    translateY:[8,0],
                    x:[288,298]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={BurgerWhite.src} 
                  alt='Strawberry' width={120} 
                  height={120} className='absolute transform -translate-x-12 translate-y-12 top-0 md:hidden lg:hidden rotate-[-15deg]'
                  animate={{
                    translateY:[48,38],
                    x:[-48,-58],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={80} 
                  height={80} 
                  className='absolute transform translate-x-52 translate-y-20 top-0 md:hidden lg:hidden rotaet-[35deg]'
                  animate={{
                    translateY:[80,70],
                    x:[208,218],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={60} 
                  height={60} 
                  className='absolute transform translate-x-20 translate-y-72 top-0 md:hidden lg:hidden rotate-[35deg]'
                  animate={{
                    translateY:[288,278],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute transform translate-x-52 translate-y-10 bottom-0 md:hidden lg:hidden'
                  animate={{
                    translateY:[40,50],
                    x:[208,218]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute transform right-0 -translate-y-60 bottom-0 md:hidden lg:hidden rotate-[60deg]'
                  animate={{
                    translateY:[-240,-250],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={100} 
                  height={100} 
                  className='absolute transform translate-x-8 translate-y-10 bottom-0 md:hidden lg:hidden rotate-[-50deg]'
                  animate={{
                    translateY:[40,30],
                    x:[32,42],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute transform -translate-x-10 -translate-y-60 bottom-0 rotate-[70deg] md:hidden lg:hidden'
                  animate={{
                    translateY:[-240,-230],
                    x:[-40,-50],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={220} 
                  height={220} 
                  className='absolute hidden md:block transform translate-x-64 -translate-y-16 top-0'
                  animate={{
                    y:[-64,-74],
                    x:[256,266],
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden md:block transform md:-translate-y-8 top-0 right-0 md:-translate-x-10'
                  animate={{
                    translateY:[-32,-22],
                    x:[-40,-40],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' width={120} 
                  height={120} className='absolute hidden md:block transform md:translate-y-20 top-0 left-0 md:translate-x-28'
                  animate={{
                    translateY:[80,90],
                    x:[112,112],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={80} 
                  height={80} 
                  className='absolute hidden md:block md:translate-y-44 top-0 right-0 md:-translate-x-48 rotate-[35deg]'
                  animate={{
                    translateY:[176,166],
                    x:[-192,-182],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={60} 
                  height={60} 
                  className='absolute hidden md:block top-0 left-0 translate-y-80'
                  animate={{
                    translateY:[320,310],
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                 <motion.img 
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute hidden md:block transform top-0 translate-y-96 translate-x-44 rotate-[-35deg]'
                  animate={{
                    translateY:[384,374],
                    x:[176,166],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden md:block bottom-0 translate-x-10 left-0 rotate-[15deg]'
                  animate={{
                    x:[40,50],
                    rotate:[15, 15]
                  }}
                  transition={{
                    repeat:Infinity,
                    repeatType:'mirror',
                    duration:3,
                    ease:'easeInOut'
                  }}
                />
                <motion.img 
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute hidden md:block transform bottom-0 md:translate-x-64 rotate-[60deg]'
                  animate={{
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={200} 
                  height={200} 
                  className='absolute hidden md:block transform top-0 right-0 translate-y-96 rotate-[50deg]'
                  animate={{
                    translateY:[384,374],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={120} 
                  height={120} 
                  className='absolute hidden md:block right-0 transform md:-translate-x-20 bottom-0 rotate-[70deg] md:-translate-y-0'
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={180} 
                  height={180} 
                  className='absolute hidden md:block transform rotate-[45deg] right-0 -translate-x-96 translate-y-40'
                  animate={{
                    translateY:[160,150],
                    x:[-384,-374],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={60} 
                  height={60} 
                  className='absolute hidden md:block transform bottom-0 right-0 -translate-x-96 -translate-y-40 rotate-[180deg]'
                  animate={{
                    translateY:[-160,-160],
                    x:[-384,-374],
                    rotate:[180,180]
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={100} 
                  height={100} 
                  className='absolute hidden lg:block transform left-0 bottom-0 translate-x-80 -translate-y-52 rotate-[-35deg]'
                  animate={{
                    translateY:[-208,-198],
                    x:[280,270],
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
                  src={BurgerWhite.src}
                  alt='Strawberry' 
                  width={100} 
                  height={100} 
                  className='absolute hidden lg:block transform lg:-translate-y-28 lg:left-96 translate-x-64 bottom-0 rotate-[35deg]'
                  animate={{
                    translateY:[-112,-102],
                    translateX:[256,266],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={150} 
                  height={150} 
                  className='absolute hidden lg:block transform lg:translate-y-56 left-96 translate-x-28 top-0 rotate-[15deg]'
                  animate={{
                    translateY:[224,214],
                    translateX:[112, 122],
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
                  src={BurgerWhite.src} 
                  alt='Strawberry' 
                  width={150} 
                  height={150} 
                  className='absolute hidden lg:block transform lg:translate-y-8 right-96 -translate-x-72 top-0 rotate-[-40deg]'
                  animate={{
                    translateY:[32,22],
                    translateX: [-288, -278],
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