import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import cors from "cors";

const app = express();

// CORS configuration for development
app.use(cors({
  origin: ["http://localhost:5000", "http://localhost:3000", "http://127.0.0.1:5000"],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Register API routes FIRST before any catch-all routes
  const server = await registerRoutes(app);

  // API routes that should be processed BEFORE Vite catch-all
  app.get("/api/health", (req, res) => {
    console.log("🏥 Health check endpoint called");
    const response = {
      success: true,
      message: "API is working",
      timestamp: new Date().toISOString(),
      server: "express",
      environment: process.env.NODE_ENV || "development"
    };
    console.log("📤 Health response:", response);
    res.json(response);
  });

  // Simple test endpoint
  app.get("/api/test", (req, res) => {
    console.log("🧪 Test endpoint called");
    res.json({
      success: true,
      message: "Test endpoint working",
      data: "Hello from API"
    });
  });

  // API error handler for API routes
  app.use("/api", (err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error("❌ API Error:", err);
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ success: false, message });
  });

  // General error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });

  // Setup Vite AFTER API routes are registered
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);

  // Bind to 0.0.0.0 for production deployment (Render, cloud platforms)
  // Use 127.0.0.1 for local development
  const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';

  server.listen(port, host, () => {
    log(`serving on ${host}:${port}`);
  });
})();
