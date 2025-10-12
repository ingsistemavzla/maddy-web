# 🔧 COMANDOS ÚTILES - DNS & DOMINIO

## 📌 Información del Proyecto

**Dominio:** `maddypenuela.com`  
**Servicio Render:** `maddy-web.onrender.com`  
**Panel Hostinger:** [hpanel.hostinger.com](https://hpanel.hostinger.com)  
**Dashboard Render:** [dashboard.render.com](https://dashboard.render.com)

---

## 💻 COMANDOS WINDOWS (PowerShell)

### Verificar DNS

```powershell
# Ver información DNS del dominio principal
nslookup maddypenuela.com

# Ver información DNS del subdominio www
nslookup www.maddypenuela.com

# Ver todos los registros DNS
nslookup -type=ANY maddypenuela.com

# Ver registros CNAME específicamente
nslookup -type=CNAME maddypenuela.com

# Ver registros A específicamente
nslookup -type=A maddypenuela.com

# Verificar registros MX (email)
nslookup -type=MX maddypenuela.com

# Usar servidor DNS específico (Google DNS)
nslookup maddypenuela.com 8.8.8.8

# Usar servidor DNS de Cloudflare
nslookup maddypenuela.com 1.1.1.1
```

### Limpiar Caché DNS

```powershell
# Limpiar toda la caché DNS local
ipconfig /flushdns

# Ver configuración DNS actual
ipconfig /displaydns

# Ver toda la configuración de red
ipconfig /all
```

### Verificar Conectividad

```powershell
# Ping al dominio (verificar que resuelva)
ping maddypenuela.com

# Ping al subdominio www
ping www.maddypenuela.com

# Traceroute para ver la ruta
tracert maddypenuela.com

# Verificar puerto HTTPS
Test-NetConnection maddypenuela.com -Port 443

# Verificar puerto HTTP
Test-NetConnection maddypenuela.com -Port 80
```

### Verificar Certificado SSL

```powershell
# PowerShell 7+ - Ver info del certificado
$cert = (Invoke-WebRequest -Uri https://maddypenuela.com).BaseResponse.ServerCertificate
$cert | Format-List

# Ver fecha de expiración
(Invoke-WebRequest -Uri https://maddypenuela.com).BaseResponse.ServerCertificate.GetExpirationDateString()
```

### Descargar Página (Testing)

```powershell
# Ver respuesta HTTP
Invoke-WebRequest -Uri https://maddypenuela.com

# Ver solo headers
(Invoke-WebRequest -Uri https://maddypenuela.com).Headers

# Ver código de estado
(Invoke-WebRequest -Uri https://maddypenuela.com).StatusCode

# Seguir redirecciones
Invoke-WebRequest -Uri http://maddypenuela.com -MaximumRedirection 5
```

---

## 🌐 HERRAMIENTAS WEB (Sin Instalar Nada)

### Verificar Propagación DNS Global

```
https://www.whatsmydns.net/#CNAME/maddypenuela.com
https://dnschecker.org/all-dns-records-of-domain.php?query=maddypenuela.com
https://mxtoolbox.com/SuperTool.aspx?action=cname%3amaddypenuela.com
```

### Verificar SSL/HTTPS

```
https://www.ssllabs.com/ssltest/analyze.html?d=maddypenuela.com
https://www.sslshopper.com/ssl-checker.html#hostname=maddypenuela.com
```

### Verificar Velocidad del Sitio

```
https://pagespeed.web.dev/
https://gtmetrix.com/
https://tools.pingdom.com/
```

### Verificar Headers HTTP

```
https://securityheaders.com/?q=maddypenuela.com
https://tools.keycdn.com/curl
```

---

## 🔄 CONFIGURACIONES ALTERNATIVAS DNS

### Opción 1: CNAME (Recomendado - Si Hostinger lo permite)

```
Dominio Principal (@):
Tipo:     CNAME
Nombre:   @
Destino:  maddy-web.onrender.com
TTL:      3600

Subdominio WWW:
Tipo:     CNAME
Nombre:   www
Destino:  maddy-web.onrender.com
TTL:      3600
```

### Opción 2: Registro A (Si Hostinger NO permite CNAME en @)

**Paso 1:** Obtener la IP de Render

```powershell
nslookup maddy-web.onrender.com
```

Copia la IP (ejemplo: `216.24.57.1`)

**Paso 2:** Configurar en Hostinger

```
Dominio Principal (@):
Tipo:     A
Nombre:   @
Destino:  [IP de Render] (ejemplo: 216.24.57.1)
TTL:      3600

Subdominio WWW:
Tipo:     CNAME
Nombre:   www
Destino:  maddy-web.onrender.com
TTL:      3600
```

⚠️ **NOTA:** La IP de Render puede cambiar. Es mejor usar CNAME si es posible.

### Opción 3: ALIAS/ANAME (Si Hostinger lo soporta)

```
Dominio Principal (@):
Tipo:     ALIAS (o ANAME)
Nombre:   @
Destino:  maddy-web.onrender.com
TTL:      3600

Subdominio WWW:
Tipo:     CNAME
Nombre:   www
Destino:  maddy-web.onrender.com
TTL:      3600
```

---

## 📋 TABLA DE REGISTROS DNS COMPLETA

### Configuración Mínima (Solo Web)

| Tipo  | Nombre | Destino/Valor          | TTL  | Prioridad |
|-------|--------|------------------------|------|-----------|
| CNAME | @      | maddy-web.onrender.com | 3600 | -         |
| CNAME | www    | maddy-web.onrender.com | 3600 | -         |

### Configuración Completa (Web + Email Hostinger)

| Tipo  | Nombre | Destino/Valor          | TTL  | Prioridad |
|-------|--------|------------------------|------|-----------|
| CNAME | @      | maddy-web.onrender.com | 3600 | -         |
| CNAME | www    | maddy-web.onrender.com | 3600 | -         |
| MX    | @      | mx1.hostinger.com      | 3600 | 10        |
| MX    | @      | mx2.hostinger.com      | 3600 | 20        |
| TXT   | @      | v=spf1 mx ptr ~all     | 3600 | -         |

### Configuración con Subdominio API (Opcional)

| Tipo  | Nombre | Destino/Valor          | TTL  | Prioridad |
|-------|--------|------------------------|------|-----------|
| CNAME | @      | maddy-web.onrender.com | 3600 | -         |
| CNAME | www    | maddy-web.onrender.com | 3600 | -         |
| CNAME | api    | maddy-web.onrender.com | 3600 | -         |

Esto permitiría acceder también a: `https://api.maddypenuela.com`

---

## 🚨 DIAGNÓSTICO RÁPIDO

### ¿Por qué mi dominio no funciona?

#### Test 1: ¿El DNS está configurado?

```powershell
nslookup maddypenuela.com
```

✅ **Bueno:** Responde con `maddy-web.onrender.com` o una IP  
❌ **Malo:** "can't find" o "server failed" o IP incorrecta

**Solución:** Revisa registros DNS en Hostinger

---

#### Test 2: ¿El DNS propagó?

```
https://www.whatsmydns.net/#CNAME/maddypenuela.com
```

✅ **Bueno:** >70% de servidores muestran el valor correcto  
⚠️ **Espera:** 20-70% propagado (espera más tiempo)  
❌ **Malo:** 0% propagado después de 24h

**Solución:** Verifica registros, limpia caché, espera más

---

#### Test 3: ¿El servicio de Render responde?

```powershell
# Verificar directamente con el dominio de Render
Invoke-WebRequest -Uri https://maddy-web.onrender.com
```

✅ **Bueno:** Status 200 OK  
❌ **Malo:** Error 502/504

**Solución:** Revisa Render Dashboard, verifica que el servicio esté running

---

#### Test 4: ¿El SSL está activo?

```
Ir a: https://maddypenuela.com en navegador
```

✅ **Bueno:** Candado verde, sitio carga  
⚠️ **Advertencia:** "No es seguro" / "Not Secure"  
❌ **Malo:** Error SSL

**Solución:** Espera 30 min más después de propagación DNS

---

#### Test 5: ¿Render reconoce el dominio?

1. Ve a Render Dashboard
2. Tu servicio → Settings → Custom Domains
3. Verifica el estado

✅ **Bueno:** "Verified" con SSL activo  
⚠️ **Pendiente:** "Pending" o "Verifying"  
❌ **Error:** "Failed" o mensaje de error

**Solución:** Verifica que el DNS apunte correctamente

---

## 📊 TIEMPOS ESPERADOS

| Acción                    | Tiempo Mínimo | Tiempo Típico | Tiempo Máximo |
|---------------------------|---------------|---------------|---------------|
| Configurar en Render      | 2 min         | 3 min         | 5 min         |
| Configurar DNS Hostinger  | 2 min         | 3 min         | 10 min        |
| Propagación DNS Local     | 5 min         | 15 min        | 1 hora        |
| Propagación DNS Global    | 30 min        | 2-4 horas     | 48 horas      |
| Activación SSL            | 5 min         | 15 min        | 1 hora        |
| **Total**                 | **45 min**    | **2-4 horas** | **48 horas**  |

---

## 🔐 VERIFICAR CONFIGURACIÓN COMPLETA

### Script PowerShell Todo-en-Uno

```powershell
# Guarda este script como: verificar-dominio.ps1

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  VERIFICACIÓN DE DOMINIO" -ForegroundColor Cyan
Write-Host "  maddypenuela.com" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Test 1: DNS Principal
Write-Host "[1/6] Verificando DNS principal..." -ForegroundColor Yellow
nslookup maddypenuela.com

# Test 2: DNS WWW
Write-Host "`n[2/6] Verificando DNS www..." -ForegroundColor Yellow
nslookup www.maddypenuela.com

# Test 3: Ping
Write-Host "`n[3/6] Verificando conectividad..." -ForegroundColor Yellow
ping maddypenuela.com -n 2

# Test 4: Puerto HTTPS
Write-Host "`n[4/6] Verificando puerto HTTPS (443)..." -ForegroundColor Yellow
Test-NetConnection maddypenuela.com -Port 443

# Test 5: Respuesta HTTP
Write-Host "`n[5/6] Verificando respuesta HTTP..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri https://maddypenuela.com -TimeoutSec 10
    Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

# Test 6: Dominio de Render
Write-Host "`n[6/6] Verificando dominio Render..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri https://maddy-web.onrender.com -TimeoutSec 10
    Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  VERIFICACIÓN COMPLETA" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan
```

**Para ejecutar:**
```powershell
# Guardar el código arriba en un archivo
# Luego ejecutar:
powershell -ExecutionPolicy Bypass -File verificar-dominio.ps1
```

---

## 📞 CONTACTOS ÚTILES

### Soporte Render
- **Documentación:** https://render.com/docs/custom-domains
- **Comunidad:** https://community.render.com
- **Status:** https://status.render.com

### Soporte Hostinger
- **Panel:** https://hpanel.hostinger.com
- **Chat 24/7:** Botón chat en hPanel (esquina inferior derecha)
- **Tutoriales:** https://support.hostinger.com
- **Base de Conocimientos:** https://support.hostinger.com/es/collections

### Herramientas de Diagnóstico
- **WhatsmyDNS:** https://www.whatsmydns.net
- **DNS Checker:** https://dnschecker.org
- **SSL Labs:** https://www.ssllabs.com/ssltest/
- **MX Toolbox:** https://mxtoolbox.com

---

## ✅ CHECKLIST RÁPIDO

```
[ ] DNS configurado en Hostinger (CNAME @ y www)
[ ] Dominio agregado en Render (ambos)
[ ] nslookup responde correctamente
[ ] DNS propagado (>70% en whatsmydns.net)
[ ] https://maddypenuela.com carga
[ ] https://www.maddypenuela.com carga
[ ] SSL activo (candado verde)
[ ] Formularios funcionan
[ ] Panel admin accesible
```

---

**Última actualización:** 12 de Octubre, 2025  
**Dominio:** maddypenuela.com  
**Servicio:** maddy-web.onrender.com

