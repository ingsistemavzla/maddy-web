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
  fecha: string;
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
export function createLead(leadData: Omit<Lead, 'id' | 'fecha' | 'estado'>) {
  const leads = readLeads();
  const newId = leads.length > 0 ? Math.max(...leads.map(l => l.id)) + 1 : 1;
  
  const newLead: Lead = {
    id: newId,
    ...leadData,
    estado: 'nuevo',
    fecha: new Date().toISOString()
  };
  
  leads.push(newLead);
  writeLeads(leads);
  
  return newLead;
}

// Actualizar lead
export function updateLead(id: number, updates: Partial<Lead>) {
  const leads = readLeads();
  const index = leads.findIndex(l => l.id === id);
  
  if (index === -1) {
    throw new Error('Lead no encontrado');
  }
  
  leads[index] = { ...leads[index], ...updates };
  writeLeads(leads);
  
  return leads[index];
}

// Eliminar lead
export function deleteLead(id: number) {
  const leads = readLeads();
  const filteredLeads = leads.filter(l => l.id !== id);
  
  if (leads.length === filteredLeads.length) {
    throw new Error('Lead no encontrado');
  }
  
  writeLeads(filteredLeads);
  return { success: true };
}

// Exportar leads en diferentes formatos
export function exportLeads(format: 'csv' | 'txt' | 'json'): string {
  const leads = readLeads();
  
  switch (format) {
    case 'csv':
      const csvHeader = 'ID,Nombre,Apellido,Teléfono,Ciudad,ZIP,Email,Estado,Fecha\n';
      const csvRows = leads.map(l => 
        `${l.id},"${l.nombre}","${l.apellido}","${l.telefono}","${l.ciudad}","${l.zip}","${l.email}","${l.estado}","${l.fecha}"`
      ).join('\n');
      return csvHeader + csvRows;
      
    case 'txt':
      return leads.map(l => 
        `ID: ${l.id}\nNombre: ${l.nombre} ${l.apellido}\nTeléfono: ${l.telefono}\nCiudad: ${l.ciudad}\nZIP: ${l.zip}\nEmail: ${l.email}\nEstado: ${l.estado}\nFecha: ${l.fecha}\n${'='.repeat(50)}\n`
      ).join('\n');
      
    case 'json':
      return JSON.stringify(leads, null, 2);
      
    default:
      throw new Error('Formato no soportado');
  }
}
