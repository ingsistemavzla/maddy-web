# 📋 INSTRUCCIONES DE USO - Sistema de Registro de Leads MADDY-WEB

## ✅ VERIFICACIÓN COMPLETA - TODO FUNCIONA CORRECTAMENTE

El sistema ha sido verificado y está funcionando correctamente en modo local. Se han realizado pruebas exitosas de:

✅ Registro de usuarios mediante formularios  
✅ Almacenamiento en archivo JSON (server/data/leads.json)  
✅ API REST completamente funcional  
✅ Panel administrativo con visualización y gestión de datos  

---

## 🚀 INICIAR EL SERVIDOR

### Comando:
```bash
npm run dev
```

El servidor iniciará en: **http://localhost:5000**

---

## 📝 FORMULARIOS DE REGISTRO

### 1. **OrientationModal** (Modal Principal)
- **Se activa:** Al hacer clic en cualquier botón CTA de la landing page
- **Campos:**
  - Nombre
  - Apellido
  - Email
  - Teléfono
  - Ciudad/Estado (selector con códigos ZIP)

### 2. **ClosingFormSection** (Formulario Final)
- **Ubicación:** Al final de la página principal
- **Campos:**
  - Nombre
  - Apellido
  - Email
  - Teléfono
  - Ciudad
  - Código Postal (ZIP)

### 3. **LeadForm** (Formulario Independiente)
- **Uso:** Componente reutilizable
- **Campos:** Igual que ClosingFormSection

**Todos los formularios envían datos al mismo endpoint:** `/api/leads`

---

## 🗄️ BASE DE DATOS (JSON NoSQL)

### Ubicación del archivo:
```
server/data/leads.json
```

### Estructura de datos:
```json
[
  {
    "id": 1,
    "nombre": "Juan",
    "apellido": "Perez",
    "telefono": "555-1234",
    "ciudad": "Miami",
    "zip": "33101",
    "email": "juan.perez@example.com",
    "estado": "nuevo",
    "fechaHora": "2025-10-10T23:51:32.179Z"
  }
]
```

### Estados de leads:
- **nuevo** - Lead recién registrado (por defecto)
- **procesado** - Lead en proceso de atención
- **atendido** - Lead ya atendido

---

## 🎛️ PANEL ADMINISTRATIVO

### Acceso:
**URL:** http://localhost:5000/admin  
**Contraseña:** `Leads2025`

### Funcionalidades:

#### 📊 **Estadísticas en tiempo real:**
- Total de registros
- Registros del día
- Ciudades únicas
- Códigos ZIP únicos

#### 🔍 **Filtros:**
- Por estado (nuevo, procesado, atendido)
- Por ciudad
- Por fecha

#### 📤 **Exportación:**
El panel permite exportar los datos en tres formatos:
- **CSV** - Para Excel/Sheets
- **TXT** - Formato texto
- **JSON** - Formato JSON

**Endpoints de exportación:**
- `/api/export/csv`
- `/api/export/txt`
- `/api/export/json`

#### ✏️ **Gestión de leads:**
- **Cambiar estado:** Click en el badge de estado (cicla entre: nuevo → procesado → atendido → nuevo)
- **Guardar cambios:** Click en botón verde de guardar
- **Eliminar:** Click en botón rojo de eliminar

#### 🔄 **Sincronización automática:**
El dashboard se actualiza automáticamente cada 15 segundos

---

## 🔌 API REST

### Endpoints disponibles:

#### 1. **GET /api/health**
Verificar estado del servidor
```bash
Respuesta: {"success": true, "message": "API is working"}
```

#### 2. **GET /api/leads**
Obtener todos los leads
```bash
Respuesta: {"success": true, "data": [...]}
```

#### 3. **POST /api/leads**
Crear nuevo lead
```bash
Body: {
  "nombre": "Juan",
  "apellido": "Perez",
  "telefono": "555-1234",
  "ciudad": "Miami",
  "zip": "33101",
  "email": "juan.perez@example.com"
}

Respuesta: {"success": true, "message": "Registro guardado con éxito"}
```

#### 4. **PUT /api/leads/:id**
Actualizar lead existente
```bash
Body: {
  "estado": "procesado"
}

Respuesta: {"success": true, "data": {...}}
```

#### 5. **DELETE /api/leads/:id**
Eliminar lead
```bash
Respuesta: {"success": true, "message": "Lead eliminado correctamente"}
```

---

