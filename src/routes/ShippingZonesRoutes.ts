
export const ShippingZonesRoutes = {
	show: `/shipping-zones`,
	get: (shippingZoneId: string) => `/shipping-zones/${shippingZoneId}`,
	create: `/shipping-zones`,
	delete: (shippingZoneId: string) => `/shipping-zones/${shippingZoneId}`,
	update: (shippingZoneId: string) => `/shipping-zones/${shippingZoneId}`,
	createShippingRate: (shippingZoneId: string) => `/shipping-zones/${shippingZoneId}/rates`,
	upadateShippingRate: (shippingZoneId: string) => `/shipping-zones/${shippingZoneId}/rates`,
}