import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SignSwitch from "@/components/SignSwitch";
import Process from "@/components/Process";
import Differentiator from "@/components/Differentiator";
import Finish from "@/components/Finish";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import MidCTA from "@/components/MidCTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SignSwitch />
        <Process />
        <Differentiator />
        <Finish />
        <Services />
        <Portfolio />
        <MidCTA />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
