import axios from 'axios';
import { ProductSortingEnum } from './constants/enum/Product';

const YOUCAN_BASE_URL = 'https://api.youcan.shop';

const youCanApiRoutes = {
	products: {
		get: (productId: string) => `${YOUCAN_BASE_URL}/products/${productId}`,
		show: `${YOUCAN_BASE_URL}/products`,
	},
};

class YouCan {
	constructor(access_token: string) {
		axios.interceptors.request.use(
			(config: any) => {
				config.headers['Authorization'] = `Bearer ${access_token}`;
				return config;
			},
			(error: any) => Promise.reject(error)
		);
	}

	async getProductById(productId: string): Promise<IProductResponse> {
		const response = await axios.get(
			youCanApiRoutes.products.get(productId)
		);
		return response.data;
	}

	async getProducts({
		limit,
		page,
		sort_field,
		include,
	}: {
		limit?: number;
		page?: number;
		sort_field?: ProductSortingEnum;
		include?: string;
	}): Promise<{data: IProductResponse[], meta: IProductMetaResponse}> {
		try {
			let query: string = '';
			if (limit) {
				query += `limit=${limit}&`;
			}
			if (page) {
				query += `page=${page}&`;
			}
			if (sort_field) {
				query += `sort_field=${sort_field}&`;
			}
			if (include) {
				query += `include=${include}&`;
			}
			const response = await axios.get(
				`${youCanApiRoutes.products.show}?${query}`
			);

			return response.data;
		} catch (error) {
			throw error;
		}
	}

	async getAllProducts(): Promise<{data: IProductResponse[]}> {
		const data = await this.getProducts({ limit: 100, page: 1 });
		const youCanProducts = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getProducts({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanProducts.push(...newData.data);
			}
		}
		return { data: youCanProducts };
	}
}

export default YouCan;
