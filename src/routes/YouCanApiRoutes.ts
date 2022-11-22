
export const YOUCAN_BASE_URL = 'https://api.youcan.shop';

export const youCanApiRoutes = {
	products: {
		get: (productId: string) => `/products/${productId}`,
		show: `/products`,
		create: `/products`,
		update: (productId: string) => `/products/update/${productId}`,
		delete: (productId: string) => `/products/${productId}`,
	},
	store: {
		details: `/me`,
		packs: `/stores/packs`,
		profit: `/stores/profit`,
		supportHelp: `/stores/ticket`,
	}
};