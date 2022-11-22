
export const CustomersRoutes = {
	show: `/customers`,
	get: (id: string) => `/customers/${id}`,
	create: `/customers`,
	delete: (id: string) => `/customers/${id}`,
	update: (id: string) => `/customers/${id}`,
	createAddress: (id: string) => `/customers/${id}/addresses`,
	updateAddress: (id: string, addressId: string) => `/customers/${id}/addresses/${addressId}`,
}