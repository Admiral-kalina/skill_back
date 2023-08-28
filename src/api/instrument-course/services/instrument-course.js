'use strict';

/**
 * instrument-course service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instrument-course.instrument-course');
