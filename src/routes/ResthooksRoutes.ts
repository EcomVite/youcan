
export const ResthooksRoutes = {
	show: `/resthooks/list`,
	subscribe: `/resthooks/subscribe`,
	unsubscribe: (resthookId: string) => `/resthooks/unsubscribe/${resthookId}`,
}