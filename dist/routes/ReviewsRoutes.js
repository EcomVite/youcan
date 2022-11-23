"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsRoutes = void 0;
exports.ReviewsRoutes = {
    show: "/reviews",
    create: (productId) => `/products/${productId}/reviews`,
    get: (productReviewId) => `/reviews/${productReviewId}`,
    update: (productReviewId) => `/reviews/${productReviewId}`,
    delete: (productReviewId) => `/reviews/${productReviewId}`,
    showProductReviews: (productId) => `/products/${productId}/reviews`,
    reject: (reviewId) => `/reviews/${reviewId}/reject`,
    approve: (reviewId) => `/reviews/${reviewId}/approve`,
};
