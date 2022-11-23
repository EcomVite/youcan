
export const PagesRoutes = {
	show: `/pages`,
	get: (pageId: string) => `/pages/${pageId}`,
	create: `/pages`,
	delete: (pageId: string) => `/pages/${pageId}`,
	update: (pageId: string) => `/pages/${pageId}`,
}