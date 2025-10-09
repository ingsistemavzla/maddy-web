import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustBadges from "@/components/TrustBadges";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TrustBadges />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
