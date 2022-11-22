import { CategoriesRoutes } from "./CategoriesRoutes";
import { CouponsRoutes } from "./CouponsRoutes";
import { CustomersRoutes } from "./CustomersRoutes";
import { OrdersRoutes } from "./OrdersRoutes";
import { ProductReviewsRoutes } from "./ProductReviewsRoutes";
import { ProductsRoutes } from "./ProductsRoutes";
import { ResthooksRoutes } from "./ResthooksRoutes";
import { StoreRoutes } from "./StoreRoutes";

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
};