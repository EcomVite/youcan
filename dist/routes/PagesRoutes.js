"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesRoutes = void 0;
exports.PagesRoutes = {
    show: `/pages`,
    get: (pageId) => `/pages/${pageId}`,
    create: `/pages`,
    delete: (pageId) => `/pages/${pageId}`,
    update: (pageId) => `/pages/${pageId}`,
};
