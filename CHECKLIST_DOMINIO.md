# ✅ CHECKLIST: Conectar maddypenuela.com

## 📝 PREPARACIÓN

- [ ] Tienes acceso a Render Dashboard
- [ ] Tienes acceso a Hostinger Panel
- [ ] Tu sitio está desplegado y funcionando en Render
- [ ] Sabes el nombre de tu servicio en Render: `maddy-web`

---

## 🎯 PASO 1: CONFIGURAR EN RENDER (5 min)

- [ ] 1.1. Abrir [dashboard.render.com](https://dashboard.render.com)
- [ ] 1.2. Click en el servicio `maddy-web`
- [ ] 1.3. Click en **Settings** (menú lateral izquierdo)
- [ ] 1.4. Scroll down hasta **Custom Domains**
- [ ] 1.5. Click en **+ Add Custom Domain**
- [ ] 1.6. Escribir: `maddypenuela.com`
- [ ] 1.7. Click **Save**
- [ ] 1.8. Anotar el destino: `________________________.onrender.com`
- [ ] 1.9. Click en **+ Add Custom Domain** nuevamente
- [ ] 1.10. Escribir: `www.maddypenuela.com`
- [ ] 1.11. Click **Save**

**✅ Completado cuando:** Ves ambos dominios listados en "Custom Domains"

---

## 🌐 PASO 2: CONFIGURAR DNS EN HOSTINGER (5 min)

- [ ] 2.1. Abrir [hpanel.hostinger.com](https://hpanel.hostinger.com)
- [ ] 2.2. Iniciar sesión con tu cuenta
- [ ] 2.3. Click en **Dominios** (menú superior)
- [ ] 2.4. Seleccionar `maddypenuela.com` de la lista
- [ ] 2.5. Click en **DNS / Zona DNS** o **DNS Zone**

### Limpiar Registros Antiguos:

- [ ] 2.6. Buscar registros tipo **A** con nombre `@` → **Eliminar**
- [ ] 2.7. Buscar registros tipo **CNAME** con nombre `@` → **Eliminar**
- [ ] 2.8. Buscar registros tipo **A** con nombre `www` → **Eliminar**
- [ ] 2.9. Buscar registros tipo **CNAME** con nombre `www` → **Eliminar**

**⚠️ NO ELIMINAR:** Registros MX (email), TXT (verificaciones), o NS (nameservers)

### Agregar Nuevos Registros:

#### Registro 1 - Dominio Principal (@)

- [ ] 2.10. Click **+ Agregar Registro** o **Add Record**
- [ ] 2.11. Seleccionar tipo: **CNAME**
- [ ] 2.12. Nombre: **@** (o dejar vacío)
- [ ] 2.13. Destino/Valor: `maddy-web.onrender.com`
- [ ] 2.14. TTL: **3600** (o automático)
- [ ] 2.15. Click **Guardar** o **Save**

#### Registro 2 - Subdominio WWW

- [ ] 2.16. Click **+ Agregar Registro** o **Add Record**
- [ ] 2.17. Seleccionar tipo: **CNAME**
- [ ] 2.18. Nombre: **www**
- [ ] 2.19. Destino/Valor: `maddy-web.onrender.com`
- [ ] 2.20. TTL: **3600** (o automático)
- [ ] 2.21. Click **Guardar** o **Save**

- [ ] 2.22. Verificar que ambos registros aparezcan en la lista
- [ ] 2.23. Click **Guardar Cambios** (si hay botón general)

**✅ Completado cuando:** Ves 2 registros CNAME en la tabla de DNS

---

## ⏰ PASO 3: ESPERAR PROPAGACIÓN (15-60 min)

- [ ] 3.1. Anotar hora actual: `__________`
- [ ] 3.2. Esperar al menos 15 minutos

### Mientras Esperas:

- [ ] 3.3. Tomar café/té ☕
- [ ] 3.4. Preparar contenido para publicar en el sitio
- [ ] 3.5. Actualizar redes sociales con el nuevo dominio

---

## 🔍 PASO 4: VERIFICAR DNS (Después de 15-30 min)

### Opción A: Herramienta Web (Recomendado)

- [ ] 4.1. Abrir [whatsmydns.net](https://www.whatsmydns.net)
- [ ] 4.2. Buscar: `maddypenuela.com`
- [ ] 4.3. Verificar que aparezca: `maddy-web.onrender.com`
- [ ] 4.4. Ver que esté propagado en varios países (mínimo 50%)

### Opción B: Comando Windows

- [ ] 4.5. Abrir PowerShell
- [ ] 4.6. Ejecutar: `nslookup maddypenuela.com`
- [ ] 4.7. Verificar que responda con datos de Render
- [ ] 4.8. Ejecutar: `nslookup www.maddypenuela.com`
- [ ] 4.9. Verificar que responda con datos de Render

### Si DNS No Propaga:

- [ ] 4.10. Limpiar caché DNS: `ipconfig /flushdns` en PowerShell
- [ ] 4.11. Esperar 30 minutos más
- [ ] 4.12. Verificar registros en Hostinger nuevamente
- [ ] 4.13. Si persiste después de 24h, contactar soporte Hostinger

**✅ Completado cuando:** `nslookup` o WhatsmyDNS muestran `maddy-web.onrender.com`

---

## 🔒 PASO 5: VERIFICAR SSL (Después de propagación DNS)

- [ ] 5.1. Esperar 10-15 minutos después de propagación DNS
- [ ] 5.2. Ir a Render Dashboard → Tu servicio → Settings → Custom Domains
- [ ] 5.3. Verificar que aparezca **certificado SSL** junto a cada dominio
- [ ] 5.4. Ver que el estado sea: **Verified** ✅

**✅ Completado cuando:** Ambos dominios muestran certificado SSL activo

---

## 🌐 PASO 6: PROBAR EN NAVEGADOR

### Probar Dominio Principal:

- [ ] 6.1. Abrir navegador (Chrome, Firefox, Edge)
- [ ] 6.2. Ir a: `http://maddypenuela.com`
- [ ] 6.3. Verificar que redirija a: `https://maddypenuela.com`
- [ ] 6.4. Ver candado verde 🔒 en la barra de direcciones
- [ ] 6.5. Verificar que cargue tu sitio correctamente

### Probar Subdominio WWW:

- [ ] 6.6. Ir a: `http://www.maddypenuela.com`
- [ ] 6.7. Verificar que redirija a: `https://www.maddypenuela.com`
- [ ] 6.8. Ver candado verde 🔒 en la barra de direcciones
- [ ] 6.9. Verificar que cargue tu sitio correctamente

### Probar Funcionalidad:

- [ ] 6.10. Hacer scroll por todo el sitio
- [ ] 6.11. Verificar que las imágenes carguen
- [ ] 6.12. Verificar que los estilos (CSS) se apliquen
- [ ] 6.13. Probar todos los botones/enlaces
- [ ] 6.14. Probar el formulario de contacto
- [ ] 6.15. Verificar que el formulario envíe correctamente
- [ ] 6.16. Acceder al panel admin (si aplica)
- [ ] 6.17. Verificar login y funcionalidad admin

### Probar en Móvil:

- [ ] 6.18. Abrir en celular: `https://maddypenuela.com`
- [ ] 6.19. Verificar diseño responsive
- [ ] 6.20. Probar navegación en móvil
- [ ] 6.21. Probar formularios en móvil

**✅ Completado cuando:** Todo funciona perfectamente en ambos dominios

---

## 🎨 PASO 7: CONFIGURACIONES ADICIONALES (Opcional)

### Redirección WWW → No-WWW (o viceversa):

- [ ] 7.1. Decidir qué prefieres: `maddypenuela.com` o `www.maddypenuela.com`
- [ ] 7.2. Ir a Render → Settings → Redirects
- [ ] 7.3. Configurar redirección 301
- [ ] 7.4. Probar en navegador

### Google Search Console:

- [ ] 7.5. Ir a [search.google.com/search-console](https://search.google.com/search-console)
- [ ] 7.6. Agregar propiedad: `maddypenuela.com`
- [ ] 7.7. Verificar con método DNS (TXT record)
- [ ] 7.8. Enviar sitemap

### Google Analytics:

- [ ] 7.9. Crear propiedad en Google Analytics
- [ ] 7.10. Agregar código de tracking a tu sitio
- [ ] 7.11. Verificar que funcione

### Redes Sociales:

- [ ] 7.12. Actualizar enlaces en Instagram
- [ ] 7.13. Actualizar enlaces en Facebook
- [ ] 7.14. Actualizar enlaces en LinkedIn
- [ ] 7.15. Actualizar enlaces en Twitter/X
- [ ] 7.16. Actualizar bio con nuevo dominio

---

## 📊 VERIFICACIÓN FINAL

- [ ] ✅ `https://maddypenuela.com` funciona
- [ ] ✅ `https://www.maddypenuela.com` funciona
- [ ] ✅ SSL activo (candado verde)
- [ ] ✅ Todas las páginas cargan
- [ ] ✅ Imágenes se ven correctamente
- [ ] ✅ Formularios envían
- [ ] ✅ Panel admin accesible
- [ ] ✅ Sitio funciona en móvil
- [ ] ✅ Sitio funciona en diferentes navegadores
- [ ] ✅ DNS propagado globalmente (verificar en whatsmydns.net)

---

## 📝 INFORMACIÓN PARA RECORDAR

**Dominio:** `maddypenuela.com`  
**Registrador:** Hostinger  
**Hosting:** Render  
**URL de Render:** `maddy-web.onrender.com`  

**Fecha de configuración:** `___/___/2025`  
**Fecha de renovación dominio:** `___/___/____`  

**Notas adicionales:**
```
_________________________________________________________________

_________________________________________________________________

_________________________________________________________________
```

---

## 🆘 SI ALGO SALE MAL

### DNS no propaga después de 24 horas:
- [ ] Verificar registros en Hostinger (sin errores tipográficos)
- [ ] Contactar soporte Hostinger: Live Chat 24/7
- [ ] Enviar screenshot de tus registros DNS

### SSL no se activa:
- [ ] Esperar 30 minutos más
- [ ] Verificar en Render que DNS esté detectado
- [ ] Contactar soporte Render si persiste

### Sitio no carga (502/504):
- [ ] Verificar que servicio esté activo en Render
- [ ] Ver logs en Render Dashboard
- [ ] Esperar 30 seg si está en plan Free (puede estar dormido)

### Contactos de Soporte:
- **Render:** [community.render.com](https://community.render.com)
- **Hostinger:** Chat 24/7 en hPanel
- **Documentación:** Ver archivos `RENDER_DEPLOY.md` y `HOSTINGER_DOMAIN_SETUP.md`

---

## 🎉 ¡FELICIDADES!

Una vez completado todo el checklist, tu sitio estará profesionalmente configurado y accesible en:

# 🌐 https://maddypenuela.com

Comparte tu sitio con el mundo! 🚀

---

**Checklist creado:** 12 de Octubre, 2025  
**Versión:** 1.0

