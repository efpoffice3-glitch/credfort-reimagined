import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import HowItWorks from "@/components/HowItWorks";
import SimulatorSection from "@/components/SimulatorSection";
import WhyChoose from "@/components/WhyChoose";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";

const Index = () => (
  <div className="min-h-screen bg-background font-body">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <StatsBar />
    <HowItWorks />
    <SimulatorSection />
    <WhyChoose />
    <TestimonialsSection />
    <FAQSection />
    <FinalCTA />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
