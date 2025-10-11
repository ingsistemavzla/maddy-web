# 🚀 GUÍA DE DESPLIEGUE EN RENDER

## Preparación completada ✅

El proyecto está **100% optimizado** y listo para desplegarse en Render.

---

## 📋 PASOS PARA DESPLEGAR

### 1. Preparar el Repositorio Git

```bash
# Asegúrate de que todos los cambios estén commiteados
git add .
git commit -m "Optimización para Render - limpieza completa"
git push origin main
```

### 2. Crear Nuevo Servicio en Render

1. Ve a [render.com](https://render.com)
2. Click en **"New +"** → **"Web Service"**
3. Conecta tu repositorio de GitHub/GitLab
4. Selecciona el repositorio `maddy-web`

### 3. Configuración del Servicio

#### **Configuración Básica:**
- **Name:** `maddy-web` (o el nombre que prefieras)
- **Region:** Oregon (o la más cercana a tus usuarios)
- **Branch:** `main`
- **Root Directory:** (dejar vacío)
- **Runtime:** Node

#### **Build & Deploy:**
- **Build Command:**
  ```bash
  npm ci && npm run build
  ```

- **Start Command:**
  ```bash
  npm run start
  ```

### 4. Variables de Entorno

Render configurará automáticamente:
- ✅ `NODE_ENV=production`
- ✅ `PORT=10000` (Render asigna este puerto por defecto)

**No necesitas agregar más variables por ahora.**

### 5. Plan de Servicio

- **Plan Free:** Suficiente para empezar
  - 750 horas gratis/mes
  - Servicio se duerme después de 15 min de inactividad
  - Tiempo de inicio: ~30 segundos

- **Plan Starter ($7/mes):** Recomendado para producción
  - Siempre activo
  - Sin tiempo de espera
  - SSL automático

### 6. Health Check (Opcional pero Recomendado)

- **Health Check Path:** `/api/health`
- **Health Check Interval:** 60 segundos

---

## 📁 ARCHIVOS DE CONFIGURACIÓN

### ✅ Incluidos en el proyecto:

#### `render.yaml` (Blueprint)
Configuración automatizada del servicio. Render la detectará automáticamente.

#### `package.json`
Scripts optimizados:
```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "cross-env NODE_ENV=production node dist/index.js",
    "start:prod": "cross-env NODE_ENV=production npm ci --omit=dev && node dist/index.js",
    "check": "tsc"
  }
}
```

---

## 🔧 CONFIGURACIÓN DEL SERVIDOR

El servidor está configurado para Render:

```typescript
// server/index.ts
const port = parseInt(process.env.PORT || '5000', 10);
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1';

server.listen(port, host, () => {
  log(`serving on ${host}:${port}`);
});
```

- ✅ Lee `PORT` desde variables de entorno
- ✅ Bind a `0.0.0.0` en producción (requerido por Render)
- ✅ Bind a `127.0.0.1` en desarrollo (local)

---

## 📊 ALMACENAMIENTO DE DATOS

### Sistema de Leads (JSON)

El proyecto usa almacenamiento en archivos JSON:

```
server/data/leads.json
```

#### ⚠️ **IMPORTANTE - Persistencia de Datos:**

En Render Free, los archivos **NO son persistentes**. Cada deploy borra los datos.

#### **Opciones para producción:**

##### Opción 1: Base de Datos Externa (Recomendado)
- Migrar a PostgreSQL (Render ofrece BD gratuita)
- Usar Supabase, PlanetScale, Neon, etc.

##### Opción 2: Storage Externo
- AWS S3
- Google Cloud Storage
- Cloudinary

##### Opción 3: Mantener JSON + Backup
- Implementar backup automático a servicio externo
- Exportar periódicamente desde el panel admin

**Para empezar**, puedes usar el JSON actual, pero planifica migrar a BD.

---

## 🌐 DOMINIO PERSONALIZADO

### Dominio Gratuito de Render:
```
https://maddy-web.onrender.com
```

### Dominio Personalizado:
1. Ve a **Settings** → **Custom Domains**
2. Agrega tu dominio: `www.tudominio.com`
3. Configura DNS según instrucciones de Render
4. SSL se configura automáticamente (gratis)

---

## 🔒 SEGURIDAD

### SSL/HTTPS
✅ Configurado automáticamente por Render (Let's Encrypt)

### Variables Sensibles
Si necesitas agregar:
1. Ve a **Environment** → **Environment Variables**
2. Agrega variables como `DATABASE_URL`, `API_KEY`, etc.
3. Marca como **Secret** si es sensible

---

## 📈 MONITOREO

### Logs en Tiempo Real
```
Dashboard → Logs
```

### Métricas
```
Dashboard → Metrics
```
- CPU usage
- Memory usage
- Request count
- Response time

### Alertas
Configura notificaciones para:
- Deploy failures
- Service crashes
- High CPU/Memory

---

## 🚦 PROCESO DE BUILD

### 1. Install Dependencies
```bash
npm ci
```

### 2. Build Frontend
```bash
vite build
# Output: dist/public/
```

### 3. Build Backend
```bash
esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
# Output: dist/index.js
```

### 4. Start Server
```bash
NODE_ENV=production node dist/index.js
```

**Tiempo estimado:** 2-3 minutos

---

## ✅ CHECKLIST PRE-DEPLOY

- [x] Railway completamente eliminado
- [x] Dependencias optimizadas (26 menos)
- [x] Archivos de prueba eliminados (38 archivos)
- [x] `render.yaml` configurado
- [x] `package.json` optimizado
- [x] Servidor configurado para 0.0.0.0
- [x] Health check endpoint: `/api/health`
- [x] Build scripts funcionando
- [x] Sin errores de linting
- [x] Git actualizado

---

## 🐛 TROUBLESHOOTING

### Build Falla

**Error:** `Module not found`
- **Solución:** Verifica que todas las dependencias estén en `dependencies` (no `devDependencies`)

**Error:** `ENOENT: no such file or directory`
- **Solución:** Crea directorios necesarios en build:
  ```bash
  mkdir -p server/data && touch server/data/leads.json
  ```

### Servicio no Responde

**Error:** `Application failed to respond`
- **Solución:** Verifica que el servidor esté en puerto `process.env.PORT`
- **Solución:** Verifica que bind sea `0.0.0.0` en producción

### Rutas 404

**Error:** Frontend muestra pero API da 404
- **Solución:** Verifica que las rutas API estén registradas antes de Vite catch-all

---

## 📞 SOPORTE

### Documentación Oficial
- [Render Docs](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/deploy-node-express-app)

### Comunidad
- [Render Community Forum](https://community.render.com)

---

## 🎯 POST-DEPLOY

### 1. Verificar Funcionamiento
- ✅ Visita `https://tu-app.onrender.com`
- ✅ Prueba formularios
- ✅ Verifica panel admin
- ✅ Comprueba API: `/api/health`, `/api/leads`

### 2. Configurar Dominio (Opcional)
- Agrega dominio personalizado
- Configura DNS

### 3. Monitoreo
- Configura alertas
- Revisa logs regularmente

### 4. Optimizaciones Futuras
- Migrar a base de datos PostgreSQL
- Implementar CDN para assets
- Agregar analytics (Google Analytics, Plausible)
- Implementar backup automático de datos

---

## ✨ VENTAJAS DE RENDER

✅ **Despliegue automático** desde Git  
✅ **SSL gratuito** automático  
✅ **Health checks** integrados  
✅ **Logs en tiempo real**  
✅ **Métricas de rendimiento**  
✅ **Plan Free** generoso  
✅ **Fácil escalabilidad**  
✅ **Soporte de Node.js** nativo  
✅ **Variables de entorno** seguras  
✅ **Rollback fácil** a deploys anteriores  

---

**¡Tu proyecto está 100% listo para Render!** 🚀

Solo haz push a tu repositorio y sigue los pasos de configuración en Render.

**Última actualización:** 11 de Octubre, 2025

