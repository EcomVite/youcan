import axios from 'axios';
import YouCanProducts from './models/Product';
import YouCanStore from './models/Store';
import { YOUCAN_BASE_URL } from './routes/YouCanApiRoutes';


class YouCan {

	products: YouCanProducts;
	store: YouCanStore;

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
	}
}

export default YouCan;
