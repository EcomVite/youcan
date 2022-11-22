
export const CouponsRoutes = {
	show: `/coupons`,
	get: (couponId: string) => `/coupons/${couponId}`,
	create: `/coupons`,
	delete: (couponId: string) => `/coupons/${couponId}`,
	update: (couponId: string) => `/coupons/${couponId}`,
}