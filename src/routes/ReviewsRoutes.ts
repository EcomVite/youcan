
export const ReviewsRoutes = {
	show: "/reviews",
	create: (productId: string) => `/products/${productId}/reviews`,
	get: (productReviewId: string) => `/reviews/${productReviewId}`,
	update: (productReviewId: string) => `/reviews/${productReviewId}`,
	delete: (productReviewId: string) => `/reviews/${productReviewId}`,
	showProductReviews: (productId: string) => `/products/${productId}/reviews`,
	reject: (reviewId: string) => `/reviews/${reviewId}/reject`,
	approve: (reviewId: string) => `/reviews/${reviewId}/approve`,
}