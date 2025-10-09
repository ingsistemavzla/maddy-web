import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Daniela M.",
    location: "Florida",
    quote: "Era madre soltera y sin tiempo… hoy manejo mis horarios y mis ingresos.",
    initials: "DM",
  },
  {
    name: "José R.",
    location: "Tennessee",
    quote: "Pensé que era imposible empezar sin inglés. Hoy soy líder de equipo.",
    initials: "JR",
  },
  {
    name: "Luz P.",
    location: "New Jersey",
    quote: "Llegué con miedo, pero encontré una familia y una carrera estable.",
    initials: "LP",
  },
];

interface TestimonialsCardsSectionProps {
  onCTAClick: () => void;
}

export default function TestimonialsCardsSection({ onCTAClick }: TestimonialsCardsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Historias que inspiran 💫
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conoce a otros que ya están viviendo su transformación
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-coral border-2 border-transparent transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
              data-testid={`testimonial-card-${index}`}
            >
              <Quote className="w-10 h-10 text-coral mb-4 opacity-50" />
              
              <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <Avatar className="w-14 h-14 border-2 border-coral">
                  <AvatarFallback className="bg-coral text-white font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button 
            onClick={onCTAClick}
            className="bg-gradient-to-r from-[#FF6F61] to-coral hover:shadow-[0_0_20px_rgba(255,111,97,0.5)] text-white px-10 py-4 rounded-full font-bold text-lg uppercase transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            data-testid="button-testimonials-cta"
          >
            Quiero ser el próximo testimonio
          </button>
        </div>
      </div>
    </section>
  );
}
