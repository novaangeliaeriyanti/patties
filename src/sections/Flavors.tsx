"use client"
import React from 'react'
import Product from '@/assets/cinnamon.webp'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/button'
const Flavors = () => {
  return (
    <section className='bg-[#A5DFF9] py-16'>
            <div className='text-center py-12 flex flex-col gap-3 items-center z-40 text-3xl md:text-4xl lg:text-6xl'>
                <h2>Our Tasty Puffs Come in Awesome Flavors. Yum!</h2>
            </div> 
            <div className='flex overflow-hidden'>
              <motion.div 
                className='flex gap-4 p-8 flex-none md:gap-8 lg:gap-8'
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
                    src={Product.src} 
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
                    src={Product.src}
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
                    src={Product.src} 
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
                    src={Product.src}
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
                    src={Product.src} 
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
                    src={Product.src}
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
                    src={Product.src} 
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
                    src={Product.src}
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
                    src={Product.src} 
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
                    src={Product.src}
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
                    src={Product.src} 
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
                    src={Product.src}
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
              <Button text="SHOP OUR COLLECTION!" />
            </div>
    </section>
  )
}

export default Flavors