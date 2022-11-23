"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRoutes = void 0;
exports.CategoriesRoutes = {
    show: `/categories`,
    get: (categoryId) => `/categories/${categoryId}`,
    create: `/categories`,
    delete: (categoryId) => `/categories/${categoryId}`,
    update: (categoryId) => `/categories/${categoryId}`,
};
