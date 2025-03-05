import About from "@/sections/About";
import Advantages from "@/sections/Advantages";
import Flavors from "@/sections/Flavors";
import { Header } from "@/sections/Header";
import Products from "@/sections/Products";
import Tagline from "@/sections/Tagline";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Flavors />
      <Tagline />
      <Advantages />
      <Tagline />
      <Products />
    </>
  );
}
