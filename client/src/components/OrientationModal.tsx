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
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import maddyImage from "@assets/20250910_2242_image (1)_1760024166015.png";

// Icons - using simple placeholders for now
const UserIcon = () => <span>&#128100;</span>;
const PhoneIcon = () => <span>&#128241;</span>;
const PinIcon = () => <span>&#128205;</span>;
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface OrientationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

interface CiudadZipOption {
  label: string;
  estado: string;
  zip: string;
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

  // Estados y códigos postales importantes de EE.UU.
  const estadosZipCodes = {
    "California": ["90210", "90211", "90212", "90213", "90220", "90221", "90222", "90230", "90232", "90240"],
    "Texas": ["77001", "77002", "77003", "77004", "77005", "77006", "77007", "77008", "77009", "77010"],
    "Florida": ["33101", "33102", "33109", "33110", "33111", "33112", "33114", "33116", "33122", "33124"],
    "New York": ["10001", "10002", "10003", "10004", "10005", "10006", "10007", "10008", "10009", "10010"],
    "Pennsylvania": ["19101", "19102", "19103", "19104", "19105", "19106", "19107", "19108", "19109", "19110"],
    "Illinois": ["60601", "60602", "60603", "60604", "60605", "60606", "60607", "60608", "60609", "60610"],
    "Ohio": ["44101", "44102", "44103", "44104", "44105", "44106", "44107", "44108", "44109", "44110"],
    "Georgia": ["30301", "30302", "30303", "30304", "30305", "30306", "30307", "30308", "30309", "30310"],
    "North Carolina": ["28201", "28202", "28203", "28204", "28205", "28206", "28207", "28208", "28209", "28210"],
    "Michigan": ["48201", "48202", "48203", "48204", "48205", "48206", "48207", "48208", "48209", "48210"]
  };

  // Crear opciones para el select
  const ciudadZipOptions: CiudadZipOption[] = [];
  for (const [estado, zips] of Object.entries(estadosZipCodes)) {
    zips.forEach(zip => {
      ciudadZipOptions.push({
        label: `${estado} - ${zip}`,
        estado,
        zip
      });
    });
  }

