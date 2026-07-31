/**
 * mueble router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/muebles/destacados',
      handler: 'mueble.findFeatured',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/muebles/:slug',
      handler: 'mueble.findOneBySlug',
      config: {
        auth: false,
      },
    },
  ],
};
