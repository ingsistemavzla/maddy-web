import { Download, FileText, FileSpreadsheet, FileJson } from "lucide-react";

export default function ExportButtons() {
  const handleExport = async (format: 'csv' | 'txt' | 'json') => {
    try {
      const response = await fetch(`/api/export/${format}`);
      
      if (!response.ok) {
        throw new Error('Error en la exportación');
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      const date = new Date().toISOString().split('T')[0];
      a.download = `leads_${date}.${format}`;
      
      document.body.appendChild(a);
      a.click();
      
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error:', error);
      alert('Error al exportar los datos');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <h3 className="text-lg font-bold text-navy mb-4">Exportar Datos</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => handleExport('csv')}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-blue hover:bg-navy text-white rounded-lg transition-all hover:scale-105"
        >
          <FileSpreadsheet className="w-4 h-4" />
          CSV
        </button>
        <button
          onClick={() => handleExport('txt')}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all hover:scale-105"
        >
          <FileText className="w-4 h-4" />
          TXT
        </button>
        <button
          onClick={() => handleExport('json')}
          className="flex items-center gap-2 px-4 py-2 bg-coral hover:bg-coral/90 text-white rounded-lg transition-all hover:scale-105"
        >
          <FileJson className="w-4 h-4" />
          JSON
        </button>
      </div>
    </div>
  );
}
