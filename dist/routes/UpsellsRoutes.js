"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsellsRoutes = void 0;
exports.UpsellsRoutes = {
    show: `/upsells`,
    get: (categoryId) => `/upsells/${categoryId}`,
    create: `/upsells`,
    delete: (categoryId) => `/upsells/${categoryId}`,
    update: (categoryId) => `/upsells/${categoryId}`,
};
