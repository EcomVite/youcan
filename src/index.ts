import axios from 'axios';
import YouCanCategories from './models/Categories';
import YouCanCoupons from './models/Coupons';
import YouCanCustomers from './models/Customers';
import YouCanLanguages from './models/Languages';
import YouCanMenus from './models/Menus';
import YouCanOrders from './models/Orders';
import YouCanPages from './models/Pages';
import YouCanProductReviews from './models/ProductReviews';
import YouCanProducts from './models/Products';
import YouCanResthooks from './models/Resthooks';
import YouCanStore from './models/Store';
import { YOUCAN_BASE_URL } from './routes/YouCanApiRoutes';


class YouCan {

	products: YouCanProducts;
	store: YouCanStore;
	productReviews: YouCanProductReviews;
	orders: YouCanOrders;
	resthooks: YouCanResthooks;
	customers: YouCanCustomers;
	coupons: YouCanCoupons;
	categories: YouCanCategories;
	languages: YouCanLanguages;
	menus: YouCanMenus;
	pages: YouCanPages;

	constructor(access_token: string) {
		
		axios.defaults.baseURL = YOUCAN_BASE_URL;

		axios.interceptors.request.use(
			(config: any) => {
				config.headers['Authorization'] = `Bearer ${access_token}`;
				return config;
			},
			(error: any) => Promise.reject(error)
		);

		this.products = new YouCanProducts();
		this.store = new YouCanStore();
		this.productReviews = new YouCanProductReviews();
		this.orders = new YouCanOrders();
		this.resthooks = new YouCanResthooks();
		this.customers = new YouCanCustomers();
		this.coupons = new YouCanCoupons();
		this.categories = new YouCanCategories();
		this.languages = new YouCanLanguages();
		this.menus = new YouCanMenus();
		this.pages = new YouCanPages();
	}
}

export default YouCan;