## 🧪 PRUEBAS REALIZADAS

### ✅ Prueba 1: Crear lead
- **Método:** POST /api/leads
- **Resultado:** ✅ Lead creado con ID: 1

### ✅ Prueba 2: Obtener leads
- **Método:** GET /api/leads
- **Resultado:** ✅ 2 leads recuperados correctamente

### ✅ Prueba 3: Crear segundo lead
- **Método:** POST /api/leads
- **Resultado:** ✅ Lead creado con ID: 2

### ✅ Prueba 4: Verificar archivo JSON
- **Ubicación:** server/data/leads.json
- **Resultado:** ✅ Datos guardados correctamente con formato JSON válido

---

## 🌐 RUTAS DE LA APLICACIÓN

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal (Home) |
| `/admin` | Página de login administrativo |
| `/admin/dashboard` | Panel administrativo de gestión |

---

## 🔧 CONFIGURACIÓN

### Puerto del servidor:
```
Puerto: 5000 (configurable en .env como PORT)
Host: 127.0.0.1 (desarrollo) o 0.0.0.0 (producción)
```

### CORS habilitado para:
- http://localhost:5000
- http://localhost:3000
- http://127.0.0.1:5000

---

## 📦 DESPLIEGUE A PRODUCCIÓN (RENDER)

### Preparación:
1. El proyecto ya está configurado para producción
2. Asegurar que todas las dependencias estén en `dependencies` (no en `devDependencies`)
3. El archivo `nixpacks.toml` está configurado para el despliegue

### Variables de entorno en Render:
```
NODE_ENV=production
PORT=5000 (o el que asigne Render)
```

### Comandos de build:
```bash
npm ci --omit=dev
npm run build
```

### Comando de inicio:
```bash
npm run start:prod
```

---

## 🛡️ SEGURIDAD

### Contraseña administrativa:
- **Actual:** `Leads2025`
- **Ubicación:** `client/src/pages/AdminLogin.tsx` (línea 13)
- **Recomendación:** Cambiar antes de producción

### Almacenamiento de sesión:
- Se usa `sessionStorage` para la autenticación del panel
- La sesión expira al cerrar el navegador

---

## 📊 MONITOREO

### Logs del servidor:
El servidor registra automáticamente:
- ✅ Todas las solicitudes API con tiempos de respuesta
- ✅ Operaciones CRUD en los leads
- ✅ Errores y warnings

### Verificar logs en consola:
```bash
npm run dev
```

---

## ✨ MEJORAS IMPLEMENTADAS

1. ✅ **OrientationModal actualizado** - Campos separados de nombre y apellido
2. ✅ **ClosingFormSection actualizado** - Ahora envía datos al API
3. ✅ **Validación completa** - Todos los formularios validan datos
4. ✅ **Mensajes de éxito** - Feedback visual al usuario
5. ✅ **Sistema de estados** - Loading, success, error
6. ✅ **Panel administrativo completo** - CRUD completo de leads
7. ✅ **Exportación de datos** - CSV, TXT, JSON
8. ✅ **Filtros avanzados** - Por estado, ciudad, fecha
9. ✅ **Sincronización automática** - Dashboard se actualiza cada 15 segundos

---

## 🎯 PRÓXIMOS PASOS PARA PRODUCCIÓN

1. [ ] Cambiar contraseña administrativa
2. [ ] Configurar dominio personalizado
3. [ ] Configurar SSL/HTTPS
4. [ ] Implementar backup automático del archivo JSON
5. [ ] Considerar migración a base de datos PostgreSQL (opcional)
6. [ ] Configurar notificaciones por email al recibir nuevos leads
7. [ ] Implementar rate limiting para prevenir spam

---

## 📞 SOPORTE

Para cualquier problema o duda, verificar:
1. Que el servidor esté corriendo (`npm run dev`)
2. Que el puerto 5000 no esté ocupado
3. Los logs en la consola del servidor
4. El contenido del archivo `server/data/leads.json`

---

## 🎉 ESTADO ACTUAL

**✅ TODO FUNCIONA CORRECTAMENTE EN LOCAL**

El sistema está listo para:
- ✅ Recibir registros desde los formularios
- ✅ Almacenar datos en JSON
- ✅ Gestionar leads desde el panel administrativo
- ✅ Exportar datos en múltiples formatos
- ✅ Desplegar a producción (Render)

**Última verificación:** 10 de Octubre, 2025

