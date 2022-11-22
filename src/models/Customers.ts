import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanCustomers {

	async getCustomers({
		limit,
		page,
		include,
		q,
	}: {
		limit?: number;
		page?: number;
		include?: string;
		q?: string;
	}): Promise<{ data: ICustomerResponse[]; meta: ICustomerMetaResponse }> {
		let query: string = '';

		if (limit) {
			query += `limit=${limit}&`;
		}

		if (page) {
			query += `page=${page}&`;
		}

		if (include) {
			query += `include=${include}&`;
		}

		if (q) {
			query += `q=${q}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.customers.show}?${query}`
		);
		return response.data;
	}

	async getAllCustomers(): Promise<{ data: ICustomerResponse[] }> {
		const data = await this.getCustomers({ limit: 100, page: 1 });
		const youCanCustomers = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getCustomers({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanCustomers.push(...newData.data);
			}
		}
		return { data: youCanCustomers };
	}

	async getCustomerById(
		customerId: string,
		include?: string
	): Promise<ICustomerResponse> {
		let includeResource: string = '';

		if (include) {
			includeResource = `?include=${include}`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.customers.get(customerId)}${includeResource}`
		);
		return response.data;
	}

	async createCustomer(order: ICustomer): Promise<ICustomerResponse> {
		const response = await axios.post(youCanApiRoutes.customers.create, order);
		return response.data;
	}

	async deleteCustomer(customerId: string): Promise<ICustomerUpdateDeleteResponse> {
		const response = await axios.delete(
			youCanApiRoutes.customers.delete(customerId)
		);
		return response.data;
	}

	async updateCustomer(
		customerId: string,
		customer: ICustomer
	): Promise<ICustomerUpdateDeleteResponse> {
		const response = await axios.put(
			youCanApiRoutes.customers.update(customerId),
			customer
		);
		return response.data;
	}

	async createCustomerAddress(
		customerId: string,
		address: Partial<IAddress>
	): Promise<ICustomerResponse> {
		const response = await axios.post(
			youCanApiRoutes.customers.createAddress(customerId),
			address
		);
		return response.data;
	}

	async updateCustomerAddress(
		customerId: string,
		addressId: string,
		address: Partial<IAddress>
	): Promise<ICustomerUpdateDeleteResponse> {
		const response = await axios.put(
			youCanApiRoutes.customers.updateAddress(customerId, addressId),
			address
		);
		return response.data;
	}

}

export default YouCanCustomers;
