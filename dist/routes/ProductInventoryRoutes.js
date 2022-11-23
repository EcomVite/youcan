"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryRoutes = void 0;
exports.ProductInventoryRoutes = {
    inventoryIncerement: (productId) => `/products/${productId}/inventory/increment`,
    inventoryDecrement: (productId) => `/products/${productId}/inventory/decrement`,
};
