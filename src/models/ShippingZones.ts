import axios from 'axios';
import { ShippingZoneSortingEnum } from '../constants/enum/ShippingZone';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanShippingZones {
	async getShippingZones({
		limit,
		page,
		sort_field,
		include,
	}: {
		limit?: number;
		page?: number;
		sort_field?: ShippingZoneSortingEnum;
		include?: string;
	}): Promise<{ data: IShippingZoneResponse[]; meta: IMetaResponse }> {
		
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
			`${youCanApiRoutes.shippingZones.show}?${query}`
		);
		return response.data;
	}

	async getAllShippingZones(): Promise<{ data: IShippingZoneResponse[] }> {
		const data = await this.getShippingZones({ limit: 100, page: 1 });
		const youCanShippingZones = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getShippingZones({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanShippingZones.push(...newData.data);
			}
		}
		return { data: youCanShippingZones };
	}

	async getShippingZoneById(
		shippingZoneId: string
	): Promise<IShippingZoneResponse> {
		const response = await axios.get(
			youCanApiRoutes.shippingZones.get(shippingZoneId)
		);
		return response.data;
	}

	async createShippingZone(
		shippingZone: IShippingZone
	): Promise<IShippingZoneResponse> {
		const response = await axios.post(
			youCanApiRoutes.shippingZones.create,
			shippingZone
		);
		return response.data;
	}

	async updateShippingZone(
		shippingZoneId: string,
		shippingZone: IShippingZone
	): Promise<IDeleteUpdateShippingZoneResponse> {
		const response = await axios.put(
			youCanApiRoutes.shippingZones.update(shippingZoneId),
			shippingZone
		);

		return response.data;
	}

	async deleteShippingZone(
		shippingZoneId: string
	): Promise<IDeleteUpdateShippingZoneResponse> {
		const response = await axios.delete(
			youCanApiRoutes.shippingZones.delete(shippingZoneId)
		);
		return response.data;
	}

	async createShippingRate(
		shippingZoneId: string,
		shippingRates: IShippingRate[]
	): Promise<IShippingZoneResponse> {
		const response = await axios.post(
			youCanApiRoutes.shippingZones.createShippingRate(shippingZoneId),
			{rates: shippingRates}
		);
		return response.data;
	}

	async updateShippingRate(
		shippingZoneId: string,
		shippingRates: IShippingRate[]
	): Promise<IDeleteUpdateShippingZoneResponse> {
		const response = await axios.put(
			youCanApiRoutes.shippingZones.upadateShippingRate(shippingZoneId),
			{rates: shippingRates}
		);
		return response.data;
	}

}

export default YouCanShippingZones;
