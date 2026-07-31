/**
 * mueble controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::mueble.mueble', ({ strapi }) => ({
  async findOneBySlug(ctx: any) {
    const { slug } = ctx.params;

    if (!slug) {
      return ctx.badRequest('Slug is required');
    }

    const entity = await strapi.db.query('api::mueble.mueble').findOne({
      where: { slug },
      populate: { categoria: true, imagen_producto: true, comentarios: true },
    });

    if (!entity) {
      return ctx.notFound('Mueble not found');
    }

    return this.transformResponse(entity);
  },

  async findFeatured(ctx: any) {
    const entities = await strapi.db.query('api::mueble.mueble').findMany({
      where: { destacado: true, activo: true },
      populate: { categoria: true, imagen_producto: true, comentarios: true },
      orderBy: { createdAt: 'desc' },
    });

    return this.transformResponse(entities);
  },
}));
