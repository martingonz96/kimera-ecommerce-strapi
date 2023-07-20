'use strict';

/**
 * printer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::printer.printer');
