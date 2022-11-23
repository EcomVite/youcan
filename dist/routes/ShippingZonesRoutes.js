"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingZonesRoutes = void 0;
exports.ShippingZonesRoutes = {
    show: `/shipping-zones`,
    get: (shippingZoneId) => `/shipping-zones/${shippingZoneId}`,
    create: `/shipping-zones`,
    delete: (shippingZoneId) => `/shipping-zones/${shippingZoneId}`,
    update: (shippingZoneId) => `/shipping-zones/${shippingZoneId}`,
    createShippingRate: (shippingZoneId) => `/shipping-zones/${shippingZoneId}/rates`,
    upadateShippingRate: (shippingZoneId) => `/shipping-zones/${shippingZoneId}/rates`,
};
