"use client"
import React from 'react'
import { motion } from "framer-motion"
import { useTranslation } from "../translations/provider";
const Tagline = () => {
    const { translations } = useTranslation();
    return (
        <section className='bg-red'>
            <div className='flex flex-wrap overflow-hidden'>
                <motion.div 
                    className='flex gap-12 flex-none p-2 text-mayo font-mono'
                    animate= {{
                        translateX: "-50%"
                    }}
                    transition={{
                        duration:80,
                        repeat: Infinity,
                        repeatType:"loop",
                        ease: "linear",
                    }}
                >
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                    <h2 className='text-xl font-bold md:text-xl lg:text-xl'>{translations.tagline}</h2>
                </motion.div>
            </div>
        </section>
    )
}

export default Tagline