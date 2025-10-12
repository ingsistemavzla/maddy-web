/**
 * Configuración de Google Analytics y Meta Pixel
 * 
 * INSTRUCCIONES:
 * 1. Reemplaza 'G-XXXXXXXXXX' con tu ID de Google Analytics
 * 2. Reemplaza 'YOUR_PIXEL_ID' con tu ID de Meta Pixel
 * 3. Descomenta las secciones cuando tengas los IDs
 */

// Google Analytics 4
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Reemplazar con tu ID real

// Meta Pixel (Facebook)
export const META_PIXEL_ID = 'YOUR_PIXEL_ID'; // Reemplazar con tu ID real

// Función para rastrear page views en Google Analytics
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Función para rastrear eventos personalizados en Google Analytics
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Función para rastrear eventos en Meta Pixel
export const trackMetaPixel = (eventName: string, data?: object) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  }
};

// Eventos personalizados predefinidos
export const trackFormSubmit = (formName: string) => {
  event({
    action: 'submit',
    category: 'Form',
    label: formName,
  });
  
  trackMetaPixel('Lead', { form_name: formName });
};

export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'WhatsApp',
  });
  
  trackMetaPixel('Contact', { method: 'whatsapp' });
};

export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Phone',
  });
  
  trackMetaPixel('Contact', { method: 'phone' });
};

export const trackEmailClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Email',
  });
  
  trackMetaPixel('Contact', { method: 'email' });
};

export const trackSocialMediaClick = (platform: string) => {
  event({
    action: 'click',
    category: 'Social Media',
    label: platform,
  });
};

