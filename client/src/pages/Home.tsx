import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <RecruitmentSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
