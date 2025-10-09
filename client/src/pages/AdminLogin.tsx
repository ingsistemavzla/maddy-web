import { useState } from "react";
import { useLocation } from "wouter";
import { Lock, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "Leads2025") {
      sessionStorage.setItem("adminAuth", "true");
      setLocation("/admin/dashboard");
    } else {
      setError("Contraseña incorrecta");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-coral to-cyan-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-navy mb-2">
              Acceso Administrativo
            </h1>
            <p className="text-gray-600">
              Panel de gestión de leads
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-navy mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all ${
                  error ? "border-red-500" : "border-gray-200"
                }`}
                placeholder="Ingrese la contraseña"
                autoFocus
              />
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span>⚠️</span> {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-coral to-cyan-blue hover:from-coral/90 hover:to-cyan-blue/90 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Ingresar
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-cyan-blue hover:text-navy transition-colors text-sm font-medium"
            >
              ← Volver al inicio
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-white/60 text-sm">
          <p>Panel administrativo protegido</p>
        </div>
      </div>
    </div>
  );
}
