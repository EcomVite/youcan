import axios from 'axios';
import YouCanOrders from './models/Orders';
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
	}
}

export default YouCan;
