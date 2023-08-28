'use strict';

/**
 * funding-youtube service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funding-youtube.funding-youtube');
