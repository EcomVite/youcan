import { ProductsRoutes } from "./ProductsRoutes";
import { StoreRoutes } from "./StoreRoutes";

export const YOUCAN_BASE_URL = 'https://api.youcan.shop';

export const youCanApiRoutes = {
	products: ProductsRoutes,
	store: StoreRoutes,
};