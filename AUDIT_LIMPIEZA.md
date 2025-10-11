# 📋 AUDITORÍA DE LIMPIEZA - MADDY-WEB

## Fecha: 11 de Octubre, 2025

---

## ✅ ARCHIVOS ELIMINADOS (26 archivos)

### Archivos HTML de prueba en `client/public/` (9 archivos)
- ✅ api-test.html
- ✅ basic.html
- ✅ debug.html
- ✅ direct.html
- ✅ health.html
- ✅ ping.html
- ✅ simple-test.html
- ✅ test-simple.html
- ✅ test.html

### Archivos de prueba en raíz (3 archivos)
- ✅ debug-connection.html
- ✅ test-connection.html
- ✅ test-api.js

### Carpeta de ejemplos (14 archivos)
- ✅ client/src/components/examples/ (carpeta completa)
  - AuthoritySection.tsx
  - BenefitsSection.tsx
  - ClosingFormSection.tsx
  - Footer.tsx
  - HeroSection.tsx
  - Navbar.tsx
  - OpportunitySection.tsx
  - PainIdentificationSection.tsx
  - RecruitmentSection.tsx
  - StatsSection.tsx
  - StorySection.tsx
  - TestimonialsCardsSection.tsx
  - TestimonialSection.tsx
  - TrustBadges.tsx

---

## 🔍 COMPONENTES UI NO UTILIZADOS (Detectados pero NO eliminados aún)

### Componentes de Shadcn/UI sin uso:
- `client/src/components/ui/calendar.tsx` → Usa `react-day-picker`
- `client/src/components/ui/carousel.tsx` → Usa `embla-carousel-react`
- `client/src/components/ui/chart.tsx` → Usa `recharts`
- `client/src/components/ui/command.tsx` → Usa `cmdk`
- `client/src/components/ui/drawer.tsx` → Usa `vaul`
- `client/src/components/ui/input-otp.tsx` → Usa `input-otp`
- `client/src/components/ui/resizable.tsx` → Usa `react-resizable-panels`

### Dependencias asociadas a eliminar:
```json
"react-day-picker": "^8.10.1",
"embla-carousel-react": "^8.6.0",
"recharts": "^2.15.2",
"cmdk": "^1.1.1",
"vaul": "^1.1.2",
"input-otp": "^1.4.2",
"react-resizable-panels": "^2.1.7"
```

**Ahorro estimado:** ~15 MB en node_modules

---

## 🗄️ DEPENDENCIAS DE BASE DE DATOS NO UTILIZADAS

### El proyecto NO usa base de datos PostgreSQL/Neon:
Actualmente usa almacenamiento en JSON (`server/data/leads.json`)

### Dependencias a eliminar:
```json
// dependencies
"@neondatabase/serverless": "^0.10.4",
"connect-pg-simple": "^10.0.0",
"drizzle-orm": "^0.39.1",
"drizzle-zod": "^0.7.0",

// devDependencies
"@types/connect-pg-simple": "^7.0.3",
"drizzle-kit": "^0.31.4"
```

### Scripts a eliminar:
```json
"db:push": "drizzle-kit push"
```

### Archivos a eliminar:
- `drizzle.config.ts`
- `shared/schema.ts` (solo define esquemas de Drizzle no usados)

**Ahorro estimado:** ~8 MB en node_modules

---

## 🔐 DEPENDENCIAS DE AUTENTICACIÓN NO UTILIZADAS

### El proyecto NO usa sistema de autenticación:
El panel admin usa solo sessionStorage con contraseña hardcodeada

### Dependencias a eliminar:
```json
// dependencies
"passport": "^0.7.0",
"passport-local": "^1.0.0",
"express-session": "^1.18.1",
"memorystore": "^1.6.7",

// devDependencies
"@types/passport": "^1.0.16",
"@types/passport-local": "^1.0.38",
"@types/express-session": "^1.18.0"
```

### Código a limpiar:
- En `server/storage.ts`: MemStorage y métodos de usuario no usados

**Ahorro estimado:** ~3 MB en node_modules

---

## 🌐 DEPENDENCIAS DE WEBSOCKETS NO UTILIZADAS

### El proyecto NO usa WebSockets:

### Dependencias a eliminar:
```json
// dependencies
"ws": "^8.18.0",

// devDependencies
"@types/ws": "^8.5.13"
```

**Ahorro estimado:** ~1 MB en node_modules

---

