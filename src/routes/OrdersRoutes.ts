
export const OrdersRoutes = {
	show: `/orders`,
	get: (orderId: string) => `/orders/${orderId}`,
	create: `/orders`,
	close: (orderId: string) => `/orders/${orderId}/close`,
	fulfill: (orderId: string) => `/orders/${orderId}/fulfill`,
	pay: (orderId: string) => `/orders/${orderId}/pay`,
}