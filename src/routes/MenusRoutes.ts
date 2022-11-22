
export const MenusRoutes = {
	show: `/menus`,
	get: (categoryId: string) => `/menus/${categoryId}`,
	create: `/menus`,
	delete: (categoryId: string) => `/menus/${categoryId}`,
	update: (categoryId: string) => `/menus/${categoryId}`,
}