import { useState } from "react";
import { Sparkles, CheckCircle2, Loader2, User, Mail, Phone, MapPin, Hash } from "lucide-react";

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
  const [showZipList, setShowZipList] = useState(false);
  const [consent, setConsent] = useState(false);

  // Mismos 3 estados que el modal
  const estadosZipCodes: Record<string, string[]> = {
    "Tennessee": ["37010", "37011", "37012", "37013", "37014", "37015", "37016", "37018", "37019", "37020", "37022", "37027", "37029", "37030", "37031", "37032", "37034", "37035", "37036", "37037"],
    "Ohio": ["43001", "43002", "43003", "43004", "43005", "43006", "43007", "43008", "43009", "43010", "43011", "43013", "43014", "43015", "43016", "43017", "43018", "43019", "43021", "43022"],
    "New Jersey": ["07001", "07002", "07003", "07004", "07005", "07006", "07007", "07008", "07009", "07010", "07011", "07012", "07013", "07014", "07015", "07016", "07017", "07018", "07019", "07020"]
  };

  const getFilteredZips = () => {
    if (!formData.ciudad) return [];
    const zips = estadosZipCodes[formData.ciudad] || [];
    if (!formData.zip) return zips;
    return zips.filter(zip => zip.includes(formData.zip));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es requerido";
    if (!formData.telefono.trim() || formData.telefono.length !== 10) newErrors.telefono = "Ingresa 10 dígitos";
    if (!formData.ciudad.trim()) newErrors.ciudad = "Selecciona un estado";
    if (!formData.zip.trim()) newErrors.zip = "Selecciona un ZIP";
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
    
    if (!consent) {
      alert("Por favor, acepta el consentimiento de uso de datos");
      return;
    }
    
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
        setConsent(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
          {/* Nombre */}
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

          {/* Apellido */}
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
          
          {/* Email */}
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

          {/* Teléfono con prefijo +1 (fondo coral/rosado integrado) */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg flex items-stretch ${errors.telefono ? 'ring-2 ring-red-400' : ''}`}>
            <div className="flex items-center justify-center px-4 text-white font-bold text-lg" style={{ 
              background: 'linear-gradient(90deg, #FF9AA2 0%, #FFB6A3 100%)'
            }}>
              +1
            </div>
            <input
              type="tel"
              name="telefono"
              placeholder="1234567890"
              value={formData.telefono}
              onChange={handleChange}
              maxLength={10}
              className="flex-1 px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
              required
              data-testid="input-telefono"
            />
            {errors.telefono && (
              <p className="text-red-600 text-sm px-6 pb-2 absolute">{errors.telefono}</p>
            )}
          </div>
          
          {/* Estado */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.ciudad ? 'ring-2 ring-red-400' : ''}`}>
            <select
              name="ciudad"
              value={formData.ciudad}
              onChange={(e) => {
                handleChange(e);
                setFormData(prev => ({ ...prev, zip: "" }));
                setShowZipList(true);
              }}
              className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 text-lg"
              required
              data-testid="input-ciudad"
            >
              <option value="">Selecciona tu Estado</option>
              {Object.keys(estadosZipCodes).map((estado) => (
                <option key={estado} value={estado}>
                  {estado}
                </option>
              ))}
            </select>
            {errors.ciudad && (
              <p className="text-red-600 text-sm px-6 pb-2">{errors.ciudad}</p>
            )}
          </div>

          {/* ZIP Code con búsqueda integrada - solo aparece si hay estado seleccionado */}
          {formData.ciudad && (
            <div className="relative">
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg ${errors.zip ? 'ring-2 ring-red-400' : ''}`}>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, zip: e.target.value }));
                    setShowZipList(true);
                  }}
                  onFocus={() => setShowZipList(true)}
                  placeholder="Busca y selecciona ZIP Code"
                  maxLength={5}
                  className="w-full px-6 py-4 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
                  data-testid="input-zip"
                />
                {errors.zip && (
                  <p className="text-red-600 text-sm px-6 pb-2">{errors.zip}</p>
                )}
              </div>
              
              {showZipList && getFilteredZips().length > 0 && (
                <div className="absolute z-10 w-full mt-2 max-h-48 overflow-y-auto bg-white rounded-2xl border-2 border-gray-200 shadow-2xl">
                  {getFilteredZips().map((zip) => (
                    <button
                      key={zip}
                      type="button"
                      onClick={() => {
                        setFormData(prev => ({ ...prev, zip }));
                        setShowZipList(false);
                      }}
                      className="w-full px-6 py-3 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-none text-base font-medium text-gray-800"
                    >
                      {zip}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Checkbox de consentimiento */}
          <div className="flex items-center justify-center gap-3 bg-white/60 rounded-2xl p-5">
            <input
              type="checkbox"
              id="consent-footer"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="w-5 h-5 rounded border-2 border-blue-400 accent-blue-600"
            />
            <label htmlFor="consent-footer" className="text-base leading-tight font-medium" style={{ color: '#2D61A6' }}>
              Acepto el uso de mis datos para contactarme
            </label>
          </div>
          
          <div className="text-center pt-4">
            <button 
              type="submit"
              disabled={loading || !consent}
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
