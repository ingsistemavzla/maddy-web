import { Briefcase, Handshake, DollarSign, Clock, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Formación profesional",
    description: "Capacitación continua y certificaciones reconocidas",
  },
  {
    icon: Handshake,
    title: "Acompañamiento personalizado",
    description: "Mentores que te guían en cada paso del camino",
  },
  {
    icon: DollarSign,
    title: "Libertad financiera",
    description: "Ingresos ilimitados basados en tu esfuerzo",
  },
  {
    icon: Clock,
    title: "Flexibilidad total",
    description: "Maneja tus propios horarios y ritmo de trabajo",
  },
  {
    icon: Rocket,
    title: "Crecimiento acelerado",
    description: "Oportunidades de liderazgo y desarrollo",
  },
];

export default function OpportunitySection() {
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
            En Carta Business Group formamos y acompañamos a personas latinas para alcanzar 
            libertad financiera y crecimiento profesional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300`}
              data-testid={`opportunity-card-${index}`}
            >
              <div className="w-14 h-14 bg-coral rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            className="bg-gradient-to-r from-coral to-cyan-blue hover:from-coral/90 hover:to-cyan-blue/90 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            data-testid="button-opportunity-cta"
          >
            🔹 Quiero recibir información y orientación
          </button>
        </div>
      </div>
    </section>
  );
}
