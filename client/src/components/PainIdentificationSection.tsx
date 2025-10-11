import { Frown, MessageCircle, DollarSign, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Frown,
    gradient: "bg-gradient-to-br from-[#FF9AA2] to-[#FFB6A3]",
    color1: "#FF9AA2",
    color2: "#FFB6A3",
    text: (
      <>
        ¿Trabajas <span className="underline decoration-2" style={{ color: '#FF9AA2' }}>sin descanso</span> y el <em style={{ color: '#FFB6A3' }}>dinero</em> no te alcanza?
      </>
    ),
  },
  {
    icon: MessageCircle,
    gradient: "bg-gradient-to-br from-[#4169E1] to-[#0047AB]",
    color1: "#4169E1",
    color2: "#0047AB",
    text: (
      <>
        ¿Sientes que <span className="underline decoration-2" style={{ color: '#4169E1' }}>no avanzas</span> a pesar de tu <em style={{ color: '#0047AB' }}>esfuerzo</em>?
      </>
    ),
  },
  {
    icon: DollarSign,
    gradient: "bg-gradient-to-br from-[#FF9966] to-[#FF7F50]",
    color1: "#FF9966",
    color2: "#FF7F50",
    text: (
      <>
        ¿El <em style={{ color: '#FF9966' }}>"sueño americano"</em> se siente como una <span className="underline decoration-2" style={{ color: '#FF7F50' }}>rutina</span>?
      </>
    ),
  },
  {
    icon: Clock,
    gradient: "bg-gradient-to-br from-[#40E0D0] to-[#7FDBFF]",
    color1: "#40E0D0",
    color2: "#7FDBFF",
    text: (
      <>
        ¿Deseas más <span className="underline decoration-2" style={{ color: '#40E0D0' }}>control</span> sobre tu <em style={{ color: '#7FDBFF' }}>tiempo</em> y tu <em style={{ color: '#7FDBFF' }}>vida</em>?
      </>
    ),
  },
];

interface PainIdentificationSectionProps {
  onCTAClick: () => void;
}

export default function PainIdentificationSection({ onCTAClick }: PainIdentificationSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-blue/20 to-transparent"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-navy mb-3">
            ¿Te identificas?
          </h2>
          <div className="w-24 h-1 bg-coral mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-6 mb-8">
          {painPoints.map((point, index) => {
            const isEven = index % 2 === 0;
            const alignmentClass = isEven ? "mr-auto" : "ml-auto";
            const animationClass = isEven ? "animate-slide-in-left" : "animate-slide-in-right";
            
            return (
              <div 
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 max-w-2xl ${alignmentClass} ${animationClass}`}
                style={{ animationDelay: `${index * 200}ms` }}
                data-testid={`pain-point-${index}`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${point.gradient} rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <point.icon className="w-9 h-9 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-lg font-semibold text-gray-800">
                    {point.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-lg italic text-coral font-medium mb-8">
            "Yo también me sentí así… hasta que entendí que no era falta de esfuerzo, sino de dirección. Hoy quiero compartir contigo ese nuevo camino."
          </p>
          <button
            onClick={onCTAClick}
            className="bg-gradient-to-r from-coral to-cyan-blue text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quiero conocer cómo lo lograste
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-left {
            animation: slideInLeft 0.8s ease-out forwards;
            opacity: 0;
          }

          .animate-slide-in-right {
            animation: slideInRight 0.8s ease-out forwards;
            opacity: 0;
          }
        `
      }} />
    </section>
  );
}
