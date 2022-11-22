import axios from 'axios';
import { OrderSortingEnum } from '../constants/enum/Order';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanOrders {
	async getOrders({
		limit,
		page,
		sort_field,
		include,
		q,
	}: {
		limit?: number;
		page?: number;
		sort_field?: OrderSortingEnum;
		include?: string;
		q?: string;
	}): Promise<{ data: IOrderResponse[]; meta: IOrderMetaResponse }> {
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

		if (q) {
			query += `q=${q}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.orders.show}?${query}`
		);
		return response.data;
	}

	async getAllOrders(): Promise<{ data: IOrderResponse[] }> {
		const data = await this.getOrders({ limit: 100, page: 1 });
		const youCanOrders = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getOrders({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanOrders.push(...newData.data);
			}
		}
		return { data: youCanOrders };
	}

	async getOrderById(
		orderId: string,
		include?: string
	): Promise<IOrderResponse> {
		let includeResource: string = '';

		if (include) {
			includeResource = `?include=${include}`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.orders.get(orderId)}${includeResource}`
		);
		return response.data;
	}

	async createOrder(order: IOrder): Promise<IOrderResponse> {
		const response = await axios.post(youCanApiRoutes.orders.create, order);
		return response.data;
	}

	async closeOrder(
		orderId: string,
		cancel_order?: boolean
	): Promise<IOrderCloseResponse> {
		let query: string = '';
		if (cancel_order) {
			query += `cancel_order=${cancel_order}`;
		}
		const response = await axios.put(
			`${youCanApiRoutes.orders.close(orderId)}?${query}`
		);
		return response.data;
	}

	async fulfillOrder({
		orderId,
		seller_note,
		tracking_number,
	}: {
		orderId: string;
		seller_note?: string;
		tracking_number?: string;
	}): Promise<IOrderCloseResponse> {
		let query: string = '';
		if (seller_note) {
			query += `seller_note=${seller_note}&`;
		}
		if (tracking_number) {
			query += `tracking_number=${tracking_number}`;
		}

		const response = await axios.put(
			`${youCanApiRoutes.orders.fulfill(orderId)}?${query}`
		);
		return response.data;
	}

	async payOrder(orderId: string): Promise<IOrderCloseResponse> {
		const response = await axios.put(youCanApiRoutes.orders.pay(orderId));
		return response.data;
	}
}

export default YouCanOrders;
