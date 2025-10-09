# Landing Page de Reclutamiento - Maddy Peñuela

## 📋 Resumen del Proyecto

Landing page motivacional para reclutamiento de comunidad latina en Estados Unidos. Diseñada con estética Nintendo moderna, colores vibrantes y enfoque emocional.

**Creado:** Octubre 2025  
**Stack:** React + TypeScript + Tailwind CSS + Express  
**Propósito:** Página de captación para Carta Business Group

---

## 🎨 Paleta de Colores (Nintendo-Inspired)

### Colores Principales
- **Navy:** `#102C3A` (195 60% 15%) - Texto principal, títulos
- **Royal Blue:** `#26358C` (234 55% 35%) - Elementos secundarios
- **Cyan Blue:** `#048ABF` (194 95% 38%) - Acentos, CTAs
- **Off-White:** `#FFFFF3` (48 100% 98%) - Texto sobre fondos oscuros
- **Coral:** `#F28D77` (9 75% 70%) - Botones principales, highlights
- **Grays:** Del `#222222` al `#E5E5E5` - Fondos, bordes

### Uso en Tailwind
```tsx
// Colores disponibles en Tailwind:
text-navy          // Navy oscuro
bg-royal-blue      // Azul real
text-cyan-blue     // Cyan brillante
bg-coral           // Coral/salmon
text-[#FFFFF3]     // Off-white
```

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas
```
client/src/
├── components/          # Componentes de secciones
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── BenefitsSection.tsx
│   ├── StatsSection.tsx
│   ├── PainIdentificationSection.tsx
│   ├── StorySection.tsx
│   ├── OpportunitySection.tsx
│   ├── AuthoritySection.tsx
│   ├── RecruitmentSection.tsx
│   ├── TestimonialsCardsSection.tsx
│   ├── ClosingFormSection.tsx
│   ├── ui/              # Componentes Shadcn/UI
│   └── examples/        # Componentes de ejemplo
├── pages/
│   ├── Home.tsx         # Página principal
│   └── not-found.tsx
├── lib/
│   ├── queryClient.ts   # TanStack Query config
│   └── utils.ts
├── hooks/
├── App.tsx
├── main.tsx
└── index.css            # Variables CSS + Tailwind

server/
├── index.ts             # Express server
├── routes.ts            # API routes
├── storage.ts           # In-memory storage
└── vite.ts              # Vite integration

shared/
└── schema.ts            # Tipos compartidos (Drizzle + Zod)
```

---

## 📄 Secciones de la Landing Page (en orden)

### 1. **Navbar**
- Logo/nombre "Maddy Peñuela"
- Links de navegación
- CTA: "Quiero empezar"
- Diseño fixed/sticky

### 2. **Hero Section**
- Título grande emocional
- Subtítulo descriptivo
- CTA principal
- Imagen/visual de fondo con gradiente
- Partículas decorativas flotantes

### 3. **Benefits Section**
- Grid de beneficios con iconos
- Tarjetas con hover effects
- 4-6 beneficios principales

### 4. **Stats Section**
- Números impactantes (años, personas, etc.)
- Animaciones de conteo
- Fondo con gradiente

### 5. **Pain Identification Section** ("¿Te identificas?")
- 4 puntos de dolor con iconos emocionales
- Tarjetas con fondo blanco/translúcido
- Cita en itálica coral
- Gradiente gris → azul claro

### 6. **Story Section** ("Mi historia puede ser la tuya")
- Split screen (texto left, imagen right)
- Gradiente dramático azul → coral
- Círculos decorativos flotantes
- CTA: "Quiero conocer cómo lo lograste"

### 7. **Opportunity Section** ("La oportunidad real")
- Grid 2-3 columnas de beneficios
- 5 tarjetas con iconos coral
- Fondos alternados (blanco/azul claro)
- CTA con gradiente coral → cyan

### 8. **Authority Section** ("Respaldo y confianza")
- Fondo navy → royal blue
- 4 logos de empresas (Globe Life, Carta Business Group, S&P 500, AIL)
- Tarjetas con bordes azules y glow
- Texto en off-white

### 9. **Recruitment Section**
- Grid 2 columnas
- Imagen profesional + texto
- Checkmarks teal en lista
- Círculos decorativos

### 10. **Testimonials Cards Section** ("Historias que inspiran")
- 3 tarjetas de testimonios
- Avatares con iniciales
- Quotes en itálica
- Borde coral al hover
- CTA: "Quiero ser el próximo testimonio"

### 11. **Closing Form Section** ("Tu historia también puede cambiar")
- Gradiente azul → coral
- Formulario con 4 campos:
  - Nombre completo
  - WhatsApp
  - Ciudad
  - Meta personal
- Inputs translúcidos con backdrop-blur
- Sparkles animados flotantes
- CTA: "QUIERO DAR EL PRIMER PASO"
- Footer integrado con copyright

