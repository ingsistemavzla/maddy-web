import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import PainIdentificationSection from "@/components/PainIdentificationSection";
import StorySection from "@/components/StorySection";
import VideoSection from "@/components/VideoSection";
import ShapeDivider from "@/components/ShapeDivider";
import OpportunitySection from "@/components/OpportunitySection";
import AuthoritySection from "@/components/AuthoritySection";
import RecruitmentSection from "@/components/RecruitmentSection";
import TestimonialsCardsSection from "@/components/TestimonialsCardsSection";
import ClosingFormSection from "@/components/ClosingFormSection";
import { OrientationModal } from "@/components/OrientationModal";
import SEO from "@/components/SEO";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar onCTAClick={handleOpenModal} />
      <HeroSection onCTAClick={handleOpenModal} />
      <ShapeDivider />
      <BenefitsSection />
      <StatsSection />
      <VideoSection onCTAClick={handleOpenModal} />
      <PainIdentificationSection onCTAClick={handleOpenModal} />
      <StorySection onCTAClick={handleOpenModal} />
      <OpportunitySection onCTAClick={handleOpenModal} />
      <AuthoritySection />
      <RecruitmentSection onCTAClick={handleOpenModal} />
      <TestimonialsCardsSection onCTAClick={handleOpenModal} />
      <ClosingFormSection />
      <OrientationModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
