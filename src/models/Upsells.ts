import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanUpsells {
	async getUpsells({
		limit,
		page,
	}: {
		limit?: number;
		page?: number;
	}): Promise<{ data: IUpsellResponse[]; meta: IMetaResponse }> {
		let query: string = '';
		if (limit) {
			query += `limit=${limit}&`;
		}
		if (page) {
			query += `page=${page}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.upsells.show}?${query}`
		);
		return response.data;
	}

	async getAllUpsells(): Promise<{ data: IUpsellResponse[] }> {
		const data = await this.getUpsells({ limit: 100, page: 1 });
		const youCanUpsells = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getUpsells({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanUpsells.push(...newData.data);
			}
		}
		return { data: youCanUpsells };
	}

	async getUpsellById(upsellId: string): Promise<IUpsellResponse> {
		const response = await axios.get(youCanApiRoutes.upsells.get(upsellId));
		return response.data;
	}

	async createUpsell(upsell: IUpsell): Promise<IUpsellResponse> {
		const response = await axios.post(youCanApiRoutes.upsells.create, upsell);
		return response.data;
	}

	async updateUpsell(
		upsellId: string,
		upsell: IUpsell
	): Promise<IUpsellResponse> {
		const response = await axios.put(
			youCanApiRoutes.upsells.update(upsellId),
			upsell
		);

		return response.data;
	}

	async deleteUpsell(upsellId: string): Promise<IDeleteUpsellResponse> {
		const response = await axios.delete(
			youCanApiRoutes.upsells.delete(upsellId)
		);
		return response.data;
	}

}

export default YouCanUpsells;