---

## 🎨 Guías de Diseño

### Tipografía
- **Montserrat:** Texto regular, párrafos
- **Poppins:** Títulos, SemiBold

### Espaciado
- Secciones: `py-20` (80px vertical)
- Contenedores: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Gap entre elementos: `space-y-6`, `gap-8`, `gap-12`

### Efectos y Animaciones
- **Hover states:** Transiciones de 200-300ms
- **Shadows:** De subtle a dramatic según jerarquía
- **Gradientes:** Usados ampliamente para fondos dramáticos
- **Blur effects:** `backdrop-blur-sm` en inputs y overlays
- **Glow effects:** `shadow-[0_0_20px_rgba(...)]` en CTAs

### Botones
- **Coral principal:** Bordes redondeados, glow al hover
- **Gradiente coral→cyan:** Para CTAs importantes
- **Rounded corners:** `rounded-[40px]`, `rounded-xl`, `rounded-2xl`
- **Elevación:** Leve `-translate-y-0.5` al hover

### Elementos Decorativos
- Círculos flotantes con gradientes translúcidos
- Partículas/sparkles animados
- Overlays geométricos con opacidad baja
- Bordes y glows sutiles

---

## 🛠️ Stack Técnico

### Frontend
- **React 18** con TypeScript
- **Wouter** para routing
- **TanStack Query v5** para data fetching
- **React Hook Form** + Zod para formularios
- **Tailwind CSS v3** para estilos
- **Shadcn/UI** componentes base
- **Lucide React** para iconos
- **Framer Motion** (disponible para animaciones)

### Backend
- **Express.js** server
- **Vite** dev server + build
- **In-memory storage** (no database por ahora)
- **Drizzle ORM** + Zod validation (configurado pero no usado)

### Desarrollo
- **TypeScript 5.6**
- **Hot reload** automático (Vite HMR)
- **ESBuild** para builds de producción

---

## 🚀 Cómo Trabajar en el Proyecto

### Comandos Disponibles
```bash
npm run dev      # Inicia servidor de desarrollo (puerto 5000)
npm run build    # Build de producción
npm run start    # Inicia servidor de producción
npm run check    # Type checking de TypeScript
```

### Workflow de Desarrollo
1. El servidor ya está corriendo con `npm run dev`
2. Edita archivos en `client/src/` para frontend
3. Edita archivos en `server/` para backend
4. Los cambios se reflejan automáticamente (hot reload)
5. La app corre en **http://localhost:5000**

### Agregar Nuevas Secciones
1. Crear componente en `client/src/components/NombreSeccion.tsx`
2. Importar y agregar en `client/src/pages/Home.tsx`
3. Usar colores de la paleta definida
4. Seguir patrones de espaciado existentes
5. Agregar data-testid para elementos interactivos

### Modificar Colores
- Editar variables CSS en `client/src/index.css`
- Colores definidos en formato HSL: `H S% L%`
- Soporte light/dark mode (aunque no usado actualmente)

---

## 📦 Dependencias Clave

### UI Components (Shadcn/UI)
- Avatar, Button, Badge, Card
- Form, Input, Textarea
- Dialog, Dropdown, Tooltip
- Todos con variantes y estados preconfigurados

### Utilities
- `clsx` + `tailwind-merge` para clases condicionales
- `class-variance-authority` para variantes de componentes
- `zod` para validación de schemas

---

## 🎯 Próximos Pasos Sugeridos

1. **Conectar formulario de contacto** a backend real o servicio (Airtable, Google Sheets, email)
2. **Agregar imágenes reales** en secciones (Hero, Story, Recruitment)
3. **Implementar tracking/analytics** (Google Analytics, Meta Pixel)
4. **Optimizar SEO** (meta tags, Open Graph)
5. **Probar responsividad** en móviles reales
6. **Agregar validación robusta** al formulario
7. **Configurar dominio** personalizado

---

## 🐛 Notas Técnicas

### Variables de Entorno
- `SESSION_SECRET`: Ya configurado en Replit Secrets

### Convenciones de Código
- Componentes en PascalCase
- Archivos `.tsx` para componentes React
- Usar `data-testid` en elementos interactivos
- Preferir utility classes de Tailwind sobre CSS custom

### Limitaciones Actuales
- Sin base de datos (solo in-memory storage)
- Sin autenticación de usuarios
- Sin integración con CRM/email marketing
- Formulario solo hace console.log por ahora

---

## 📞 Información de Contacto en la Página

- **Empresa:** Carta Business Group
- **Representante:** Maddy Peñuela
- **Empresas respaldadas:** Globe Life, American Income Life, S&P 500
- **Copyright:** © 2025 Maddy Peñuela | Carta Business Group

---

**Última actualización:** Octubre 9, 2025
