"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Product from '@/assets/products.png'
import Star from '@/assets/star.webp'
import Button from '@/components/button'

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

const Products = () => {
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
        const message = `Hallo, saya ingin order Salad size ${size} ${quantity} cup`
        const whatsappUrl = `https://wa.me/${livechat[0]?.phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
      };

    useEffect(() => {
      setSize(products[0].size)
      setPrice(products[0]?.price)
      setQuantity(1)
      setPriceTotal(products[0]?.price * 1)
    }, [])

    console.log('size: ', size)
    
  return (
    <section className='bg-[##FCC99] py-16'>
        <div className='container'>
            <div className='flex flex-col gap-8'>
                <h2 className='text-center py-12 text-3xl md:text-4xl lg:text-6xl'>Whats are you waiting for? Buy some salad today!</h2>
                <div className='flex flex-col lg:flex-row justify-center gap-8'>
                    <div className='flex-1 flex justify-center'>
                        <Image src={Product} alt='Product Image' width={200} height={200} className='rounded-3xl w-full h-fit'/>
                    </div>
                    <div className='flex-1 flex flex-col gap-8 lg:gap-12'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-3xl md:text-4xl lg:text-6xl'>Fruit Salad</h2>
                            <div className='flex flex-row'>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                                <Image src={Star} alt='Star Image' className='h-10 w-10'/>
                            </div>
                        </div>
                        <p className='text-base md:text-lg lg:text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quibusdam minus, dicta sed minima obcaecati error ipsa reprehenderit rerum, voluptatem quis dolores ipsum sapiente! Architecto facilis dolore esse quidem id.
                        </p>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xl md:text-2xl lg:text-3xl'>PACK SIZE</span>
                            <div className='flex flex-row gap-2 flex-wrap'>
                                {
                                    products?.map((item,index)=>(
                                        <button onClick={()=>onChangeSize(item)} key={index} className={twMerge("uppercase py-2 px-4 bg-[#E8C6DE] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl transition-all duration-500 ease-out hover:bg-[#E8C6DE] hover:rounded-[1.5rem] focus:bg-[#A5DFF9]", size === item?.size && "bg-[#A5DFF9] rounded-[1.5rem]")}>
                                            {item?.size}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 md:flex-row lg:flex-row md:justify-between lg:justify-between'>
                            <div className='flex flex-col gap-2'>
                                <span className='text-xl md:text-2xl lg:text-3xl'>Quantity</span>
                                <div className='flex flex-row gap-2 flex-wrap'>
                                    <button disabled={quantity <= 1} onClick={()=>onReduceQuantity()} className="py-2 px-4 bg-[#A5DFF9] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl">
                                        -
                                    </button>
                                    <input value={quantity} onChange={(e)=>onChangeQuantity(e)} className="inline-flex justify-center w-20 max-w-40 py-2 px-4 bg-[#FFFFFF] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl"/>
                                    <button onClick={()=>onAddQuantity()} className="py-2 px-4 bg-[#CCFFCC] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl">
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-xl md:text-2xl lg:text-3xl'>Price</span>
                                <div className='flex flex-row gap-2 flex-wrap'>
                                    <span className="inline-flex justify-center w-48 max-w-56 py-2 px-4 bg-[#FFFFFF] border-4 border-black rounded-xl lg:rounded-2xl gap-3 lg:border-[6px] text-base md:text-lg lg:text-xl">
                                        Rp. {priceTotal}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'>
                            <Button onTap={handleBuy} text="BELI SEKARANG" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products