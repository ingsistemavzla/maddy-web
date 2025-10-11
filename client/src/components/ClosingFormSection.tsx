import { useState } from "react";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";

export default function ClosingFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    ciudad: "",
    zip: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es requerido";
    if (!formData.telefono.trim()) newErrors.telefono = "El teléfono es requerido";
    if (!formData.ciudad.trim()) newErrors.ciudad = "La ciudad es requerida";
    if (!formData.zip.trim()) newErrors.zip = "El ZIP es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({
          nombre: "",
          apellido: "",
          telefono: "",
          ciudad: "",
          zip: "",
          email: "",
        });
        
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        alert("Error al enviar el formulario: " + result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el formulario. Por favor, intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-[#3A7FF7] to-[#234A75] relative overflow-hidden">
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
            Tu historia también <span className="text-coral">puede cambiar</span>
          </h2>
          <p className="text-xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            El cambio empieza cuando decides creer en ti. Si has llegado hasta aquí es porque sabes que mereces más. Permíteme acompañarte a lograrlo.
          </p>
        </div>

        {success && (
          <div className="mb-8 bg-white rounded-2xl p-8 shadow-2xl animate-in fade-in duration-300">
            <div className="text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy mb-2">
                ¡Información enviada!
              </h3>
              <p className="text-gray-600">
                Tu información ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.
              </p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.nombre ? 'ring-2 ring-red-400' : ''}`}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-nombre"
            />
            {errors.nombre && (
              <p className="text-red-600 text-sm px-6 pb-2">{errors.nombre}</p>
            )}
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.apellido ? 'ring-2 ring-red-400' : ''}`}>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-apellido"
            />
            {errors.apellido && (
              <p className="text-red-600 text-sm px-6 pb-2">{errors.apellido}</p>
            )}
          </div>
          
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.email ? 'ring-2 ring-red-400' : ''}`}>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm px-6 pb-2">{errors.email}</p>
            )}
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.telefono ? 'ring-2 ring-red-400' : ''}`}>
            <input
              type="tel"
              name="telefono"
              placeholder="Número de teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-telefono"
            />
            {errors.telefono && (
              <p className="text-red-600 text-sm px-6 pb-2">{errors.telefono}</p>
            )}
          </div>
          
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.ciudad ? 'ring-2 ring-red-400' : ''}`}>
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-ciudad"
            />
            {errors.ciudad && (
              <p className="text-red-600 text-sm px-6 pb-2">{errors.ciudad}</p>
            )}
          </div>

          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.zip ? 'ring-2 ring-red-400' : ''}`}>
            <input
              type="text"
              name="zip"
              placeholder="Código Postal (ZIP)"
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-zip"
            />
            {errors.zip && (
              <p className="text-red-600 text-sm px-6 pb-2">{errors.zip}</p>
            )}
          </div>
          
          <div className="text-center pt-4">
            <button 
              type="submit"
              disabled={loading}
              className="bg-coral hover:bg-cyan-blue text-white px-12 py-5 rounded-[25px] font-bold text-xl uppercase shadow-[0_4px_15px_rgba(242,141,119,0.3)] hover:shadow-[0_0_20px_rgba(4,138,191,0.4)] transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
              data-testid="button-submit-form"
            >
              {loading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Enviando...
                </>
              ) : (
                "QUIERO DAR EL PRIMER PASO"
              )}
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
