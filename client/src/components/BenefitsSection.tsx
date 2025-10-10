import { ArrowUpRight, Laptop, BarChart3 } from "lucide-react";

const benefits = [
  {
    icon: ArrowUpRight,
    title: "Crecimiento Real",
    description: "Un sistema probado para que tus ingresos no tengan techo.",
    gradient: "from-red-400 to-red-500",
  },
  {
    icon: Laptop,
    title: "Acompañamiento",
    description: "Un equipo y una comunidad que te apoyan en cada paso.",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Libertad y Tiempo",
    description: "Recupera el control de tu horario y de tu vida personal.",
    gradient: "from-blue-500 to-blue-600",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${benefit.gradient} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              data-testid={`card-benefit-${index}`}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-white/90 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
