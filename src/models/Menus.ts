import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanMenus {
	async getMenus({
		limit,
		page,
	}: {
		limit?: number;
		page?: number;
	}): Promise<{ data: IMenuResponse[]; meta: IMetaResponse }> {
		let query: string = '';
		if (limit) {
			query += `limit=${limit}&`;
		}
		if (page) {
			query += `page=${page}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.categories.show}?${query}`
		);
		return response.data;
	}

	async getAllMenus(): Promise<{ data: IMenuResponse[] }> {
		const data = await this.getMenus({ limit: 100, page: 1 });
		const youCanMenus = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getMenus({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanMenus.push(...newData.data);
			}
		}
		return { data: youCanMenus };
	}

	async getMenuById(menuId: string): Promise<IMenuResponse> {
		const response = await axios.get(youCanApiRoutes.categories.get(menuId));
		return response.data;
	}

	async createMenu(menu: IMenu): Promise<IMenuResponse> {
		const response = await axios.post(youCanApiRoutes.categories.create, menu);
		return response.data;
	}

	async updateMenu(
		menuId: string,
		menu: IMenu
	): Promise<IMenuResponse> {
		const response = await axios.put(
			youCanApiRoutes.categories.update(menuId),
			menu
		);

		return response.data;
	}

	async deleteMenu(menuId: string): Promise<IDeleteMenuResponse> {
		const response = await axios.delete(
			youCanApiRoutes.categories.delete(menuId)
		);
		return response.data;
	}

}

export default YouCanMenus;
