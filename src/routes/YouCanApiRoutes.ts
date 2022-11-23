import { CategoriesRoutes } from "./CategoriesRoutes";
import { CouponsRoutes } from "./CouponsRoutes";
import { CustomersRoutes } from "./CustomersRoutes";
import { LanguagesRoutes } from "./LanguagesRoutes";
import { MenusRoutes } from "./MenusRoutes";
import { OrdersRoutes } from "./OrdersRoutes";
import { PagesRoutes } from "./PagesRoutes";
import { ProductReviewsRoutes } from "./ProductReviewsRoutes";
import { ProductsRoutes } from "./ProductsRoutes";
import { ResthooksRoutes } from "./ResthooksRoutes";
import { ShippingZonesRoutes } from "./ShippingZonesRoutes";
import { StoreRoutes } from "./StoreRoutes";
import { UpsellsRoutes } from "./UpsellsRoutes";

export const YOUCAN_BASE_URL = 'https://api.youcan.shop';

export const youCanApiRoutes = {
	products: ProductsRoutes,
	store: StoreRoutes,
	productReviews: ProductReviewsRoutes,
	orders: OrdersRoutes,
	resthooks: ResthooksRoutes,
	customers: CustomersRoutes,
	coupons: CouponsRoutes,
	categories: CategoriesRoutes,
	languages: LanguagesRoutes,
	menus: MenusRoutes,
	pages: PagesRoutes,
	shippingZones: ShippingZonesRoutes,
	upsells: UpsellsRoutes,
};