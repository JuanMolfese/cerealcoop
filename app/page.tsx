import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Values from "@/components/Values/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerealcoop",
  description: "Pagina web de la cooperativa Cerealcoop",  
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Values/>
      <Features />         
      <Contact />
    </>
  );
}
