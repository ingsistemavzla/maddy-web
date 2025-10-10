import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const LEADS_FILE = path.resolve(process.cwd(), 'server', 'data', 'leads.json');

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

// Función para leer leads del archivo
function readLeads(): Lead[] {
  try {
    // Crear directorio si no existe
    const dataDir = path.dirname(LEADS_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log('📁 Directorio creado:', dataDir);
    }

    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2));
      console.log('📄 Archivo leads.json creado');
      return [];
    }
    const data = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error leyendo leads:', error);
    return [];
  }
}

// Función para escribir leads al archivo
function writeLeads(leads: Lead[]): void {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
  } catch (error) {
    console.error('Error escribiendo leads:', error);
    throw error;
  }
}

// Obtener todos los leads
export function getAllLeads() {
  console.log("🔍 getAllLeads() - Intentando leer leads del archivo");
  const leads = readLeads();
  console.log("📋 getAllLeads() - Leads leídos:", leads.length);
  return leads;
}

// Crear nuevo lead
export function createLead(leadData: Omit<Lead, 'id' | 'fechaHora' | 'estado'>) {
  console.log("➕ Creando nuevo lead con datos:", leadData);
  const leads = readLeads();
  const newId = leads.length > 0 ? Math.max(...leads.map(l => l.id)) + 1 : 1;
  
  const newLead: Lead = {
    id: newId,
    ...leadData,
    estado: 'nuevo',
    fechaHora: new Date().toISOString()
  };
  
  leads.push(newLead);
  writeLeads(leads);
  console.log("✅ Lead creado con ID:", newId);
  
  return newLead;
}

// Actualizar lead
export function updateLead(id: number, updates: Partial<Lead>) {
  console.log(`🔄 Actualizando lead con ID: ${id}, con datos:`, updates);
  const leads = readLeads();
  const index = leads.findIndex(l => l.id === id);
  
  if (index === -1) {
    console.error(`❌ No se encontró lead con ID: ${id}`);
    throw new Error('Lead no encontrado');
  }
  
  leads[index] = { ...leads[index], ...updates };
  writeLeads(leads);
  console.log(`✅ Lead con ID: ${id} actualizado.`);
  
  return leads[index];
}

// Eliminar lead
export function deleteLead(id: number) {
  console.log(`🗑️ Eliminando lead con ID: ${id}`);
  const leads = readLeads();
  const initialLength = leads.length;
  
  let filteredLeads = leads.filter(l => l.id !== id);
  
  if (initialLength === filteredLeads.length) {
    console.error(`❌ No se encontró lead con ID: ${id} para eliminar.`);
    throw new Error('Lead no encontrado');
  }
  
  // Reordenar IDs
  const reorderedLeads = filteredLeads.map((lead, index) => {
    return { ...lead, id: index + 1 };
  });
  
  writeLeads(reorderedLeads);
  console.log(`✅ Lead con ID: ${id} eliminado y IDs reordenados.`);
  return { success: true };
}

// Exportar leads en diferentes formatos
export function exportLeads(format: 'csv' | 'txt' | 'json'): string {
  const leads = readLeads();
  
  switch (format) {
    case 'csv':
      const csvHeader = 'ID,Nombre,Apellido,Teléfono,Ciudad,ZIP,Email,Estado,FechaHora\n';
      const csvRows = leads.map(l => 
        `${l.id},"${l.nombre}","${l.apellido}","${l.telefono}","${l.ciudad}","${l.zip}","${l.email}","${l.estado}","${l.fechaHora}"`
      ).join('\n');
      return csvHeader + csvRows;
      
    case 'txt':
      return leads.map(l => 
        `ID: ${l.id}\nNombre: ${l.nombre} ${l.apellido}\nTeléfono: ${l.telefono}\nCiudad: ${l.ciudad}\nZIP: ${l.zip}\nEmail: ${l.email}\nEstado: ${l.estado}\nFechaHora: ${l.fechaHora}\n${'='.repeat(50)}\n`
      ).join('\n');
      
    case 'json':
      return JSON.stringify(leads, null, 2);
      
    default:
      throw new Error('Formato no soportado');
  }
}
