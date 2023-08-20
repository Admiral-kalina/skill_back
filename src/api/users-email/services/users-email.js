'use strict';

/**
 * users-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-email.users-email');
