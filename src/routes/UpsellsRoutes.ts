
export const UpsellsRoutes = {
	show: `/upsells`,
	get: (categoryId: string) => `/upsells/${categoryId}`,
	create: `/upsells`,
	delete: (categoryId: string) => `/upsells/${categoryId}`,
	update: (categoryId: string) => `/upsells/${categoryId}`,
}