export declare const ReviewsRoutes: {
    show: string;
    create: (productId: string) => string;
    get: (productReviewId: string) => string;
    update: (productReviewId: string) => string;
    delete: (productReviewId: string) => string;
    showProductReviews: (productId: string) => string;
    reject: (reviewId: string) => string;
    approve: (reviewId: string) => string;
};
