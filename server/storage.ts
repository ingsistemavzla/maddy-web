// Storage layer for the application
// Currently using file-based JSON storage for leads
// See: server/controllers/leadsController.ts and server/data/leads.json

export class MemStorage {
  constructor() {
    // Placeholder for future storage needs
  }
}

export const storage = new MemStorage();
