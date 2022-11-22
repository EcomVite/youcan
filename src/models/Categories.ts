import axios from 'axios';
import { CategorySortingEnum } from '../constants/enum/Category';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanCategories {
	async getCategories({
		limit,
		page,
		sort_field,
		q,
		show_in_collection,
		only_top_level,
	}: {
		limit?: number;
		page?: number;
		sort_field?: CategorySortingEnum;
		q?: string;
		show_in_collection?: boolean;
		only_top_level?: boolean;
	}): Promise<{ data: ICategoryResponse[]; meta: IMetaResponse }> {
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

		if (show_in_collection) {
			query += `show_in_collection=${show_in_collection}&`;
		}

		if (only_top_level) {
			query += `only_top_level=${only_top_level}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.categories.show}?${query}`
		);
		return response.data;
	}

	async getAllCategories(): Promise<{ data: ICategoryResponse[] }> {
		const data = await this.getCategories({ limit: 100, page: 1 });
		const youCanCategories = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getCategories({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanCategories.push(...newData.data);
			}
		}
		return { data: youCanCategories };
	}

	async getCategoryById(categoryId: string): Promise<ICategoryResponse> {
		const response = await axios.get(youCanApiRoutes.categories.get(categoryId));
		return response.data;
	}

	async createCategory(category: ICategory): Promise<ICategoryResponse> {
		const response = await axios.post(youCanApiRoutes.categories.create, category);
		return response.data;
	}

	async updateCategory(
		categoryId: string,
		category: ICategory
	): Promise<ICategoryResponse> {
		const response = await axios.put(
			youCanApiRoutes.categories.update(categoryId),
			category
		);

		return response.data;
	}

	async deleteCategory(categoryId: string): Promise<IDeleteCategoryResponse> {
		const response = await axios.delete(
			youCanApiRoutes.categories.delete(categoryId)
		);
		return response.data;
	}

}

export default YouCanCategories;
