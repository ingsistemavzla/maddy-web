import { MessageCircle } from "lucide-react";

interface StorySectionProps {
  onCTAClick: () => void;
}

export default function StorySection({ onCTAClick }: StorySectionProps) {
  return (
    <section id="historias" className="py-20 bg-gradient-to-r from-[#0074E4] to-[#FF6F61] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Mi historia puede ser la tuya
            </h2>
            
            <p className="text-lg text-white/95 leading-relaxed">
              Llegué de Venezuela a Estados Unidos en 2021 con un sueño y muchas dudas trabajé en limpieza, restaurantes... Agradecida, pero agotada y sin un futuro claro. Hasta que encontré una forma de crecer con propósito y libertad. Hoy, ayudo a latinos a lograr lo mismo: recuperar el control de sus vidas.
            </p>
            
            <button 
              onClick={onCTAClick}
              className="bg-coral hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] text-white px-9 py-4 rounded-[40px] font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.2)] mt-4"
              data-testid="button-story-cta"
            >
              Quiero conocer cómo lo lograste
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <img 
                src="/images/maddy-1.jpg" 
                alt="Maddy Peñuela - Mi historia" 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
