"use client"
import React from 'react'
import Medium from '@/assets/medium.png'
import Small from '@/assets/small.png'
import Burger1 from '@/assets/burger1.png'
import Burger2 from '@/assets/burger2.png'
import Burger3 from '@/assets/burger3.png'
import Burger4 from '@/assets/burger4.png'
import { motion } from 'framer-motion'
import { useTranslation } from "@/translations/provider";

const Flavors = () => {
  const { translations } = useTranslation();

  return (
    <section className='bg-mayo py-16'>
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
                <h2>{translations.flavors_description}</h2>
            </motion.div> 
            <motion.div 
              className='flex overflow-hidden'
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
                    src={Burger1.src} 
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
                    src={Burger2.src}
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
                    src={Burger3.src} 
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
                    src={Burger4.src}
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
                    src={Burger1.src} 
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
                    src={Burger2.src}
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
                    src={Burger3.src} 
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
                    src={Burger4.src}
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
                    src={Burger1.src} 
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
                    src={Burger2.src}
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
                    src={Burger3.src} 
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
                    src={Burger4.src}
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
            </motion.div>
            {/* <motion.div 
              className='flex justify-center py-12'
              initial={{opacity:0, scale:0.8}}
              whileInView={{
                opacity:1,
                scale:[0, 1.3, 1],
                transition:{
                  duration:0.5
                }
              }}
            >
              <a href="#shop" className="text-center font-bold w-3/4 max-w-[36rem] md:w-1/2 lg:w-full py-4 px-8 bg-[#F9F7B9] border-4 border-black rounded-3xl gap-3 lg:border-[9px] text-2xl md:text-4xl lg:text-5xl transition-all duration-500 ease-out hover:bg-[#E8C6DE] hover:rounded-[2.5rem]">{translations.flavors_button}</a>
            </motion.div> */}
    </section>
  )
}

export default Flavors