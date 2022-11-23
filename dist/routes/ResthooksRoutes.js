"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResthooksRoutes = void 0;
exports.ResthooksRoutes = {
    show: `/resthooks/list`,
    subscribe: `/resthooks/subscribe`,
    unsubscribe: (resthookId) => `/resthooks/unsubscribe/${resthookId}`,
};
