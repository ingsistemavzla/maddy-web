import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import PainIdentificationSection from "@/components/PainIdentificationSection";
import StorySection from "@/components/StorySection";
import OpportunitySection from "@/components/OpportunitySection";
import AuthoritySection from "@/components/AuthoritySection";
import RecruitmentSection from "@/components/RecruitmentSection";
import TestimonialsCardsSection from "@/components/TestimonialsCardsSection";
import ClosingFormSection from "@/components/ClosingFormSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <StatsSection />
      <PainIdentificationSection />
      <StorySection />
      <OpportunitySection />
      <AuthoritySection />
      <RecruitmentSection />
      <TestimonialsCardsSection />
      <ClosingFormSection />
    </div>
  );
}
