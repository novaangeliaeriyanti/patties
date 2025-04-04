"use client";
import React from "react";

interface ButtonProps {
    text: string;
    color?: string;
    onTap?:any
}  
const Button: React.FC<ButtonProps> = ({ text, color, onTap }) => {
  return (
    <button onClick={onTap} className="w-3/4 max-w-[36rem] md:w-1/2 lg:w-full py-4 px-8 bg-[#F9F7B9] border-4 border-black rounded-3xl gap-3 lg:border-[9px] text-2xl font-bold md:text-3xl lg:text-5xl transition-all duration-500 ease-out hover:bg-[#E8C6DE] hover:rounded-[2.5rem]">
      {text}
    </button>
  );
};

export default Button;
