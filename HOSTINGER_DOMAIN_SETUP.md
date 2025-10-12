# 🌐 GUÍA RÁPIDA: Conectar maddypenuela.com con Render

## 📋 Resumen

Conectar tu dominio `maddypenuela.com` comprado en Hostinger con tu aplicación desplegada en Render.

---

## ⚡ PASOS RÁPIDOS (5 minutos)

### 1️⃣ En Render (2 minutos)

1. Abre [Render Dashboard](https://dashboard.render.com)
2. Selecciona tu servicio `maddy-web`
3. Ve a **Settings** → **Custom Domains**
4. Click **+ Add Custom Domain**
5. Escribe: `maddypenuela.com` → Click **Save**
6. Click **+ Add Custom Domain** otra vez
7. Escribe: `www.maddypenuela.com` → Click **Save**

📝 **Importante:** Render te mostrará la dirección a la que debes apuntar tu dominio. Copia esto:
```
Tu app: maddy-web.onrender.com
```

### 2️⃣ En Hostinger (3 minutos)

1. Abre [Hostinger Panel](https://hpanel.hostinger.com)
2. Ve a **Dominios**
3. Click en `maddypenuela.com`
4. Click en **DNS / Zona DNS**

#### Agregar/Modificar Registros:

**🔴 IMPORTANTE:** Elimina cualquier registro A o CNAME existente para `@` y `www`

**Registro 1 - Dominio Principal:**
```
Tipo:    CNAME
Nombre:  @ (o déjalo vacío)
Destino: maddy-web.onrender.com
TTL:     3600 (o automático)
```

**Registro 2 - Subdominio WWW:**
```
Tipo:    CNAME
Nombre:  www
Destino: maddy-web.onrender.com
TTL:     3600 (o automático)
```

**⚠️ NOTA:** Si Hostinger no permite CNAME en `@`, déjame saberlo y te daré la configuración alternativa con registros A.

### 3️⃣ Guardar y Esperar (5 min - 24 horas)

- Click **Guardar Cambios** en Hostinger
- Espera la propagación DNS (usualmente 15-60 minutos)
- El SSL se activará automáticamente después

---

## ✅ VERIFICACIÓN

### Verifica la Propagación DNS

1. Abre [WhatsmyDNS](https://www.whatsmydns.net/)
2. Busca: `maddypenuela.com`
3. Debe mostrar: `maddy-web.onrender.com`

### O usa PowerShell (Windows):

```powershell
# Verificar dominio principal
nslookup maddypenuela.com

# Verificar www
nslookup www.maddypenuela.com

# Limpiar caché DNS si es necesario
ipconfig /flushdns
```

### Prueba en el Navegador:

Después de 30-60 minutos, visita:
- ✅ `https://maddypenuela.com`
- ✅ `https://www.maddypenuela.com`

Ambos deben cargar tu sitio con el candado verde 🔒 (SSL activo)

---

## 🎯 CONFIGURACIÓN VISUAL DE HOSTINGER

Tu tabla de registros DNS debe verse así:

| Tipo  | Nombre | Destino                | TTL  | Estado |
|-------|--------|------------------------|------|--------|
| CNAME | @      | maddy-web.onrender.com | 3600 | ✅     |
| CNAME | www    | maddy-web.onrender.com | 3600 | ✅     |
| MX    | @      | mx1.hostinger.com      | 3600 | ✅     |

**Notas:**
- Mantén el registro MX si usas email con Hostinger
- Elimina otros registros A o CNAME que apunten al dominio raíz

---

## 🔧 PROBLEMAS COMUNES

### ❌ "Este dominio ya está en uso"
**Causa:** Otro servicio usa el dominio  
**Solución:** Elimina el dominio de cualquier otro servicio (Hostinger Hosting, etc.)

### ❌ "Hostinger no permite CNAME en @"
**Solución:** Usa Registro A en su lugar:
```
Tipo:    A
Nombre:  @
Destino: [IP que te proporcione Render]
TTL:     3600
```

### ❌ "SSL no se activa (Not Secure)"
**Causa:** DNS aún no propaga o mal configurado  
**Solución:**
1. Espera 30 minutos más
2. Verifica DNS con `nslookup`
3. En Render, ve a Custom Domains y verifica el estado SSL

### ❌ "Error 502/504 Bad Gateway"
**Causa:** Servicio dormido o no responde  
**Solución:**
1. Ve a Render Dashboard
2. Verifica que el servicio esté "Running" (verde)
3. Revisa los logs por errores
4. Si está en plan Free, espera 30 segundos a que despierte

### ❌ "DNS no propaga después de 24 horas"
**Solución:**
1. Verifica que escribiste correctamente el destino
2. NO agregues `https://` o `http://` en el destino
3. NO agregues punto final después del dominio
4. Contacta soporte de Hostinger

---

## 📱 CONFIGURACIÓN AVANZADA

### Redirigir WWW a Dominio Principal

En Render:
1. Ve a **Settings** → **Redirects**
2. Configura:
   ```
   Source: www.maddypenuela.com/*
   Destination: https://maddypenuela.com/:splat
   Status: 301 Permanent
   ```

### Activar CDN de Cloudflare (Opcional)

Si tu Hostinger incluye Cloudflare:
1. **NO lo actives durante la configuración inicial**
2. Espera a que el DNS funcione completamente (24-48 horas)
3. Luego activa Cloudflare desde Hostinger
4. Modifica los registros a "Proxied" (nube naranja)

---

## 🎉 VERIFICACIÓN FINAL

Una vez que todo funcione, verifica:

- ✅ `maddypenuela.com` carga tu sitio
- ✅ `www.maddypenuela.com` carga tu sitio
- ✅ Ambos redirigen automáticamente a HTTPS
- ✅ Candado verde en navegador (SSL activo)
- ✅ Formularios funcionan correctamente
- ✅ Panel admin accesible
- ✅ Assets (imágenes, CSS, JS) cargan correctamente

---

## 📞 NECESITAS AYUDA?

### Soporte Render
- [Render Docs - Custom Domains](https://render.com/docs/custom-domains)
- [Render Community](https://community.render.com)

### Soporte Hostinger
- Live Chat 24/7 en [hpanel.hostinger.com](https://hpanel.hostinger.com)
- Base de conocimientos: [support.hostinger.com](https://support.hostinger.com)

### Herramientas Útiles
- [WhatsmyDNS.net](https://www.whatsmydns.net/) - Verificar propagación DNS global
- [DNSChecker.org](https://dnschecker.org/) - Otra herramienta de verificación DNS
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Verificar certificado SSL

---

## 🚀 SIGUIENTE PASO

Una vez que tu dominio esté funcionando:

1. **Comparte tu sitio:** `https://maddypenuela.com`
2. **Actualiza enlaces:** En redes sociales, tarjetas de presentación, etc.
3. **Monitorea:** Revisa Render Dashboard regularmente
4. **Considera upgrade:** Plan Starter ($7/mes) para que nunca se duerma

---

**¡Éxito con tu sitio web!** 🎊

Tu sitio profesional estará disponible en `maddypenuela.com` muy pronto.

---

**Última actualización:** 12 de Octubre, 2025
**Dominio:** maddypenuela.com
**Hosting:** Render.com
**DNS:** Hostinger

