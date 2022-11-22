
export const ProductsRoutes = {
	get: (productId: string) => `/products/${productId}`,
	show: `/products`,
	create: `/products`,
	update: (productId: string) => `/products/update/${productId}`,
	delete: (productId: string) => `/products/${productId}`,
}