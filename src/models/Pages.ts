import axios from 'axios';
import { PageSortingEnum } from '../constants/enum/Page';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanPages {
	async getPages({
		limit,
		page,
		sort_field,
		q,
	}: {
		limit?: number;
		page?: number;
		sort_field?: PageSortingEnum;
		q?: string;
	}): Promise<{ data: IPageResponse[]; meta: IMetaResponse }> {
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

		if (q) {
			query += `q=${q}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.pages.show}?${query}`
		);
		return response.data;
	}

	async getAllPages(): Promise<{ data: IPageResponse[] }> {
		const data = await this.getPages({ limit: 100, page: 1 });
		const youCanPages = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getPages({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanPages.push(...newData.data);
			}
		}
		return { data: youCanPages };
	}

	async getPageById(pageId: string): Promise<IPageResponse> {
		const response = await axios.get(youCanApiRoutes.pages.get(pageId));
		return response.data;
	}

	async createPage(page: IPage): Promise<IPageResponse> {
		const response = await axios.post(youCanApiRoutes.pages.create, page);
		return response.data;
	}

	async updatePage(
		pageId: string,
		page: IPage
	): Promise<IPageResponse> {
		const response = await axios.put(
			youCanApiRoutes.pages.update(pageId),
			page
		);

		return response.data;
	}

	async deletePage(pageId: string): Promise<IDeletePageResponse> {
		const response = await axios.delete(
			youCanApiRoutes.pages.delete(pageId)
		);
		return response.data;
	}

}

export default YouCanPages;
