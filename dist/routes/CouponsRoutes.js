"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponsRoutes = void 0;
exports.CouponsRoutes = {
    show: `/coupons`,
    get: (couponId) => `/coupons/${couponId}`,
    create: `/coupons`,
    delete: (couponId) => `/coupons/${couponId}`,
    update: (couponId) => `/coupons/${couponId}`,
};
