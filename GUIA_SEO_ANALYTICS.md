# 📊 GUÍA: Configurar Google Analytics y Meta Pixel

## ✅ LO QUE YA ESTÁ CONFIGURADO

Tu sitio `maddypenuela.com` ya tiene implementado:

- ✅ Todos los meta tags SEO (Open Graph, Twitter Cards)
- ✅ Schema.org (Structured Data) con tu información
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Componentes de Analytics preparados (listos para activar)
- ✅ Funciones de tracking listas para usar
- ✅ Favicon configurado

---

## 🎯 PRÓXIMOS PASOS - ANALYTICS

### 1️⃣ GOOGLE ANALYTICS 4 (Recomendado)

#### ¿Para qué sirve?
- Ver cuántas personas visitan tu sitio
- De dónde vienen (Instagram, Facebook, Google, etc.)
- Qué páginas ven más
- Cuánto tiempo pasan en tu sitio

#### ¿Cómo activarlo?

**Paso 1: Crear cuenta**
1. Ve a https://analytics.google.com
2. Crea una cuenta con tu Gmail
3. Haz click en "Empezar a medir"
4. Nombre de la cuenta: "Maddy Peñuela"
5. Nombre de la propiedad: "maddypenuela.com"
6. Configuración de la empresa: elige opciones apropiadas
7. Acepta los términos

**Paso 2: Obtener el ID**
1. Después de crear, verás "ID de medición"
2. Se ve así: `G-XXXXXXXXXX` (copia esto)
3. Guárdalo, lo necesitas

**Paso 3: Configurar en tu sitio**
1. Abre el archivo: `client/src/lib/analytics.ts`
2. Busca la línea: `export const GA_TRACKING_ID = 'G-XXXXXXXXXX';`
3. Reemplaza `'G-XXXXXXXXXX'` con tu ID real
4. Guarda el archivo

**Paso 4: Activar el código**
1. Abre el archivo: `client/src/components/Analytics.tsx`
2. Busca la sección de Google Analytics (línea ~30)
3. **Elimina** los `/*` al inicio y `*/` al final para descomentar
4. Guarda el archivo

**Paso 5: Importar en App**
1. Abre `client/src/App.tsx`
2. Agrega al inicio: `import Analytics from "@/components/Analytics";`
3. Dentro del return, después de `<TooltipProvider>`, agrega: `<Analytics />`

**Paso 6: Desplegar**
```bash
git add .
git commit -m "Activar Google Analytics"
git push origin main
```

Espera 5-10 minutos y verás los datos en Google Analytics.

---

### 2️⃣ META PIXEL (Facebook/Instagram)

#### ¿Para qué sirve?
- Rastrear conversiones desde Facebook/Instagram
- Crear públicos personalizados
- Optimizar anuncios
- Ver qué campañas funcionan mejor

#### ¿Cómo activarlo?

**Paso 1: Crear Pixel**
1. Ve a https://business.facebook.com/events_manager
2. Si no tienes cuenta de Business Manager, créala
3. Click en "Conectar orígenes de datos"
4. Selecciona "Web"
5. Click en "Empezar"
6. Selecciona "Meta Pixel"
7. Ponle nombre: "Maddy Peñuela Web"
8. URL del sitio web: `https://maddypenuela.com`

**Paso 2: Obtener el ID del Pixel**
1. En Events Manager, verás tu Pixel creado
2. El ID del Pixel es un número largo (ejemplo: `123456789012345`)
3. Cópialo

**Paso 3: Configurar en tu sitio**
1. Abre el archivo: `client/src/lib/analytics.ts`
2. Busca la línea: `export const META_PIXEL_ID = 'YOUR_PIXEL_ID';`
3. Reemplaza `'YOUR_PIXEL_ID'` con tu ID real
4. Guarda el archivo

**Paso 4: Activar el código**
1. Abre el archivo: `client/src/components/Analytics.tsx`
2. Busca la sección de Meta Pixel (línea ~50)
3. **Elimina** los `/*` al inicio y `*/` al final para descomentar
4. Guarda el archivo

**Paso 5: Desplegar** (mismo proceso que arriba)

---

## 📈 EVENTOS AUTOMÁTICOS YA CONFIGURADOS

Tu sitio ya tiene funciones para rastrear automáticamente:

### ✅ Eventos disponibles:

- **`trackFormSubmit(formName)`** - Cuando alguien envía un formulario
- **`trackWhatsAppClick()`** - Cuando hacen click en WhatsApp
- **`trackPhoneClick()`** - Cuando hacen click en teléfono
- **`trackEmailClick()`** - Cuando hacen click en email
- **`trackSocialMediaClick(platform)`** - Cuando hacen click en redes sociales

### Cómo usarlos en tu código:

