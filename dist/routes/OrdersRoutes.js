"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
exports.OrdersRoutes = {
    show: `/orders`,
    get: (orderId) => `/orders/${orderId}`,
    create: `/orders`,
    close: (orderId) => `/orders/${orderId}/close`,
    fulfill: (orderId) => `/orders/${orderId}/fulfill`,
    pay: (orderId) => `/orders/${orderId}/pay`,
};
