import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  getAllLeads, 
  createLead, 
  updateLead, 
  deleteLead, 
  exportLeads 
} from "./controllers/leadsController";

export async function registerRoutes(app: Express): Promise<Server> {
  console.log("🚀 Registrando rutas API...");

  // Rutas para gestión de leads

  // GET /api/leads - Obtener todos los leads
  app.get("/api/leads", (req, res) => {
    try {
      console.log("📡 GET /api/leads - Solicitud recibida desde", req.ip);
      console.log("📝 Headers:", req.headers);
      const leads = getAllLeads();
      console.log("📦 Leads obtenidos:", leads.length);
      console.log("📤 Enviando respuesta JSON...");
      res.json({ success: true, data: leads });
    } catch (error: any) {
      console.error("❌ Error en GET /api/leads:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  // POST /api/leads - Crear nuevo lead
  app.post("/api/leads", (req, res) => {
    console.log("📡 POST /api/leads - Solicitud recibida");
    try {
      const { nombre, apellido, telefono, ciudad, zip, email } = req.body;
      
      if (!nombre || !apellido || !telefono || !ciudad || !zip || !email) {
        console.error("❌ Faltan campos en la solicitud POST /api/leads");
        return res.status(400).json({ 
          success: false, 
          message: "Todos los campos son requeridos" 
        });
      }
      
      createLead({ nombre, apellido, telefono, ciudad, zip, email });
      console.log("✅ Solicitud POST /api/leads procesada exitosamente");
      res.status(201).json({ success: true, message: "Registro guardado con éxito" });
    } catch (error: any) {
      console.error("❌ Error en POST /api/leads:", error);
      res.status(500).json({ success: false, message: error.message });
    }
  });

  // PUT /api/leads/:id - Actualizar lead
  app.put("/api/leads/:id", (req, res) => {
    console.log(`📡 PUT /api/leads/${req.params.id} - Solicitud recibida`);
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      const updatedLead = updateLead(id, updates);
      console.log(`✅ Solicitud PUT /api/leads/${id} procesada exitosamente`);
      res.json({ success: true, data: updatedLead });
    } catch (error: any) {
      console.error(`❌ Error en PUT /api/leads/${req.params.id}:`, error);
      res.status(404).json({ success: false, message: error.message });
    }
  });

  // DELETE /api/leads/:id - Eliminar lead
  app.delete("/api/leads/:id", (req, res) => {
    console.log(`📡 DELETE /api/leads/${req.params.id} - Solicitud recibida`);
    try {
      const id = parseInt(req.params.id);
      deleteLead(id);
      console.log(`✅ Solicitud DELETE /api/leads/${id} procesada exitosamente`);
      res.json({ success: true, message: "Lead eliminado correctamente" });
    } catch (error: any) {
      console.error(`❌ Error en DELETE /api/leads/${req.params.id}:`, error);
      res.status(404).json({ success: false, message: error.message });
    }
  });

  // GET /api/export/:type - Exportar leads en diferentes formatos
  app.get("/api/export/:type", (req, res) => {
    try {
      const type = req.params.type as 'csv' | 'txt' | 'json';
      
      if (!['csv', 'txt', 'json'].includes(type)) {
        return res.status(400).json({ 
          success: false, 
          message: "Formato no válido. Use csv, txt o json" 
        });
      }
      
      const data = exportLeads(type);
      const filename = `leads_${new Date().toISOString().split('T')[0]}.${type}`;
      
      res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
      res.setHeader('Content-Type', type === 'json' ? 'application/json' : 'text/plain');
      res.send(data);
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
