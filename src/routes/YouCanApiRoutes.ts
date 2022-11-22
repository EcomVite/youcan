
const YOUCAN_BASE_URL = 'https://api.youcan.shop';

export const youCanApiRoutes = {
	products: {
		get: (productId: string) => `${YOUCAN_BASE_URL}/products/${productId}`,
		show: `${YOUCAN_BASE_URL}/products`,
		create: `${YOUCAN_BASE_URL}/products`,
		update: (productId: string) => `${YOUCAN_BASE_URL}/products/update/${productId}`,
		delete: (productId: string) => `${YOUCAN_BASE_URL}/products/${productId}`,
	},
};