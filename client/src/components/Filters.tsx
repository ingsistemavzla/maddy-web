import { X } from "lucide-react";

interface FiltersProps {
  estado: string;
  ciudad: string;
  fecha: string;
  onEstadoChange: (value: string) => void;
  onCiudadChange: (value: string) => void;
  onFechaChange: (value: string) => void;
  onClear: () => void;
  ciudades: string[];
}

export default function Filters({
  estado,
  ciudad,
  fecha,
  onEstadoChange,
  onCiudadChange,
  onFechaChange,
  onClear,
  ciudades
}: FiltersProps) {
  const hasFilters = estado || ciudad || fecha;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-navy">Filtros</h3>
        {hasFilters && (
          <button
            onClick={onClear}
            className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Estado
          </label>
          <select
            value={estado}
            onChange={(e) => onEstadoChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all"
          >
            <option value="">Todos</option>
            <option value="nuevo">Nuevo</option>
            <option value="procesado">Procesado</option>
            <option value="atendido">Atendido</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Ciudad
          </label>
          <select
            value={ciudad}
            onChange={(e) => onCiudadChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all"
          >
            <option value="">Todas</option>
            {ciudades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-navy mb-2">
            Fecha
          </label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => onFechaChange(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-blue transition-all"
          />
        </div>
      </div>
    </div>
  );
}
