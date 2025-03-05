"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import Instagram from "@/assets/instagram.svg"
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

export const Footer = () => {
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>map loading</p>,
      ssr: false
    }
  ), [])

  return (
    <motion.footer 
      id="footer" 
      className="bg-[#FFCC99] text-[#010D3E] py-10"
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
      <div className="container">
        <div className="flex py-12 flex-col gap-8 md:justify-between md:flex-row lg:flex-row lg:justify-between">
          <div className="flex-1 flex gap-8 flex-col">
            {/* <Image src={LogoMarchall} height={80} alt="Saas Logo" className="bg-white"/> */}
            <div className="inline-flex flex-col">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">ADDRESS</h2>
              <span className="text-base md:text-lg lg:text-xl">Jl. Wonorejo Selatan No.23, Wonorejo, Kec. Rungkut, Surabaya, Jawa Timur 60296</span>
            </div>
            <div className="inline-flex flex-col">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">CONTACT</h2>
              <span className="text-base md:text-lg lg:text-xl">085105035388 - JUNERI</span>
            </div>
            <div className="inline-flex flex-col">
                <a href="https://www.instagram.com/eatffups/" target="_blank" rel="noopener" title="follow us on instagram">
                  <Instagram />
                </a>
                
            </div>
          </div>
          <div className="flex-1">
            <span className="font-bold text-xl md:text-2xl lg:text-3xl">LOCATION</span>
            <Map position={[-7.3153392, 112.7978183,17]} zoom={12} />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
