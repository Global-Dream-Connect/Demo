
import Footer from "@/components/fellowship/Footer";
import Navbar from "@/components/fellowship/Navbar";
import BecomeAMentor from "@/components/home/BecomeAMentor";
import Brands from "@/components/home/Brands";
import CallToAction from "@/components/home/CallToAction";
import DreamsBecomingReality from "@/components/home/DreamsBecomingReality";
import FreeResources from "@/components/home/FreeResources";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import SuccessStories from "@/components/home/SuccessStories";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
      </main> */}

      <HeroSection />
      <Brands />
      <HowItWorks/>
      <FreeResources/>
      <DreamsBecomingReality/>
      <SuccessStories/>
      <BecomeAMentor/>
      <CallToAction/>
      <Footer />
    </>
  );
}