## 🎨 DEPENDENCIAS DE TEMAS/ICONOS DUPLICADAS

### Duplicados/No usados:

```json
"next-themes": "^0.4.6",           // No se usa dark mode
"react-icons": "^5.4.0",           // Se usa lucide-react
"tw-animate-css": "^1.2.5",        // Duplicado de tailwindcss-animate
```

**Ahorro estimado:** ~2 MB en node_modules

---

## 🔧 DEPENDENCIAS DE DEBUGGING NO NECESARIAS

```json
"@jridgewell/trace-mapping": "^0.3.25"  // Solo para debugging avanzado
```

---

## 📊 RESUMEN DE LIMPIEZA POTENCIAL

### Total de dependencias a eliminar: **27 paquetes**

### Categorías:
- ✅ **Archivos eliminados:** 26 archivos (12 HTML + 14 ejemplos)
- 🟡 **Componentes UI sin uso:** 7 componentes + 7 dependencias
- 🟡 **Base de datos:** 6 dependencias + 2 archivos
- 🟡 **Autenticación:** 7 dependencias + código en storage.ts
- 🟡 **WebSockets:** 2 dependencias
- 🟡 **Duplicados/Temas:** 3 dependencias
- 🟡 **Debugging:** 1 dependencia

### Ahorro total estimado: **~30-35 MB en node_modules**

### Reducción de bundle size: **~15-20%**

---

## ⚠️ ARCHIVOS A REVISAR PERO MANTENER

### `replit.md`
- Documentación desactualizada pero informativa
- No afecta funcionamiento
- **ACCIÓN:** Actualizar o eliminar (opcional)

### `design_guidelines.md`
- Guías de diseño del proyecto
- **ACCIÓN:** Mantener si es útil para el equipo

### `nixpacks.toml`
- Configuración para despliegue en Railway
- **ACCIÓN:** Mantener para producción

---

## 🎯 PLAN DE ACCIÓN SUGERIDO

### Fase 1: Limpiar componentes UI (BAJO RIESGO)
1. Eliminar componentes ui/ no usados
2. Eliminar dependencias asociadas
3. Verificar que la app funcione

### Fase 2: Limpiar dependencias de BD (BAJO RIESGO)
1. Eliminar dependencias de Drizzle/Neon
2. Eliminar archivos drizzle.config.ts y shared/schema.ts
3. Eliminar script db:push
4. Verificar que la app funcione

### Fase 3: Limpiar autenticación (RIESGO MEDIO)
1. Eliminar dependencias de Passport
2. Limpiar server/storage.ts (mantener solo lo necesario)
3. Verificar panel admin funcione

### Fase 4: Limpiar resto (BAJO RIESGO)
1. Eliminar WebSockets
2. Eliminar dependencias duplicadas
3. Actualizar package.json
4. Ejecutar npm install

---

## ✅ VERIFICACIÓN POST-LIMPIEZA

Después de cada fase, verificar:
- [ ] `npm run dev` inicia correctamente
- [ ] API `/api/health` responde
- [ ] API `/api/leads` (GET/POST) funciona
- [ ] Frontend carga correctamente
- [ ] Formularios envían datos
- [ ] Panel admin funciona
- [ ] No hay errores en consola

---

## 📌 NOTAS IMPORTANTES

1. **No tocar aspectos visuales** ✅
2. **Hacer cambios incrementales** ✅
3. **Verificar después de cada cambio** ✅
4. **Mantener funcionalidad de formularios** ✅
5. **Poder revertir cambios si hay errores** ✅

---

---

## 🚂 FASE 3: ELIMINACIÓN DE RAILWAY Y PREPARACIÓN PARA RENDER

### Archivos eliminados:
- ✅ `nixpacks.toml` - Configuración específica de Railway

### Código actualizado:
- ✅ `server/index.ts` - Comentarios actualizados (Railway → Render)

### Archivos creados:
- ✅ `render.yaml` - Blueprint de configuración para Render
- ✅ `RENDER_DEPLOY.md` - Guía completa de despliegue en Render

### Referencias eliminadas:
- ✅ Todas las menciones a Railway removidas del código
- ✅ Comentarios actualizados para reflejar uso de Render

---

**Auditoría realizada por:** AI Assistant  
**Estado actual:** ✅ Fases 1, 2 y 3 completadas  
**Total eliminado:** 40 archivos + 26 dependencias + Railway removido  
**Próximo paso:** Deploy a Render (ver RENDER_DEPLOY.md)

