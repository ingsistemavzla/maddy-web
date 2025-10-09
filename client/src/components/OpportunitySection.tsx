import { Briefcase, Handshake, DollarSign, Clock, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Formación profesional certificada.",
    description: "Capacitación continua y certificaciones reconocidas",
  },
  {
    icon: Handshake,
    title: "Acompañamiento personalizado.",
    description: "Mentores que te guían en cada paso del camino",
  },
  {
    icon: DollarSign,
    title: "Libertad financiera.",
    description: "Ingresos ilimitados basados en tu esfuerzo",
  },
  {
    icon: Clock,
    title: "Flexibilidad total.",
    description: "Maneja tus propios horarios y ritmo de trabajo",
  },
  {
    icon: Rocket,
    title: "Crecimiento acelerado.",
    description: "Oportunidades de liderazgo y desarrollo",
  },
];

interface OpportunitySectionProps {
  onCTAClick: () => void;
}

export default function OpportunitySection({ onCTAClick }: OpportunitySectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Una oportunidad real para cambiar tu historia
          </h2>
          <p className="text-xl text-cyan-blue max-w-3xl mx-auto">
            En Carta Business Group, formamos y acompañamos a la comunidad latina para alcanzar libertad financiera y crecimiento profesional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const isCoralCard = index % 2 !== 0;
            return (
              <div 
                key={index}
                className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isCoralCard ? 'bg-coral text-white' : 'bg-white text-navy'
                }`}
                data-testid={`opportunity-card-${index}`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  isCoralCard ? 'bg-white' : 'bg-coral'
                }`}>
                  <benefit.icon className={`w-7 h-7 ${
                    isCoralCard ? 'text-coral' : 'text-white'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className={`leading-relaxed ${isCoralCard ? 'text-white/90' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <button 
            onClick={onCTAClick}
            className="bg-gradient-to-r from-coral to-cyan-blue hover:from-coral/90 hover:to-cyan-blue/90 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            data-testid="button-opportunity-cta"
          >
            QUIERO RECIBIR INFORMACIÓN Y ORIENTACIÓN
          </button>
        </div>
      </div>
    </section>
  );
}
