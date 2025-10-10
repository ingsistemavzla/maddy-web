import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface LeadFormProps {
  onSuccess?: () => void;
}

export default function LeadForm({ onSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    ciudad: "",
    zip: "",
    email: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
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
      alert("Por favor, revise los campos en rojo y corrija los errores.");
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
      console.log("📬 Respuesta del servidor:", result);

      if (result.success) {
        console.log("✅ Formulario enviado con éxito");
        setShowSuccess(true);
        setFormData({
          nombre: "",
          apellido: "",
          telefono: "",
          ciudad: "",
          zip: "",
          email: ""
        });
        
        setTimeout(() => {
          setShowSuccess(false);
          onSuccess?.();
        }, 3000);
      } else {
        console.error("❌ Error en la respuesta del servidor:", result.message);
        alert("Error al enviar el formulario: " + result.message);
      }
    } catch (error) {
      console.error("💥 Error en la solicitud fetch:", error);
      alert("Error al enviar el formulario. Por favor, intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-in zoom-in duration-300">
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
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-navy mb-6 text-center">
          Solicita información
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Completa el formulario y te contactaremos para brindarte más detalles sobre esta oportunidad
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Nombre *
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all ${
                errors.nombre ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Tu nombre"
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Apellido *
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all ${
                errors.apellido ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Tu apellido"
            />
            {errors.apellido && (
              <p className="text-red-500 text-sm mt-1">{errors.apellido}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all ${
                errors.telefono ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="(555) 123-4567"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Ciudad *
            </label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all ${
                errors.ciudad ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="Tu ciudad"
            />
            {errors.ciudad && (
              <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Código Postal *
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all ${
                errors.zip ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="12345"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm mt-1">{errors.zip}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-navy mb-2">
              Correo Electrónico *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all ${
                errors.email ? "border-red-500" : "border-gray-200"
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-8 bg-gradient-to-r from-coral to-cyan-blue hover:from-coral/90 hover:to-cyan-blue/90 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Enviar información
            </>
          )}
        </button>
      </form>
    </div>
  );
}
