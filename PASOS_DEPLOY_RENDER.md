# 🎯 GUÍA PASO A PASO - DEPLOY EN RENDER

## ✅ PREPARACIÓN COMPLETADA

- ✅ Git: Commit y push exitosos
- ✅ package.json: Optimizado
- ✅ render.yaml: Configurado
- ✅ Build local: Exitoso (32 segundos)

**Repositorio:** https://github.com/ingsistemavzla/maddy-web

---

## 📋 PASO A PASO EN RENDER.COM

### **PASO 1: Acceder a Render**

1. Abre tu navegador
2. Ve a: **https://render.com**
3. Haz clic en **"Sign In"** (o **"Get Started"** si no tienes cuenta)
4. Inicia sesión con:
   - GitHub (recomendado)
   - GitLab
   - Email

---

### **PASO 2: Crear Nuevo Servicio**

1. En el Dashboard, haz clic en **"New +"** (esquina superior derecha)
2. Selecciona **"Web Service"**

---

### **PASO 3: Conectar Repositorio**

1. Si es tu primera vez:
   - Haz clic en **"Connect GitHub"**
   - Autoriza el acceso a Render
   
2. Busca el repositorio:
   - Escribe: `maddy-web` en el buscador
   - Selecciona: **ingsistemavzla/maddy-web**
   - Haz clic en **"Connect"**

---

### **PASO 4: Configurar el Servicio**

#### **Información Básica:**

| Campo | Valor |
|-------|-------|
| **Name** | `maddy-web` (o el que prefieras) |
| **Region** | `Oregon (US West)` (o el más cercano) |
| **Branch** | `main` |
| **Root Directory** | (dejar vacío) |
| **Runtime** | `Node` |

#### **Build & Deploy Settings:**

| Campo | Valor |
|-------|-------|
| **Build Command** | `npm ci && npm run build` |
| **Start Command** | `npm run start` |

---

### **PASO 5: Configurar Variables de Entorno**

En la sección **"Environment Variables"**, agrega:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `10000` |

**Nota:** Render asigna automáticamente el PORT, pero lo incluimos por claridad.

---

### **PASO 6: Configurar Plan**

1. Selecciona el plan:
   - **Free:** ✅ Recomendado para empezar
     - 750 horas gratis/mes
     - Se duerme después de 15 min inactividad
   - **Starter ($7/mes):** Para producción
     - Siempre activo
     - Sin delays

2. Haz clic en **"Create Web Service"**

---

### **PASO 7: Deploy Automático**

Render iniciará el deploy automáticamente:

```
1. ⏳ Clonando repositorio...
2. ⏳ Instalando dependencias (npm ci)...
3. ⏳ Ejecutando build (vite build)...
4. ⏳ Iniciando servidor...
5. ✅ Deploy completado!
```

**Tiempo estimado:** 3-5 minutos

---

### **PASO 8: Verificar Deploy**

Una vez completado:

1. **URL del servicio:** Se mostrará en la parte superior
   - Formato: `https://maddy-web-xxxx.onrender.com`

2. **Verificar endpoints:**
   - Home: `https://tu-app.onrender.com/`
   - Health: `https://tu-app.onrender.com/api/health`
   - Leads: `https://tu-app.onrender.com/api/leads`

3. **Probar funcionalidad:**
   - ✅ Página principal carga
   - ✅ Formularios funcionan
   - ✅ Panel admin accesible
   - ✅ API responde

---

## 🔧 CONFIGURACIONES ADICIONALES (Opcional)

### **Health Check:**

1. Ve a **Settings** → **Health Check**
2. Configura:
   - **Health Check Path:** `/api/health`
   - **Health Check Interval:** 60 segundos

### **Auto Deploy:**

Por defecto está activado. Cada push a `main` iniciará un deploy automático.

Para desactivar:
1. Ve a **Settings** → **Build & Deploy**
2. Desactiva **"Auto-Deploy"**

---

## 📊 MONITOREO

### **Logs en Tiempo Real:**

1. Ve a la pestaña **"Logs"**
2. Verás los logs del servidor en tiempo real
3. Útil para debugging

### **Métricas:**

1. Ve a la pestaña **"Metrics"**
2. Verás:
   - CPU usage
   - Memory usage
   - Request count
   - Response time

---

## ⚠️ IMPORTANTE - PERSISTENCIA DE DATOS

### **Problema:**
El archivo `server/data/leads.json` NO es persistente en Render Free.
Cada deploy borrará los datos.

### **Soluciones:**

#### **Opción 1: Usar Base de Datos (Recomendado)**
1. En Render, crea una PostgreSQL Database (Free)
2. Conecta tu app a la base de datos
3. Migra de JSON a PostgreSQL

#### **Opción 2: Storage Externo**
- AWS S3
- Google Cloud Storage
- Supabase Storage

#### **Opción 3: Exportar Periódicamente**
- Usa el panel admin para exportar leads
- Descarga en CSV/JSON antes de cada deploy

---

## 🎯 CHECKLIST POST-DEPLOY

- [ ] Servicio creado exitosamente
- [ ] Deploy completado sin errores
- [ ] URL del servicio obtenida
- [ ] Página principal carga correctamente
- [ ] API `/api/health` responde 200 OK
- [ ] API `/api/leads` funciona
- [ ] Formularios envían datos
- [ ] Panel admin es accesible (password: Leads2025)
- [ ] Sin errores en logs

---

## 🔄 PRÓXIMOS DEPLOYS

Una vez configurado, los deploys futuros son automáticos:

1. Haces cambios en tu código local
2. Commit: `git commit -m "mensaje"`
3. Push: `git push origin main`
4. Render detecta el push
5. Deploy automático se inicia
6. ¡Listo en 3-5 minutos!

---

## 🆘 TROUBLESHOOTING

### **Error: Build Fails**

**Problema:** Dependencies no se instalan
**Solución:** Verifica que todas las deps estén en `dependencies` (no `devDependencies`)

### **Error: Application Failed to Respond**

**Problema:** Puerto incorrecto
**Solución:** Verifica que el servidor use `process.env.PORT`

### **Error: Routes 404**

**Problema:** API routes no registradas
**Solución:** Verifica que las rutas API se registren antes de Vite

---

## ✨ ¡LISTO!

Tu aplicación debería estar funcionando en:
**https://maddy-web-xxxx.onrender.com**

¿Necesitas ayuda? Revisa los logs en Render o consulta la documentación.

---

**Guía creada:** 11 de Octubre, 2025  
**Estado:** ✅ Proyecto listo para deploy

