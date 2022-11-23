import axios from 'axios';
import { ProductSortingEnum } from '../constants/enum/Product';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanProducts {
	async getProductById(productId: string, { include }: {include?: string}): Promise<IProductResponse> {

		let query: string = '';
		if (include) {
			query += `include=${include}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.products.get(productId)}?${query}`
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
	}): Promise<{ data: IProductResponse[]; meta: IMetaResponse }> {
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
	}

	async getAllProducts(): Promise<{ data: IProductResponse[] }> {
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

	async createProduct(product: IProduct): Promise<IProductResponse> {
		const response = await axios.post(
			youCanApiRoutes.products.create,
			product
		);
		return response.data;
	}

	async updateProduct(
		productId: string,
		// product: Partial<IProduct>
		product: IProduct
	): Promise<IProductResponse> {
		const response = await axios.post(
			youCanApiRoutes.products.update(productId),
			product
		);
		return response.data;
	}

	async deleteProduct(productId: string): Promise<IDeleteProductResponse> {
		const response = await axios.delete(
			youCanApiRoutes.products.delete(productId)
		);
		return response.data;
	}
}

export default YouCanProducts;
