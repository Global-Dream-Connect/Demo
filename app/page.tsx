import Banner from "@/components/banner";
import Footer from "@/components/fellowship/Footer";
import Navbar from "@/components/fellowship/Navbar";
import Brands from "@/components/home/Brands";
import HeroSection from "@/components/home/HeroSection";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <Banner></Banner> */}

      </main>

      <HeroSection />

      <Brands />
      <Footer />
    </>
  );
}

