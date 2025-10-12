# ⚡ CONFIGURACIÓN EXACTA - HOSTINGER + RENDER

## 🎯 Instrucciones Específicas para maddypenuela.com

Basado en las instrucciones exactas de Render, aquí está la configuración precisa para Hostinger.

---

## 📋 LO QUE RENDER NECESITA:

### Dominio Principal: `maddypenuela.com`
```
✅ OPCIÓN 1: ANAME o ALIAS → maddy-web.onrender.com
✅ OPCIÓN 2: Registro A → 216.24.57.1
```

### Subdominio WWW: `www.maddypenuela.com`
```
✅ CNAME → maddy-web.onrender.com
```

---

## 🔧 CONFIGURACIÓN EN HOSTINGER

### PASO 1: Acceder a DNS

1. Ve a [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Click en **Dominios**
3. Selecciona `maddypenuela.com`
4. Click en **DNS / Zona DNS**

---

### PASO 2: Configurar Dominio Principal (@)

**⚠️ Hostinger NO soporta ANAME/ALIAS**, así que usaremos el **Registro A**:

#### **Eliminar registros antiguos:**
- Busca cualquier registro tipo **A** con nombre `@` → **ELIMINAR**
- Busca cualquier registro tipo **CNAME** con nombre `@` → **ELIMINAR**

#### **Agregar nuevo registro A:**

```
Tipo:    A
Nombre:  @ (o dejar vacío, según Hostinger)
Apunta a: 216.24.57.1
TTL:     3600 (o automático)
```

**Captura de pantalla de cómo debe verse:**
```
┌──────────────────────────────────────────┐
│ Tipo: A                                  │
│ Nombre: @                                │
│ Apunta a: 216.24.57.1                    │
│ TTL: 3600                                │
│ [Guardar]                                │
└──────────────────────────────────────────┘
```

---

### PASO 3: Configurar Subdominio WWW

#### **Eliminar registros antiguos:**
- Busca cualquier registro tipo **A** con nombre `www` → **ELIMINAR**
- Busca cualquier registro tipo **CNAME** con nombre `www` → **ELIMINAR**

#### **Agregar nuevo registro CNAME:**

```
Tipo:    CNAME
Nombre:  www
Apunta a: maddy-web.onrender.com
TTL:     3600 (o automático)
```

**⚠️ IMPORTANTE:** 
- NO agregues `https://` ni `http://`
- NO agregues punto `.` al final
- Solo escribe: `maddy-web.onrender.com`

**Captura de pantalla de cómo debe verse:**
```
┌──────────────────────────────────────────┐
│ Tipo: CNAME                              │
│ Nombre: www                              │
│ Apunta a: maddy-web.onrender.com        │
│ TTL: 3600                                │
│ [Guardar]                                │
└──────────────────────────────────────────┘
```

---

### PASO 4: Guardar Cambios

- Click en **Guardar** o **Guardar Cambios**
- Espera la confirmación

---

## 📊 TABLA RESUMEN DE REGISTROS DNS

Tu zona DNS en Hostinger debe quedar así:

| Tipo  | Nombre | Apunta a / Valor       | TTL  | Acción   |
|-------|--------|------------------------|------|----------|
| A     | @      | 216.24.57.1            | 3600 | ✅ CREAR |
| CNAME | www    | maddy-web.onrender.com | 3600 | ✅ CREAR |
| MX    | @      | mx1.hostinger.com      | 3600 | ⚪ MANTENER (si usas email) |

**Registros que DEBES ELIMINAR:**
- ❌ Cualquier otro registro A con nombre `@`
- ❌ Cualquier registro CNAME con nombre `@`
- ❌ Cualquier registro A o CNAME antiguo con nombre `www`

---

## ⏰ VERIFICACIÓN EN RENDER

### Espera 5-15 minutos, luego:

1. Ve a [Render Dashboard](https://dashboard.render.com)
2. Abre tu servicio `maddy-web`
3. Ve a **Settings** → **Custom Domains**
4. Verás los dos dominios:
   - `maddypenuela.com`
   - `www.maddypenuela.com`

### Para verificar cada dominio:

#### En `maddypenuela.com`:
- Click en **Verify** (botón al lado del dominio)
- Si el DNS está configurado correctamente, aparecerá: ✅ **Verified**
- Render automáticamente empezará a generar el certificado SSL

#### En `www.maddypenuela.com`:
- Click en **Verify**
- Debe verificarse automáticamente si el CNAME está correcto

---

## 🔍 VERIFICACIÓN CON COMANDOS

### Abrir PowerShell y ejecutar:

```powershell
# Limpiar caché DNS primero
ipconfig /flushdns

# Verificar dominio principal (debe mostrar 216.24.57.1)
nslookup maddypenuela.com

# Verificar www (debe mostrar maddy-web.onrender.com)
nslookup www.maddypenuela.com

# Verificar que la IP de Render sea correcta
nslookup maddy-web.onrender.com
```

### Resultados esperados:

```
> nslookup maddypenuela.com
...
Address: 216.24.57.1         ← ✅ ESTO DEBE APARECER

> nslookup www.maddypenuela.com
...
www.maddypenuela.com
        canonical name = maddy-web.onrender.com   ← ✅ ESTO DEBE APARECER
Address: 216.24.57.1
```

---

## 🔒 ACTIVACIÓN DE SSL (Automático)

Una vez que Render verifique los dominios:

1. **Espera 5-15 minutos**
2. Render generará automáticamente certificados SSL (Let's Encrypt)
3. Verás un candado verde 🔒 al lado de cada dominio en Render
4. El estado cambiará de "DNS update needed" a "Active" ✅

---

## ✅ VERIFICACIÓN FINAL EN NAVEGADOR

Después de 15-30 minutos:

### Prueba 1: Dominio Principal
```
1. Abre navegador
2. Escribe: http://maddypenuela.com
3. Debe redirigir a: https://maddypenuela.com
4. Tu sitio debe cargar con candado verde 🔒
```

### Prueba 2: Subdominio WWW
```
1. Escribe: http://www.maddypenuela.com
2. Según Render: redirige a https://maddypenuela.com
3. Tu sitio debe cargar
```

---

## 🎯 INSTRUCCIONES VISUALES PARA HOSTINGER

### Pantalla de DNS en Hostinger:

```
┌─────────────────────────────────────────────────────────┐
│  DNS / Nameservers                                      │
│  ─────────────────                                      │
│                                                         │
│  DNS Records                                            │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                         │
│  ┌───────────────────────────────────────────────┐    │
│  │ Tipo │ Nombre │ Apunta a           │ TTL      │    │
│  ├──────┼────────┼────────────────────┼──────────┤    │
│  │  A   │   @    │ 216.24.57.1        │ 3600     │    │
│  │ CNAME│  www   │maddy-web.onrender..│ 3600     │    │
│  └───────────────────────────────────────────────┘    │
│                                                         │
│  [+ Agregar Registro]                                  │
│                                                         │
│  [Guardar Cambios]                                     │
└─────────────────────────────────────────────────────────┘
```

---

## 🚨 SI HOSTINGER RECHAZA EL REGISTRO A EN @

Algunos proveedores DNS (incluyendo algunos planes de Hostinger) pueden rechazar ciertos registros. Si esto ocurre:

### Alternativa 1: Usar CNAME Flatten (si disponible)
Busca una opción llamada "CNAME Flattening" o "CNAME at root" en configuración avanzada.

### Alternativa 2: Contactar Soporte Hostinger
```
Chat 24/7 en hPanel (esquina inferior derecha)
Mensaje sugerido:

"Hola, necesito agregar un registro A en mi dominio raíz (@) 
apuntando a la IP 216.24.57.1 para mi aplicación en Render.
¿Pueden ayudarme con esto?"
```

### Alternativa 3: Usar Cloudflare DNS (Gratis)
Si Hostinger no permite los registros necesarios:
1. Crear cuenta en Cloudflare (gratis)
2. Apuntar nameservers de Hostinger a Cloudflare
3. Configurar DNS en Cloudflare (que SÍ soporta todo)

**Te puedo ayudar con esta configuración si la necesitas.**

---

## 📝 CHECKLIST RÁPIDO

```
Hostinger:
[ ] Acceder a DNS de maddypenuela.com
[ ] Eliminar registros A antiguos en @
[ ] Eliminar registros CNAME antiguos en @
[ ] Agregar registro A: @ → 216.24.57.1
[ ] Eliminar registros antiguos en www
[ ] Agregar registro CNAME: www → maddy-web.onrender.com
[ ] Guardar cambios
[ ] Esperar 5-15 minutos

Verificación:
[ ] Ejecutar: ipconfig /flushdns
[ ] Ejecutar: nslookup maddypenuela.com (debe mostrar 216.24.57.1)
[ ] Ejecutar: nslookup www.maddypenuela.com (debe mostrar maddy-web.onrender.com)

Render:
[ ] Click en Verify para maddypenuela.com
[ ] Click en Verify para www.maddypenuela.com
[ ] Esperar estado "Verified" ✅
[ ] Esperar SSL activo 🔒

Navegador (después de 30 min):
[ ] https://maddypenuela.com carga
[ ] https://www.maddypenuela.com carga (y redirige)
[ ] Candado verde visible
[ ] Sitio funciona correctamente
```

---

## 📞 NECESITAS AYUDA?

Si algo no funciona después de 1 hora:

1. **Toma screenshot** de tu configuración DNS en Hostinger
2. **Ejecuta** estos comandos y copia resultados:
   ```powershell
   nslookup maddypenuela.com
   nslookup www.maddypenuela.com
   ```
3. **Verifica** en Render el estado de los dominios
4. **Contacta** soporte Hostinger si no puedes agregar registros

---

## ✨ RESUMEN DE IPs Y DOMINIOS

```
Tu dominio comprado:    maddypenuela.com
IP de Render:           216.24.57.1
Dominio de Render:      maddy-web.onrender.com

Configuración DNS:
  @ (raíz)  →  A record    →  216.24.57.1
  www       →  CNAME       →  maddy-web.onrender.com
```

---

**¡Todo listo! Sigue estos pasos exactos y tu dominio estará funcionando en menos de 1 hora.** 🚀

**Fecha:** 12 de Octubre, 2025  
**Basado en:** Instrucciones oficiales de Render

