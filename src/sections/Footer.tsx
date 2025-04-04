"use client"
import { motion } from "framer-motion"
import Image from "next/image";
import Logo from "@/assets/logocamilanjworo.png"
import Instagram from "@/assets/instagram.svg"
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "@/translations/provider";

export const Footer = () => {
  const { translations } = useTranslation();
  const Map = useMemo(() => dynamic(
    () => import('@/components/Map'),
    { 
      loading: () => <p>map loading</p>,
      ssr: false
    }
  ), [])

  return (
    <footer 
      id="footer" 
      className="bg-[#FFCC99] text-[#010D3E] py-10"
    >
      <motion.div 
        className="container"
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
        <div className="flex py-12 flex-col gap-8 md:justify-between md:flex-row lg:flex-row lg:justify-between">
          <div className="flex-1 flex gap-8 flex-col">
            <Image src={Logo} height={80} alt="Logo" className="h-24 w-24"/>
            <div className="inline-flex flex-col">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{translations.footer_address}</h2>
              <span className="text-base md:text-lg lg:text-xl">Perumahan Griya Nagoya, Sambirejo, Pare, Kediri Regency, East Java 64226</span>
            </div>
            <div className="inline-flex flex-col">
              <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{translations.footer_contact}</h2>
              <span className="text-base md:text-lg lg:text-xl">085334920000 - LINDA MARIA JATISWORO</span>
            </div>
            <div className="inline-flex flex-col">
                <a href="https://www.instagram.com/camilanjworo" target="_blank" rel="noopener" title="follow us on instagram">
                  <Instagram />
                </a>
                
            </div>
          </div>
          <motion.div 
            className="flex-1"
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
            <span className="font-bold text-xl md:text-2xl lg:text-3xl">{translations.footer_location}</span>
            <Map center={[-7.7671891,112.1421889]} zoom={12} />
          </motion.div>
        </div>
        <div className="flex justify-center items-center text-xl md:text-3xl lg:text-3xl">🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓🍓</div>
      </motion.div>
    </footer>
  );
};
