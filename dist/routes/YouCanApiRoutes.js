"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youCanApiRoutes = exports.YOUCAN_BASE_URL = void 0;
const CategoriesRoutes_1 = require("./CategoriesRoutes");
const CouponsRoutes_1 = require("./CouponsRoutes");
const CustomersRoutes_1 = require("./CustomersRoutes");
const LanguagesRoutes_1 = require("./LanguagesRoutes");
const MenusRoutes_1 = require("./MenusRoutes");
const OrdersRoutes_1 = require("./OrdersRoutes");
const PagesRoutes_1 = require("./PagesRoutes");
const ProductInventoryRoutes_1 = require("./ProductInventoryRoutes");
const ReviewsRoutes_1 = require("./ReviewsRoutes");
const ProductsRoutes_1 = require("./ProductsRoutes");
const ResthooksRoutes_1 = require("./ResthooksRoutes");
const ShippingZonesRoutes_1 = require("./ShippingZonesRoutes");
const StoreRoutes_1 = require("./StoreRoutes");
const UpsellsRoutes_1 = require("./UpsellsRoutes");
exports.YOUCAN_BASE_URL = 'https://api.youcan.shop';
exports.youCanApiRoutes = {
    products: ProductsRoutes_1.ProductsRoutes,
    store: StoreRoutes_1.StoreRoutes,
    reviews: ReviewsRoutes_1.ReviewsRoutes,
    orders: OrdersRoutes_1.OrdersRoutes,
    resthooks: ResthooksRoutes_1.ResthooksRoutes,
    customers: CustomersRoutes_1.CustomersRoutes,
    coupons: CouponsRoutes_1.CouponsRoutes,
    categories: CategoriesRoutes_1.CategoriesRoutes,
    languages: LanguagesRoutes_1.LanguagesRoutes,
    menus: MenusRoutes_1.MenusRoutes,
    pages: PagesRoutes_1.PagesRoutes,
    shippingZones: ShippingZonesRoutes_1.ShippingZonesRoutes,
    upsells: UpsellsRoutes_1.UpsellsRoutes,
    productInventory: ProductInventoryRoutes_1.ProductInventoryRoutes,
};
