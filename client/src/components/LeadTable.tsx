import { useState } from "react";
import { Save, Trash2, RefreshCw } from "lucide-react";

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

interface LeadTableProps {
  leads: Lead[];
  onUpdate: () => void;
}

export default function LeadTable({ leads, onUpdate }: LeadTableProps) {
  const [editingStates, setEditingStates] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<number | null>(null);

  const getEstadoPosition = (estado: string) => {
    switch (estado) {
      case 'nuevo':
        return 'left-0.5'; // Izquierda
      case 'procesado':
        return 'left-[calc(50%-0.5rem)]'; // Centro (ajustado para w-4)
      case 'atendido':
        return 'right-0.5'; // Derecha
      default:
        return 'left-0.5';
    }
  };

  const getEstadoBackgroundColor = (estado: string) => {
    switch (estado) {
      case 'nuevo':
        return 'bg-gradient-to-r from-pink-400 to-coral'; // Rosado coral
      case 'procesado':
        return 'bg-gradient-to-r from-orange-400 to-orange-500'; // Naranja salmón
      case 'atendido':
        return 'bg-gradient-to-r from-blue-400 to-cyan-blue'; // Azul
      default:
        return 'bg-gray-300';
    }
  };

  const getEstadoLabel = (estado: string) => {
    switch (estado) {
      case 'nuevo':
        return 'Nuevo';
      case 'procesado':
        return 'Procesado';
      case 'atendido':
        return 'Atendido';
      default:
        return 'Nuevo';
    }
  };

  const cycleEstado = (currentEstado: string): string => {
    switch (currentEstado) {
      case 'nuevo':
        return 'procesado';
      case 'procesado':
        return 'atendido';
      case 'atendido':
        return 'nuevo';
      default:
        return 'nuevo';
    }
  };

  const handleEstadoClick = (leadId: number, currentEstado: string) => {
    const nextEstado = cycleEstado(currentEstado);
    setEditingStates(prev => ({ ...prev, [leadId]: nextEstado }));
  };

  const handleSave = async (leadId: number) => {
    setLoading(leadId);
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ estado: editingStates[leadId] })
      });

      const result = await response.json();

      if (result.success) {
        setEditingStates(prev => {
          const newState = { ...prev };
          delete newState[leadId];
          return newState;
        });
        onUpdate();
      } else {
        alert('Error al actualizar: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al actualizar el lead');
    } finally {
      setLoading(null);
    }
  };

  const handleDelete = async (leadId: number, nombre: string, apellido: string) => {
    if (!confirm(`¿Estás seguro de eliminar el lead de ${nombre} ${apellido}?`)) {
      return;
    }

    setLoading(leadId);
    try {
      const response = await fetch(`/api/leads/${leadId}`, {
        method: 'DELETE'
      });

      const result = await response.json();

      if (result.success) {
        onUpdate();
      } else {
        alert('Error al eliminar: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al eliminar el lead');
    } finally {
      setLoading(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (leads.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
        <p className="text-gray-400 text-lg">No hay leads registrados</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-navy to-cyan-blue text-white">
            <tr>
              <th className="px-4 py-4 text-left text-sm font-semibold">#</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Nombre Completo</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Teléfono</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Ciudad</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">ZIP</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Correo</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Estado</th>
              <th className="px-4 py-4 text-left text-sm font-semibold">Fecha y Hora</th>
              <th className="px-4 py-4 text-center text-sm font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.map((lead, index) => {
              const currentEstado = editingStates[lead.id] || lead.estado;
              const hasChanges = editingStates[lead.id] && editingStates[lead.id] !== lead.estado;

              return (
                <tr 
                  key={lead.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-sm text-gray-600">{index + 1}</td>
                  <td className="px-4 py-4 text-sm font-medium text-navy">
                    {lead.nombre} {lead.apellido}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">{lead.telefono}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{lead.ciudad}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{lead.zip}</td>
                  <td className="px-4 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {lead.email}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex flex-col items-center gap-2">
                      {/* Switch de tres estados */}
                      <button
                        onClick={() => handleEstadoClick(lead.id, currentEstado)}
                        disabled={loading === lead.id}
                        className={`relative w-20 h-6 rounded-full transition-all duration-300 ${getEstadoBackgroundColor(currentEstado)} disabled:opacity-50 shadow-md hover:shadow-lg`}
                        title={`Click para cambiar estado. Actual: ${getEstadoLabel(currentEstado)}`}
                      >
                        {/* Indicador deslizante (círculo blanco) */}
                        <div 
                          className={`absolute top-0.5 ${getEstadoPosition(currentEstado)} w-4 h-4 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center`}
                        >
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        </div>
                        
                        {/* Texto del estado */}
                        <span className="text-white text-[9px] font-bold absolute inset-0 flex items-center justify-center">
                          {getEstadoLabel(currentEstado)}
                        </span>
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {formatDate(lead.fechaHora)}
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {hasChanges && (
                        <button
                          onClick={() => handleSave(lead.id)}
                          disabled={loading === lead.id}
                          className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all hover:scale-105 disabled:opacity-50"
                          title="Guardar cambios"
                        >
                          {loading === lead.id ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            <Save className="w-4 h-4" />
                          )}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(lead.id, lead.nombre, lead.apellido)}
                        disabled={loading === lead.id}
                        className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all hover:scale-105 disabled:opacity-50"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <p className="text-sm text-gray-600">
          Total: <span className="font-semibold text-navy">{leads.length}</span> leads
        </p>
        <button
          onClick={onUpdate}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-blue hover:bg-navy text-white rounded-lg transition-all hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          Actualizar
        </button>
      </div>
    </div>
  );
}
