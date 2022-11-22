
export const CategoriesRoutes = {
	show: `/categories`,
	get: (categoryId: string) => `/categories/${categoryId}`,
	create: `/categories`,
	delete: (categoryId: string) => `/categories/${categoryId}`,
	update: (categoryId: string) => `/categories/${categoryId}`,
}