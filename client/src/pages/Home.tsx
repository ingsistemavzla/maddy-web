import { useState } from "react";
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
import { OrientationModal } from "@/components/OrientationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection onCTAClick={handleOpenModal} />
      <BenefitsSection />
      <StatsSection />
      <PainIdentificationSection onCTAClick={handleOpenModal} />
      <StorySection />
      <OpportunitySection onCTAClick={handleOpenModal} />
      <AuthoritySection />
      <RecruitmentSection onCTAClick={handleOpenModal} />
      <TestimonialsCardsSection onCTAClick={handleOpenModal} />
      <ClosingFormSection />
      <OrientationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
