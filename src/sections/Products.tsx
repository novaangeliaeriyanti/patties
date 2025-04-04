"use client"
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge';
import ProductMedium from '@/assets/products_medium.png'
import ProductSmall from '@/assets/products_small.png'
import Star from '@/assets/star.webp'
import Button from '@/components/button'
import { useTranslation } from "@/translations/provider";
import { motion } from "framer-motion"
import { formatCurrency } from '@/hooks/usevalidate';

const products = [
    {
        size:'small',
        price:10000,
    },
    {
        size:'medium',
        price:15000,
    },
    {
        size:'large',
        price:20000
    }
]

const livechat = [{
    phoneNumber : "6285732857020",
  }
]

const images = [
    ProductMedium,
    ProductSmall,
    ProductMedium,
  ];

const Products = () => {
    const { translations, lang } = useTranslation();
    const [size, setSize] = useState(products[0].size)
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [priceTotal, setPriceTotal] = useState(0)

    const onAddQuantity = ()=>{
        setQuantity(quantity + 1)
        setPriceTotal(products[0]?.price * (quantity + 1))
    }

    const onReduceQuantity = ()=>{
        setQuantity(quantity - 1)
        setPriceTotal(products[0]?.price * (quantity - 1))
    }

    const onChangeQuantity = (e:any) => {
        const input = Number(e.target.value)
        setQuantity(input)
        setPriceTotal(price * input)
    } 

    const onChangeSize = (item:any) => {
        setSize(item?.size)
        setPrice(item?.price)
        setQuantity(1)
        setPriceTotal(item?.price * 1)
    }

    const handleBuy = () => {
        let message = ''
        if(lang === 'en'){
            message = `Hello, I want to order Salad with ${translations?.products_pack?.[size]} size ${quantity} cup`
        }else{
            message = `Hallo, saya ingin order Salad ukuran ${translations?.products_pack?.[size]} ${quantity} cup`
        }
        const whatsappUrl = `https://wa.me/${livechat[0]?.phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
      ];
    
      if (!/\d/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault();
      }
    };

    useEffect(() => {
      setSize(products[0].size)
      setPrice(products[0]?.price)
      setQuantity(1)
      setPriceTotal(products[0]?.price * 1)
    }, [])
    
  return (
    <section id="shop" className='bg-[##FCC99] py-16'>
        <div className='container'>
            <div className='flex flex-col gap-8'>
                <motion.h2 
                    className='text-center font-bold py-12 text-2xl md:text-3xl lg:text-5xl'
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
                    {translations.products_title}
                </motion.h2>
                <motion.div 
                    className='flex py-16 px-5 lg:px-8 flex-col lg:flex-row justify-center gap-8 bg-[#E8C6DE] border-4 border-black rounded-3xl lg:border-[6px]'
                    initial={{opacity:0, scale:0.8}}
                    whileInView={{
                      opacity:1,
                      scale: [0, 1.3, 1],
                      transition:{
                        duration:0.5
                      }
                    }}
                    viewport={{
                      once:true,
                    }}
                >
                    <div className='flex-1 flex justify-center'>
                        <motion.div 
                            className="box"
                            initial={{opacity:0, scale:0.8}}
                            whileInView={{
                              opacity:1,
                              scale: [0, 1.3, 1],
                              transition:{
                                delay:0.5,
                                duration:0.5
                              }
                            }}
                            viewport={{
                              once:true,
                            }}
                        >
                            <Carousel 
                                useKeyboardArrows={true}
                                autoPlay 
                                axis="horizontal" 
                                infiniteLoop
                                showStatus={false}
                                showThumbs={true}
                            >
                                {images.map((URL, index) => (
                                <div className="slide border-4 border-black rounded-3xl lg:border-[6px] h-full">
                                    <Image alt="sample_file" src={URL} key={index} width={200} height={200}  className='rounded-2xl h-full'/>
                                </div>
                                ))}
                            </Carousel>
                        </motion.div>
                    </div>
                    <div className='flex-1 flex flex-col gap-8 lg:gap-12 text-center justify-center items-center lg:text-start lg:justify-start lg:items-start'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-2xl font-bold md:text-3xl lg:text-5xl'>Fruit Salad</h2>
                            <div className='flex flex-row'>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                            </div>
                        </div>
                        <p className='text-base md:text-lg lg:text-xl'>
                           {translations.products_description}
                        </p>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xl font-bold md:text-2xl lg:text-3xl'>{translations.products_size}</span>
                            <div className='flex flex-row gap-2 flex-wrap justify-center items-center md:justify-start lg:justify-start'>
                                {
                                    products?.map((item,index)=>(
                                        <motion.button 
                                            onClick={()=>onChangeSize(item)} 
                                            key={index} 
                                            className={twMerge("uppercase py-2 px-4 bg-[#ffffff] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl transition-all duration-500 ease-out hover:bg-[#E8C6DE] hover:rounded-[1.5rem] focus:bg-[#A5DFF9]", size === item?.size && "bg-[#A5DFF9] rounded-[1.5rem]")}
                                            initial={{opacity:0, scale:0.8}}
                                            whileInView={{
                                              opacity:1,
                                              scale: [0, 1.3, 1],
                                              transition:{
                                                delay:0.5,
                                                duration:0.5
                                              }
                                            }}
                                            viewport={{
                                              once:true,
                                            }}
                                        >
                                            {translations?.products_pack?.[item?.size]}
                                        </motion.button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 md:flex-row lg:flex-row md:justify-between lg:justify-between'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-xl font-bold md:text-2xl lg:text-3xl'>{translations.products_quantity}</span>
                                <div className='flex flex-row gap-2 flex-wrap'>
                                    <motion.button 
                                        disabled={quantity <= 1} 
                                        onClick={()=>onReduceQuantity()} 
                                        className="py-2 px-4 bg-[#CCFFCC] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl"
                                        initial={{opacity:0, scale:0.8}}
                                        whileInView={{
                                          opacity:1,
                                          scale: [0, 1.3, 1],
                                          transition:{
                                            delay:0.8,
                                            duration:0.5
                                          }
                                        }}
                                        viewport={{
                                          once:true,
                                        }}
                                    >
                                        -
                                    </motion.button>
                                    <motion.input 
                                        value={quantity} 
                                        onChange={(e)=>onChangeQuantity(e)} 
                                        className="inline-flex text-center justify-center items-center w-20 max-w-40 py-2 px-4 bg-[#FFFFFF] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl"
                                        initial={{opacity:0, scale:0.8}}
                                        onKeyDown={handleKeyDown}
                                        whileInView={{
                                          opacity:1,
                                          scale: [0, 1.3, 1],
                                          transition:{
                                            delay:0.8,
                                            duration:0.5
                                          }
                                        }}
                                        viewport={{
                                          once:true,
                                        }}
                                    />
                                    <motion.button 
                                        onClick={()=>onAddQuantity()} 
                                        className="py-2 px-4 bg-[#CCFFCC] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl"
                                        initial={{opacity:0, scale:0.8}}
                                        whileInView={{
                                          opacity:1,
                                          scale: [0, 1.3, 1],
                                          transition:{
                                            delay:0.8,
                                            duration:0.5
                                          }
                                        }}
                                        viewport={{
                                          once:true,
                                        }}
                                    >
                                        +
                                    </motion.button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-xl font-bold md:text-2xl lg:text-3xl'>{translations.products_price}</span>
                                <div className='flex flex-row gap-2 flex-wrap'>
                                    <motion.span 
                                        className="inline-flex justify-center w-48 max-w-56 py-2 px-4 bg-[#FFFFFF] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl"
                                        initial={{opacity:0, scale:0.8}}
                                            whileInView={{
                                              opacity:1,
                                              scale: [0, 1.3, 1],
                                              transition:{
                                                delay:0.8,
                                                duration:0.5
                                              }
                                            }}
                                            viewport={{
                                              once:true,
                                            }}
                                    >
                                        {formatCurrency(priceTotal)}
                                    </motion.span>
                                </div>
                            </div>
                        </div>
                        <motion.div 
                            className='w-full flex justify-center'
                            initial={{opacity:0, scale:0.8}}
                            whileInView={{
                              opacity:1,
                              scale: [0, 1.3, 1],
                              transition:{
                                duration:0.5
                              }
                            }}
                        >
                            <Button onTap={handleBuy} text={translations.products_button} />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Products