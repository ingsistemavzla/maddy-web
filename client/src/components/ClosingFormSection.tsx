import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function ClosingFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    city: "",
    goal: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#0074E4] to-[#FF6F61] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-pulse">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-20 left-40 animate-pulse" style={{ animationDelay: '2s' }}>
          <Sparkles className="w-10 h-10 text-white" />
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Tu historia también puede cambiar
          </h2>
          <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            No importa dónde estés, solo importa que empieces hoy. Completa el formulario y da el primer paso hacia tu transformación.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-name"
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-whatsapp"
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-city"
            />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
            <textarea
              name="goal"
              placeholder="Tu meta personal en una frase"
              value={formData.goal}
              onChange={handleChange}
              rows={3}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg resize-none"
              required
              data-testid="input-goal"
            />
          </div>
          
          <div className="text-center pt-4">
            <button 
              type="submit"
              className="bg-coral hover:bg-cyan-blue text-white px-12 py-5 rounded-[25px] font-bold text-xl uppercase shadow-[0_4px_15px_rgba(242,141,119,0.3)] hover:shadow-[0_0_20px_rgba(4,138,191,0.4)] transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
              data-testid="button-submit-form"
            >
              QUIERO DAR EL PRIMER PASO
            </button>
          </div>
        </form>
      </div>
      
      <div className="mt-16 pt-8 border-t border-white/20">
        <p className="text-center text-white/80 text-sm">
          © 2025 Maddy Peñuela | Carta Business Group — Inspirando y guiando a la comunidad latina en EE.UU.
        </p>
      </div>
    </section>
  );
}
