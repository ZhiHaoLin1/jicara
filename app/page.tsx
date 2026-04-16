import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ZapotecBand from "./components/ZapotecBand";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Instagram from "./components/Instagram";
import Info from "./components/Info";
import MapSection from "./components/MapSection";
import Reservations from "./components/Reservations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const zapotecText =
    "Hand-pressed tortillas · Wood-fired al pastor · Mole negro de Oaxaca · Mezcal artesanal · Tlayudas · Private dining · Catering · Mercado flavors · ";

  const sageText =
    "Heirloom maíz from Oaxaca's Central Valleys · Wood-fired comal every morning · 40 mezcals, all artisanal · The mole negro takes three days · Every tlayuda hand-stretched · ";

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ZapotecBand text={zapotecText} />
        <Story />
        <ZapotecBand
          text={sageText}
          bgColor="bg-sage"
          textColor="text-straw/70"
          speed="animate-marquee-slow"
          font="font-lora italic tracking-[0.08em]"
          textSize="text-[15px]"
        />
        <Menu />
        <Instagram />
        <Info />
        <MapSection />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
