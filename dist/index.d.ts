import YouCanCategories from './models/Categories';
import YouCanCoupons from './models/Coupons';
import YouCanCustomers from './models/Customers';
import YouCanLanguages from './models/Languages';
import YouCanMenus from './models/Menus';
import YouCanOrders from './models/Orders';
import YouCanPages from './models/Pages';
import YouCanProductInventory from './models/ProductInventory';
import YouCanReviews from './models/Reviews';
import YouCanProducts from './models/Products';
import YouCanResthooks from './models/Resthooks';
import YouCanShippingZones from './models/ShippingZones';
import YouCanStore from './models/Store';
import YouCanUpsells from './models/Upsells';
declare class YouCan {
    products: YouCanProducts;
    store: YouCanStore;
    reviews: YouCanReviews;
    orders: YouCanOrders;
    resthooks: YouCanResthooks;
    customers: YouCanCustomers;
    coupons: YouCanCoupons;
    categories: YouCanCategories;
    languages: YouCanLanguages;
    menus: YouCanMenus;
    pages: YouCanPages;
    shippingZones: YouCanShippingZones;
    upsells: YouCanUpsells;
    productInventory: YouCanProductInventory;
    constructor(access_token: string);
}
export default YouCan;
