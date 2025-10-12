/**
 * Componente de Analytics
 * 
 * INSTRUCCIONES PARA ACTIVAR:
 * 
 * 1. GOOGLE ANALYTICS:
 *    - Ir a https://analytics.google.com
 *    - Crear una cuenta y propiedad para maddypenuela.com
 *    - Copiar el ID (formato: G-XXXXXXXXXX)
 *    - Reemplazar en el archivo: src/lib/analytics.ts
 *    - Descomentar la sección de Google Analytics abajo
 * 
 * 2. META PIXEL (Facebook):
 *    - Ir a https://business.facebook.com/events_manager
 *    - Crear un Pixel para tu página
 *    - Copiar el ID del Pixel
 *    - Reemplazar en el archivo: src/lib/analytics.ts
 *    - Descomentar la sección de Meta Pixel abajo
 * 
 * 3. Importar este componente en App.tsx
 */

import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { pageview, GA_TRACKING_ID, META_PIXEL_ID } from '@/lib/analytics';

export default function Analytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Rastrear cambios de página
    pageview(location);
  }, [location]);

  return (
    <>
      {/* Google Analytics 4 - DESCOMENTAR CUANDO TENGAS EL ID */}
      {/* 
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      */}

      {/* Meta Pixel (Facebook) - DESCOMENTAR CUANDO TENGAS EL ID */}
      {/* 
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
      */}
    </>
  );
}

