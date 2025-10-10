import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { LogOut, Users, Calendar, MapPin, Hash } from "lucide-react";
import LeadTable from "../components/LeadTable";
import Filters from "../components/Filters";
import ExportButtons from "../components/ExportButtons";

interface Lead {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  ciudad: string;
  zip: string;
  email: string;
  estado: 'nuevo' | 'procesado' | 'atendido';
  fechaHora: string;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filtros
  const [estadoFilter, setEstadoFilter] = useState("");
  const [ciudadFilter, setCiudadFilter] = useState("");
  const [fechaFilter, setFechaFilter] = useState("");

  // Estadísticas
  const [stats, setStats] = useState({
    total: 0,
    hoy: 0,
    ciudades: 0,
    zips: 0
  });

  useEffect(() => {
    checkAuth();
    loadLeads();

    const intervalId = setInterval(() => {
      console.log("🔄 Sincronizando datos...");
      loadLeads();
    }, 15000); // Actualizar cada 15 segundos

    return () => clearInterval(intervalId); // Limpiar al desmontar
  }, []);

  useEffect(() => {
    applyFilters();
  }, [leads, estadoFilter, ciudadFilter, fechaFilter]);

  useEffect(() => {
    calculateStats();
  }, [filteredLeads]);

  const checkAuth = () => {
    const auth = sessionStorage.getItem("adminAuth");
    if (!auth) {
      setLocation("/admin");
    }
  };

  const loadLeads = async () => {
    setLoading(true);
    setError("");

    try {
      console.log("🔍 Intentando conectar a la API...");
      const response = await fetch("/api/leads", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      console.log("📡 Respuesta del servidor:", response.status, response.statusText);
      console.log("📝 Response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Error response:", errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("📦 Datos recibidos:", result);

      if (result.success) {
        setLeads(result.data || []);
        setError("");
        console.log("✅ Leads cargados exitosamente:", result.data?.length || 0);
      } else {
        setError("Error al cargar los leads: " + (result.message || "Respuesta inválida del servidor"));
      }
    } catch (error) {
      console.error("❌ Error de conexión:", error);
      setError(`Error de conexión con el servidor: ${error instanceof Error ? error.message : 'Error desconocido'}`);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...leads];

    if (estadoFilter) {
      filtered = filtered.filter(lead => lead.estado === estadoFilter);
    }

    if (ciudadFilter) {
      filtered = filtered.filter(lead => lead.ciudad === ciudadFilter);
    }

    if (fechaFilter) {
      const filterDate = new Date(fechaFilter);
      filtered = filtered.filter(lead => {
        const leadDate = new Date(lead.fechaHora);
        return leadDate.toDateString() === filterDate.toDateString();
      });
    }

    setFilteredLeads(filtered);
  };

  const calculateStats = () => {
    const hoy = new Date().toDateString();
    const ciudades = new Set(leads.map(l => l.ciudad));
    const zips = new Set(leads.map(l => l.zip));

    setStats({
      total: leads.length,
      hoy: leads.filter(l => new Date(l.fechaHora).toDateString() === hoy).length,
      ciudades: ciudades.size,
      zips: zips.size
    });
  };

  const clearFilters = () => {
    setEstadoFilter("");
    setCiudadFilter("");
    setFechaFilter("");
  };

  const getCiudades = () => {
    const ciudades = Array.from(new Set(leads.map(l => l.ciudad)));
    return ciudades.sort();
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    setLocation("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-blue border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-navy">Panel Administrativo</h1>
              <p className="text-gray-600">Gestión de Leads</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
            >
              <LogOut className="w-4 h-4" />
              Salir
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Registros</p>
                <p className="text-3xl font-bold text-navy">{stats.total}</p>
              </div>
              <div className="w-12 h-12 bg-cyan-blue rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Registros de Hoy</p>
                <p className="text-3xl font-bold text-navy">{stats.hoy}</p>
              </div>
              <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Ciudades</p>
                <p className="text-3xl font-bold text-navy">{stats.ciudades}</p>
              </div>
              <div className="w-12 h-12 bg-cyan-blue rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Códigos ZIP</p>
                <p className="text-3xl font-bold text-navy">{stats.zips}</p>
              </div>
              <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                <Hash className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Exportación */}
        <ExportButtons />

        {/* Filtros */}
        <Filters
          estado={estadoFilter}
          ciudad={ciudadFilter}
          fecha={fechaFilter}
          onEstadoChange={setEstadoFilter}
          onCiudadChange={setCiudadFilter}
          onFechaChange={setFechaFilter}
          onClear={clearFilters}
          ciudades={getCiudades()}
        />

        {/* Tabla */}
        <LeadTable leads={filteredLeads} onUpdate={loadLeads} />
      </div>
    </div>
  );
}
