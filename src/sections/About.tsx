import React from 'react'
import Logo from '@/assets/logo.svg'
import Strawberry from "@/assets/strawberry.png"
import Image from 'next/image'
const About = () => {
  return (
    <section className='relative bg-[#A5DFF9] h-screen flex justify-center items-center'>
        {/* <div className='relative'> */}
            <div className='text-center text-3xl flex flex-col gap-3 items-center z-40'>
                <Logo className="inline-block"/>
                <h2>Just Delicious</h2>
                <h2>Baked Corn Puffs.</h2>
            </div>
            <div className='absolute'>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100} className=''/>
                {/* <Image src={Strawberry} alt='Strawberry' width={100} height={100}/>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100}/>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100}/>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100}/>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100}/>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100}/>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100}/>
                <Image src={Strawberry} alt='Strawberry' width={100} height={100}/> */}
            </div>
        {/* </div> */}
    </section>
  )
}

export default About