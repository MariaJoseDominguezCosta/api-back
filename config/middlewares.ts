import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
    'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://strapi.muebleriasahorramas.com.mx'], // Añade el dominio de tu Strapi
          'media-src': ["'self'", 'data:', 'blob:', 'https://strapi.muebleriasahorramas.com.mx'], // Añade el dominio de tu Strapi
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
