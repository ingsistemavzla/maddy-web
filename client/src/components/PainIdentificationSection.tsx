import { Frown, MessageCircle, DollarSign, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Frown,
    text: "¿Sientes que trabajas sin ver resultados reales?",
  },
  {
    icon: MessageCircle,
    text: "¿Te frustra no tener claridad sobre tu futuro profesional?",
  },
  {
    icon: DollarSign,
    text: "¿Cansado de ingresos que no reflejan tu esfuerzo?",
  },
  {
    icon: Clock,
    text: "¿Deseas más control sobre tu tiempo y tu vida?",
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
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`pain-point-${index}`}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg italic text-coral font-medium mb-8">
            “Yo también pasé por eso… y descubrí que el problema no era mi esfuerzo, sino el camino que estaba siguiendo.”
          </p>
          <button
            onClick={onCTAClick}
            className="bg-gradient-to-r from-coral to-cyan-blue text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            💬 Quiero conocer cómo lo lograste
          </button>
        </div>
      </div>
    </section>
  );
}
