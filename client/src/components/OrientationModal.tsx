import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { CheckCircle2, AlertCircle, Loader2, User, Mail, Phone, MapPin, Hash } from "lucide-react";
import maddyImage from "@assets/20250910_2242_image (1)_1760024166015.png";

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface OrientationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export const OrientationModal = ({ isOpen, onOpenChange }: OrientationModalProps) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ciudad: "",
    zip: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showZipList, setShowZipList] = useState(false);
  const [consent, setConsent] = useState(false);

  const estadosZipCodes: Record<string, string[]> = {
    "Tennessee": ["37010", "37011", "37012", "37013", "37014", "37015", "37016", "37018", "37019", "37020", "37022", "37027", "37029", "37030", "37031", "37032"],
    "Ohio": ["43001", "43002", "43003", "43004", "43005", "43006", "43007", "43008", "43009", "43010", "43011", "43013", "43014", "43015", "43016", "43017"],
    "New Jersey": ["07001", "07002", "07003", "07004", "07005", "07006", "07007", "07008", "07009", "07010", "07011", "07012", "07013", "07014", "07015", "07016"]
  };

  const getFilteredZips = () => {
    if (!formData.ciudad) return [];
    const zips = estadosZipCodes[formData.ciudad] || [];
    if (!formData.zip) return zips;
    return zips.filter(zip => zip.includes(formData.zip));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!consent) {
      alert("Por favor, acepta el consentimiento");
      return;
    }

    if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono || !formData.ciudad || !formData.zip) {
      alert("Completa todos los campos");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ nombre: "", apellido: "", email: "", telefono: "", ciudad: "", zip: "" });
        setConsent(false);
        setTimeout(() => { onOpenChange(false); setSuccess(false); }, 3000);
      } else {
        alert("❌ Error al enviar");
      }
    } catch (error) {
      alert("❌ Error de conexión");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setFormData({ nombre: "", apellido: "", email: "", telefono: "", ciudad: "", zip: "" });
      setErrors({});
      setSuccess(false);
      setError("");
      setShowZipList(false);
      setConsent(false);
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="rounded-[20px] p-0 max-w-2xl w-[90%] md:w-[85%] border-none animate-fadeInUp" style={{ 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(250, 250, 250, 0.95) 50%, rgba(255, 255, 255, 0.9) 100%)',
        backdropFilter: 'blur(30px)',
        boxShadow: '0 8px 32px 0 rgba(100, 100, 100, 0.2), inset 0 0 100px rgba(255,255,255,0.8)',
        border: '1px solid rgba(255, 255, 255, 0.9)'
      }}>
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/2 relative">
            <img src={maddyImage} alt="Maddy Peñuela" className="object-cover w-full h-full rounded-l-[20px]" />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6F61] to-[#0074E4] rounded-bl-[20px]" />
            <DialogClose asChild>
              <button className="absolute top-4 right-4 w-8 h-8 bg-[#FF6F61] rounded-full text-white flex items-center justify-center hover:bg-[#048ABF] hover:rotate-90 transition-all duration-300 z-10">
                <XIcon />
              </button>
            </DialogClose>
          </div>

          <div className="md:hidden absolute top-4 right-4 z-10">
            <DialogClose asChild>
              <button className="w-8 h-8 bg-[#FF6F61] rounded-full text-white flex items-center justify-center hover:bg-[#048ABF] hover:rotate-90 transition-all duration-300">
                <XIcon />
              </button>
            </DialogClose>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8">
            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-xl md:text-2xl font-bold mb-2" style={{ color: '#2D61A6' }}>
                🚀 ¡Da el primer paso!
              </DialogTitle>
              <DialogDescription className="text-sm" style={{ color: '#4A90E2' }}>
                Completa tus datos
              </DialogDescription>
            </DialogHeader>

            {success ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#2D61A6' }}>¡Gracias!</h3>
                <p className="text-gray-600">Pronto te contactaremos.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <p className="text-red-600 text-xs">{error}</p>
                  </div>
                )}

                {/* Nombre */}
                <div className="p-[3px] rounded-2xl" style={{ background: errors.nombre ? 'linear-gradient(90deg, #F28D77, #FF6F61)' : 'linear-gradient(90deg, #4A90E2, #FF9AA2)' }}>
                  <div className="flex items-stretch rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center px-3" style={{ background: 'linear-gradient(135deg, #4A90E2, #2D61A6)' }}>
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <Input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre"
                      className="flex-1 px-4 py-2.5 border-none bg-transparent"
                      disabled={loading}
                      autoFocus
                    />
                  </div>
                </div>
                {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre}</p>}

                {/* Apellido */}
                <div className="p-[3px] rounded-2xl" style={{ background: errors.apellido ? 'linear-gradient(90deg, #F28D77, #FF6F61)' : 'linear-gradient(90deg, #FF9AA2, #4A90E2)' }}>
                  <div className="flex items-stretch rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center px-3" style={{ background: 'linear-gradient(135deg, #FF9AA2, #FFB6A3)' }}>
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <Input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      placeholder="Apellido"
                      className="flex-1 px-4 py-2.5 border-none bg-transparent"
                      disabled={loading}
                    />
                  </div>
                </div>
                {errors.apellido && <p className="text-red-600 text-xs mt-1">{errors.apellido}</p>}

                {/* Email */}
                <div className="p-[3px] rounded-2xl" style={{ background: errors.email ? 'linear-gradient(90deg, #F28D77, #FF6F61)' : 'linear-gradient(90deg, #2D61A6, #FFB6A3)' }}>
                  <div className="flex items-stretch rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center px-3" style={{ background: 'linear-gradient(135deg, #2D61A6, #4A90E2)' }}>
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Correo electrónico"
                      className="flex-1 px-4 py-2.5 border-none bg-transparent"
                      disabled={loading}
                    />
                  </div>
                </div>
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}

                {/* Teléfono */}
                <div className="p-[3px] rounded-2xl" style={{ background: errors.telefono ? 'linear-gradient(90deg, #F28D77, #FF6F61)' : 'linear-gradient(90deg, #4A90E2, #FF9AA2)' }}>
                  <div className="flex items-stretch rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center px-3" style={{ background: 'linear-gradient(90deg, #2D61A6, #4A90E2)' }}>
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center px-3 text-white font-bold text-sm" style={{ background: 'linear-gradient(90deg, #2D61A6, #4A90E2)' }}>
                      +1
                    </div>
                    <Input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="1234567890"
                      maxLength={10}
                      className="flex-1 px-4 py-2.5 border-none bg-transparent"
                      disabled={loading}
                    />
                  </div>
                </div>
                {errors.telefono && <p className="text-red-600 text-xs mt-1">{errors.telefono}</p>}

                {/* Estado */}
                <div className="p-[3px] rounded-2xl" style={{ background: errors.ciudad ? 'linear-gradient(90deg, #F28D77, #FF6F61)' : 'linear-gradient(90deg, #FFB6A3, #2D61A6)' }}>
                  <div className="flex items-stretch rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center px-3" style={{ background: 'linear-gradient(135deg, #FFB6A3, #FF9AA2)' }}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <select
                      value={formData.ciudad}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, ciudad: e.target.value, zip: "" }));
                        setShowZipList(true);
                      }}
                      className="flex-1 px-4 py-2.5 border-none bg-transparent"
                      disabled={loading}
                    >
                      <option value="">Selecciona Estado</option>
                      {Object.keys(estadosZipCodes).map((estado) => (
                        <option key={estado} value={estado}>{estado}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {errors.ciudad && <p className="text-red-600 text-xs mt-1">{errors.ciudad}</p>}

                {/* ZIP Code con búsqueda integrada */}
                {formData.ciudad && (
                  <div className="relative">
                    <div className="p-[3px] rounded-2xl" style={{ background: errors.zip ? 'linear-gradient(90deg, #F28D77, #FF6F61)' : 'linear-gradient(90deg, #2D61A6, #FF9AA2)' }}>
                      <div className="flex items-stretch rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm">
                        <div className="flex items-center justify-center px-3" style={{ background: 'linear-gradient(135deg, #2D61A6, #4A90E2)' }}>
                          <Hash className="w-5 h-5 text-white" />
                        </div>
                        <Input
                          type="text"
                          value={formData.zip}
                          onChange={(e) => {
                            setFormData(prev => ({ ...prev, zip: e.target.value }));
                            setShowZipList(true);
                          }}
                          onFocus={() => setShowZipList(true)}
                          placeholder="Busca y selecciona ZIP"
                          maxLength={5}
                          className="flex-1 px-4 py-2.5 border-none bg-transparent"
                          disabled={loading}
                        />
                      </div>
                    </div>
                    
                    {showZipList && getFilteredZips().length > 0 && (
                      <div className="absolute z-10 w-full mt-1 max-h-40 overflow-y-auto bg-white rounded-xl border-2 border-gray-200 shadow-xl">
                        {getFilteredZips().map((zip) => (
                          <button
                            key={zip}
                            type="button"
                            onClick={() => {
                              setFormData(prev => ({ ...prev, zip }));
                              setShowZipList(false);
                            }}
                            className="w-full px-4 py-2 text-left hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-none text-sm"
                          >
                            {zip}
                          </button>
                        ))}
                      </div>
                    )}
                    {errors.zip && <p className="text-red-600 text-xs mt-1">{errors.zip}</p>}
                  </div>
                )}

                {/* Checkbox */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-2 border-blue-500 accent-blue-600"
                  />
                  <label htmlFor="consent" className="text-xs text-gray-700 leading-tight">
                    Acepto el uso de mis datos
                  </label>
                </div>

                <DialogFooter className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading || !consent}
                    className="w-full text-white font-bold text-sm py-3 px-6 border-none transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{
                      background: 'linear-gradient(90deg, #2D61A6 0%, #4A90E2 100%)',
                      boxShadow: '0 8px 18px rgba(0, 0, 0, 0.25)',
                      borderRadius: '50px'
                    }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>Enviar Aplicación</>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            )}

            <div className="text-center mt-4">
              <p className="text-gray-600 text-xs">🔒 Datos protegidos</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
