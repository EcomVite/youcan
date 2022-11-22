import axios from 'axios';
import { ProductSortingEnum } from './constants/enum/Product';
import YouCanProducts from './models/Product';


class YouCan {

	products: YouCanProducts;

	constructor(access_token: string) {
		axios.interceptors.request.use(
			(config: any) => {
				config.headers['Authorization'] = `Bearer ${access_token}`;
				return config;
			},
			(error: any) => Promise.reject(error)
		);
		this.products = new YouCanProducts();
	}
}

export default YouCan;
