import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import FeaturesSection from "@/components/sections/Features";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/Cta";
import ContactUs from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesSection/>
      <Stats/>
      <AboutUs/>
      <CTA/>
      <Pricing/>
      <ContactUs/>    
      <Footer/>
    </main>
  );
}