  // Validation patterns
  const patterns = {
    nombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    apellido: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    telefono: /^[\d\-\+\(\)\s]{10,15}$/,
    ciudad: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}$/,
    zip: /^\d{5}$/
  };

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${getFieldLabel(name)} es requerido`;
    }

    if (!patterns[name as keyof typeof patterns].test(value)) {
      switch (name) {
        case 'email':
          return 'Ingresa un email válido';
        case 'telefono':
          return 'Ingresa un teléfono válido';
        case 'nombre':
        case 'apellido':
          return 'Solo letras y espacios (2-50 caracteres)';
        case 'ciudad':
          return 'Ingresa una ciudad válida';
        default:
          return 'Campo inválido';
      }
    }

    return '';
  };

  const getFieldLabel = (fieldName: string) => {
    const labels: Record<string, string> = {
      nombre: 'Nombre',
      apellido: 'Apellido',
      email: 'Correo electrónico',
      telefono: 'Teléfono',
      ciudad: 'Ciudad'
    };
    return labels[fieldName] || fieldName;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        // Show success alert
        alert("✅ Tus datos se han enviado correctamente");
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          ciudad: "",
          zip: ""
        });

        // Auto-close after 3 seconds
        setTimeout(() => {
          onOpenChange(false);
          setSuccess(false);
        }, 3000);
      } else {
        setError(result.message || "Ha ocurrido un problema con el registro por favor inténtelo nuevamente");
        alert("❌ Ha ocurrido un problema con el registro por favor inténtelo nuevamente");
      }
    } catch (error) {
      console.error('Error:', error);
      setError("Ha ocurrido un problema con el registro por favor inténtelo nuevamente");
      alert("❌ Ha ocurrido un problema con el registro por favor inténtelo nuevamente");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        ciudad: "",
        zip: ""
      });
      setErrors({});
      setSuccess(false);
      setError("");
      onOpenChange(false);
    }
  };

  const handleCiudadZipChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      const [estado, zip] = selectedValue.split(' - ');
      setFormData(prev => ({
        ...prev,
        ciudad: estado,
        zip: zip
      }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-[#FFFFF3] rounded-[24px] p-0 max-w-4xl w-full shadow-[0_0_40px_rgba(0,0,0,0.15)] border-none animate-fadeInUp">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image (appears first on mobile, second on desktop) */}
          <div className="w-full md:w-1/2 order-1 md:order-1 relative">
            <img
              src={maddyImage}
              alt="Maddy Peñuela"
              className="object-cover w-full h-full rounded-l-[24px] md:rounded-l-[24px] md:rounded-r-none"
            />
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6F61] to-[#0074E4] rounded-bl-[24px] md:rounded-bl-[24px] md:rounded-br-none" />
            <DialogClose asChild>
              <button className="absolute top-4 right-4 w-8 h-8 bg-[#FF6F61] rounded-full text-white flex items-center justify-center hover:bg-[#048ABF] hover:rotate-90 transition-all duration-300 z-10">
                <XIcon />
              </button>
            </DialogClose>
          </div>

          {/* Right Side - Form (appears second on mobile, first on desktop) */}
          <div className="w-full md:w-1/2 p-8 order-2 md:order-2">
            <DialogHeader className="text-left mb-6">
              <DialogTitle className="text-[#102C3A] text-3xl font-bold font-poppins mb-2">
                🚀 ¡Da el primer paso hacia tu nueva oportunidad!
              </DialogTitle>
              <DialogDescription className="text-[#26358C] font-montserrat text-lg">
                Completa tus datos y nuestro equipo te contactará para orientarte.
              </DialogDescription>
            </DialogHeader>

            {success ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#002C5F] mb-2">
                  ¡Gracias!
                </h3>
                <p className="text-[#6B7A8F]">
                  Pronto te contactaremos para agendar tu orientación inicial gratuita.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6">
                  {/* Nombre completo */}
                  <div>
                    <Input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      placeholder="Nombre completo"
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-[#F7F7F7] border-[#CCCCCC] focus:border-[#048ABF] focus:ring-2 focus:ring-[#048ABF]/50 transition-all ${
                        errors.nombre ? "border-[#F28D77]" : ""
                      }`}
                      disabled={loading}
                      autoFocus
                    />
                    {errors.nombre && (
                      <p className="text-[#F28D77] text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.nombre}
                      </p>
                    )}
                  </div>

                  {/* Teléfono móvil */}
                  <div>
                    <Input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      placeholder="Teléfono móvil"
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-[#F7F7F7] border-[#CCCCCC] focus:border-[#048ABF] focus:ring-2 focus:ring-[#048ABF]/50 transition-all ${
                        errors.telefono ? "border-[#F28D77]" : ""
                      }`}
                      disabled={loading}
                    />
                    {errors.telefono && (
                      <p className="text-[#F28D77] text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.telefono}
                      </p>
                    )}
                  </div>

                  {/* Ciudad / Estado - ZIP */}
                  <div>
                    <select
                      value={formData.ciudad && formData.zip ? `${formData.ciudad} - ${formData.zip}` : ""}
                      onChange={handleCiudadZipChange}
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-[#F7F7F7] border-[#CCCCCC] focus:border-[#048ABF] focus:ring-2 focus:ring-[#048ABF]/50 transition-all text-[#102C3A] ${
                        errors.ciudad || errors.zip ? "border-[#F28D77]" : ""
                      }`}
                      disabled={loading}
                    >
                      <option value="">Selecciona tu Ciudad / Estado</option>
                      {ciudadZipOptions.map((option, index) => (
                        <option key={index} value={option.label}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {(errors.ciudad || errors.zip) && (
                      <p className="text-[#F28D77] text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Selecciona una ciudad válida
                      </p>
                    )}
                  </div>

                  {/* Email (opcional) */}
                  <div>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Correo electrónico (opcional)"
                      className={`w-full px-4 py-3 border-2 rounded-xl bg-[#F7F7F7] border-[#CCCCCC] focus:border-[#048ABF] focus:ring-2 focus:ring-[#048ABF]/50 transition-all ${
                        errors.email ? "border-[#F28D77]" : ""
                      }`}
                      disabled={loading}
                    />
                    {errors.email && (
                      <p className="text-[#F28D77] text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <DialogFooter className="flex flex-col items-center pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white font-bold text-lg py-4 px-8 rounded-xl bg-gradient-to-r from-[#F28D77] to-[#048ABF] shadow-[0px_8px_24px_rgba(4,138,191,0.3)] hover:shadow-[0_0_20px_#F28D77] hover:scale-103 transition-all duration-250 ease-in-out active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Aplicación
                      </>
                    )}
                  </Button>
                </DialogFooter>
              </form>
            )}

            <div className="text-center mt-6">
              <p className="text-[#6B7A8F] text-xs tracking-wider">
                🔒 Tus datos están protegidos. Solo los usamos para tu aplicación.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
