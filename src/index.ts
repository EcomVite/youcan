import axios from "axios";

const YOUCAN_BASE_URL = "https://api.youcan.shop";

const youCanApiRoutes = {
	products: {
		get: (productId: string) => `${YOUCAN_BASE_URL}/products/${productId}`,
		show: `${YOUCAN_BASE_URL}/products`,
	}
}

class YouCan {

	constructor(access_token: string) {
		axios.interceptors.request.use(
			(config: any) => {
				config.headers["Authorization"] = `Bearer ${access_token}`;
				return config;
			},
			(error: any) => Promise.reject(error)
		);
	}

	async getProductById(productId: string) {
		const response = await axios.get(youCanApiRoutes.products.get(productId));
		return response.data;
	}

	async getProducts(limit?: number, page?: number) {
		try {
			let query: string = "?";
			if (limit) {
				query += `limit=${limit}`;
			const response = await axios.get(youCanApiRoutes.products.show);

			return response.data;
		}
		catch (error) {
			throw error;
		}
	}

}

export default YouCan;