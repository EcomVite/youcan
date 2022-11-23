
export const ProductInventoryRoutes = {
	inventoryIncerement: (productId: string) => `/products/${productId}/inventory/increment`,
	inventoryDecrement: (productId: string) => `/products/${productId}/inventory/decrement`,
}