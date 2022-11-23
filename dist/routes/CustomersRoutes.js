"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRoutes = void 0;
exports.CustomersRoutes = {
    show: `/customers`,
    get: (id) => `/customers/${id}`,
    create: `/customers`,
    delete: (id) => `/customers/${id}`,
    update: (id) => `/customers/${id}`,
    createAddress: (id) => `/customers/${id}/addresses`,
    updateAddress: (id, addressId) => `/customers/${id}/addresses/${addressId}`,
};
