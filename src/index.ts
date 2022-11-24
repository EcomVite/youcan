import axios from 'axios';
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
import { YOUCAN_BASE_URL } from './routes/YouCanApiRoutes';


class YouCan {

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

	constructor(access_token: string) {
		
		axios.defaults.baseURL = YOUCAN_BASE_URL;

		axios.interceptors.request.use(
			(config: any) => {
				config.headers['Authorization'] = `Bearer ${access_token}`;
				config.headers['Accept-Encoding'] = "application/json";
				return config;
			},
			(error: any) => Promise.reject(error)
		);

		this.products = new YouCanProducts();
		this.store = new YouCanStore();
		this.reviews = new YouCanReviews();
		this.orders = new YouCanOrders();
		this.resthooks = new YouCanResthooks();
		this.customers = new YouCanCustomers();
		this.coupons = new YouCanCoupons();
		this.categories = new YouCanCategories();
		this.languages = new YouCanLanguages();
		this.menus = new YouCanMenus();
		this.pages = new YouCanPages();
		this.shippingZones = new YouCanShippingZones();
		this.upsells = new YouCanUpsells();
		this.productInventory = new YouCanProductInventory();
	}
}

export default YouCan;