```typescript
import { trackWhatsAppClick } from '@/lib/analytics';

// En el botón de WhatsApp:
<button onClick={() => {
  trackWhatsAppClick();
  // ... resto del código
}}>
  Contactar por WhatsApp
</button>
```

---

## 🔍 VERIFICAR QUE FUNCIONE

### Para Google Analytics:
1. Ve a https://analytics.google.com
2. Click en "Informes" → "Tiempo real"
3. Abre tu sitio en otra pestaña
4. Debes ver "1 usuario activo ahora"

### Para Meta Pixel:
1. Ve a https://business.facebook.com/events_manager
2. Click en tu Pixel
3. Abre tu sitio en otra pestaña
4. Verás eventos en "Test Events"

Alternativamente, instala:
- **Google Analytics Debugger** (extensión Chrome)
- **Meta Pixel Helper** (extensión Chrome)

---

## 📊 GOOGLE SEARCH CONSOLE

#### ¿Para qué sirve?
- Ver cómo aparece tu sitio en Google
- Qué términos buscan las personas
- Solucionar errores de indexación

#### ¿Cómo activarlo?

**Paso 1: Acceder**
1. Ve a https://search.google.com/search-console
2. Inicia sesión con tu Gmail
3. Click en "Agregar propiedad"
4. Selecciona "Prefijo de URL"
5. Escribe: `https://maddypenuela.com`

**Paso 2: Verificar propiedad**

**Método 1 - Etiqueta HTML (Más fácil):**
1. Google te dará un código como: `<meta name="google-site-verification" content="ABC123..." />`
2. Abre `client/index.html`
3. Pega el código dentro del `<head>`
4. Guarda y despliega
5. Vuelve a Search Console y click en "Verificar"

**Método 2 - Archivo HTML:**
1. Google te dará un archivo para descargar
2. Guárdalo en `client/public/`
3. Despliega
4. Vuelve a Search Console y click en "Verificar"

**Paso 3: Enviar sitemap**
1. Una vez verificado, ve a "Sitemaps" (menú lateral)
2. En "Agregar un nuevo sitemap", escribe: `sitemap.xml`
3. Click en "Enviar"

---

## 🎯 CHECKLIST COMPLETO

### Configuración Básica (Ya hecho ✅)
- [x] Meta tags SEO
- [x] Open Graph (Facebook/WhatsApp)
- [x] Twitter Cards
- [x] Schema.org
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Favicon

### Analytics (Tú decides activar)
- [ ] Crear cuenta Google Analytics
- [ ] Configurar GA_TRACKING_ID
- [ ] Descomentar código de Google Analytics
- [ ] Crear Meta Pixel
- [ ] Configurar META_PIXEL_ID
- [ ] Descomentar código de Meta Pixel
- [ ] Desplegar cambios
- [ ] Verificar que funcione

### Search Console (Recomendado)
- [ ] Verificar propiedad en Google Search Console
- [ ] Enviar sitemap.xml
- [ ] Configurar alertas

---

## 🚀 OPCIONAL: OPTIMIZACIONES AVANZADAS

### 1. Optimizar imágenes
Tus imágenes ya están bien, pero puedes convertirlas a WebP para más velocidad:
- Herramienta: https://squoosh.app
- Comprime las imágenes pesadas (hero, testimonios)

### 2. Lazy loading de imágenes
Ya está implementado en React por defecto.

### 3. PageSpeed Insights
1. Ve a https://pagespeed.web.dev
2. Escribe: `https://maddypenuela.com`
3. Ve las recomendaciones y mejora

---

## 📞 RESUMEN DE ARCHIVOS IMPORTANTES

```
client/
├── public/
│   ├── sitemap.xml          ← Ya configurado
│   ├── robots.txt           ← Ya configurado
│   └── images/
│       ├── favicon.png      ← Ya configurado
│       ├── logo-maddy.png   ← Tu logo
│       └── maddy-hero.png   ← Imagen principal
│
├── src/
│   ├── components/
│   │   ├── SEO.tsx          ← Componente SEO (ya usado en Home)
│   │   └── Analytics.tsx    ← DESCOMENTAR para activar
│   │
│   └── lib/
│       └── analytics.ts     ← CONFIGURAR IDs aquí
```

---

## 🎊 SIGUIENTE ACCIÓN

### SI QUIERES ANALYTICS AHORA:
1. Crea cuenta en Google Analytics
2. Obtén el ID
3. Avísame y te ayudo a activarlo

### SI LO DEJAS PARA DESPUÉS:
- Tu sitio ya está optimizado para SEO ✅
- Cuando estés lista, solo activas Analytics
- Todo el código ya está preparado

---

**¿Preguntas? Avísame y te ayudo con cualquier paso.** 🚀

**Fecha:** 12 de Octubre, 2025
**Sitio:** https://maddypenuela.com

