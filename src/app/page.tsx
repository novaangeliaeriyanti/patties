import About from "@/sections/About";
import Advantages from "@/sections/Advantages";
import Advantages2 from "@/sections/Advantages2";
import Advantages3 from "@/sections/Advantages3";
import Flavors from "@/sections/Flavors";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import Products from "@/sections/Products";
import Tagline from "@/sections/Tagline";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Flavors />
      <Advantages />
      <Advantages2 />
      <Advantages3 />
      <Tagline />     
      <Flavors />
      <Footer />
    </>
  );
}
