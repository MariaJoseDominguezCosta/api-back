/**
 * mueble router
 */

import { factories } from '@strapi/strapi';

const coreRouter = factories.createCoreRouter('api::mueble.mueble');

const coreRoutes =
  typeof coreRouter.routes === 'function'
    ? coreRouter.routes()
    : coreRouter.routes;

export default {
  routes: [
    ...coreRoutes,
    {
      method: 'GET',
      path: '/muebles/destacados',
      handler: 'mueble.findFeatured',
      config: {
        auth: false,
        middlewares: ['global::rate-limiter'],
      },
    },
    {
      method: 'GET',
      path: '/muebles/:slug',
      handler: 'mueble.findOneBySlug',
      config: {
        auth: false,
        middlewares: ['global::rate-limiter'],
      },
    },
  ],
};
