# 🎯 PASOS EXACTOS - 5 MINUTOS

## ✅ CONFIGURACIÓN COMPLETA

Basado en las instrucciones oficiales de Render para `maddypenuela.com`

---

## 📍 PASO 1: HOSTINGER - Dominio Principal (2 min)

### Abre Hostinger:
```
https://hpanel.hostinger.com
→ Dominios
→ maddypenuela.com
→ DNS / Zona DNS
```

### Elimina estos registros si existen:
- ❌ Registro **A** con nombre `@`
- ❌ Registro **CNAME** con nombre `@`

### Agrega este registro:
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Tipo:     A                 ┃
┃ Nombre:   @                 ┃
┃ Apunta a: 216.24.57.1       ┃
┃ TTL:      3600              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**[Click Guardar]**

---

## 📍 PASO 2: HOSTINGER - Subdominio WWW (1 min)

### En la misma pantalla de DNS:

### Elimina estos registros si existen:
- ❌ Registro **A** con nombre `www`
- ❌ Registro **CNAME** con nombre `www`

### Agrega este registro:
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Tipo:     CNAME                     ┃
┃ Nombre:   www                       ┃
┃ Apunta a: maddy-web.onrender.com    ┃
┃ TTL:      3600                      ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**[Click Guardar Cambios]**

---

## 📍 PASO 3: VERIFICAR EN POWERSHELL (30 seg)

Abre PowerShell y ejecuta:

```powershell
ipconfig /flushdns

nslookup maddypenuela.com
```

**Debe mostrar:**
```
Address: 216.24.57.1   ← ✅ CORRECTO
```

```powershell
nslookup www.maddypenuela.com
```

**Debe mostrar:**
```
canonical name = maddy-web.onrender.com   ← ✅ CORRECTO
```

**⏰ Si no muestra esto, espera 5-10 minutos y vuelve a intentar.**

---

## 📍 PASO 4: VERIFICAR EN RENDER (1 min)

```
https://dashboard.render.com
→ Tu servicio: maddy-web
→ Settings
→ Custom Domains
```

### Para `maddypenuela.com`:
- Click en **[Verify]**
- Debe cambiar a: ✅ **Verified**

### Para `www.maddypenuela.com`:
- Click en **[Verify]**
- Debe cambiar a: ✅ **Verified**

**⏰ Si dice "DNS update needed", espera 5 minutos y vuelve a hacer click en Verify.**

---

## 📍 PASO 5: ESPERAR SSL (15-30 min)

Una vez verificado:
- Render generará certificados SSL automáticamente
- Verás un candado 🔒 al lado de cada dominio
- Estado cambiará a "Active"

**No hagas nada, es automático. ☕ Toma un café.**

---

## 📍 PASO 6: PROBAR EN NAVEGADOR (30 seg)

Después de 30 minutos:

### Prueba 1:
```
Ir a: http://maddypenuela.com
```
**Debe:**
- ✅ Redirigir a `https://maddypenuela.com`
- ✅ Mostrar tu sitio
- ✅ Mostrar candado verde 🔒

### Prueba 2:
```
Ir a: http://www.maddypenuela.com
```
**Debe:**
- ✅ Redirigir a `https://maddypenuela.com`
- ✅ Mostrar tu sitio
- ✅ Mostrar candado verde 🔒

---

## ✅ LISTO! 🎉

Tu sitio está ahora en:

# 🌐 https://maddypenuela.com

Compártelo con el mundo! 🚀

---

## 🚨 SI ALGO FALLA

### Error: "Hostinger no permite registro A en @"
**Solución:** Contacta chat de Hostinger (24/7 en hPanel) y pide ayuda para agregar el registro.

### Error: DNS no propaga después de 1 hora
**Solución:** 
1. Verifica que escribiste correctamente: `216.24.57.1`
2. Verifica que no agregaste espacios
3. Contacta soporte Hostinger

### Error: Render no verifica el dominio
**Solución:**
1. Espera 15 minutos más
2. Verifica con `nslookup maddypenuela.com` que muestre `216.24.57.1`
3. Click en "Verify" nuevamente en Render

### Error: SSL no se activa
**Solución:**
1. Espera 30 minutos más después de verificación
2. Verifica que ambos dominios estén "Verified" en Render
3. Contacta soporte Render si persiste después de 2 horas

---

## 📋 RESUMEN VISUAL

```
HOSTINGER DNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tipo │ Nombre │ Apunta a              │ TTL
─────┼────────┼───────────────────────┼─────
  A  │   @    │ 216.24.57.1           │ 3600  ← Dominio principal
CNAME│  www   │ maddy-web.onrender.com│ 3600  ← Subdominio www
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

             ↓  (esperar 15-30 min)

RENDER DASHBOARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ maddypenuela.com         🔒 SSL Active
✅ www.maddypenuela.com     🔒 SSL Active
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

             ↓

RESULTADO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 https://maddypenuela.com  ← Tu sitio!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**Total:** 5 minutos configuración + 30 minutos espera = ✅ **Listo en 35 minutos**

---

**Fecha:** 12 de Octubre, 2025

