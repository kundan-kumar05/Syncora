import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import About from "@/components/About";
import Features from "@/components/Features";
import Modules from "@/components/Modules";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100 flex flex-col antialiased">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <About />
        <Features />
        <Modules />
        <Process />
        <Industries />
        <CaseStudies />
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}
