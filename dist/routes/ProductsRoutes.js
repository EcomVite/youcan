"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
exports.ProductsRoutes = {
    get: (productId) => `/products/${productId}`,
    show: `/products`,
    create: `/products`,
    update: (productId) => `/products/update/${productId}`,
    delete: (productId) => `/products/${productId}`,
};
