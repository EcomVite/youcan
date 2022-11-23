import axios from 'axios';
import { ReviewSortingEnum } from '../constants/enum/Review';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanReviews {
	async getReviews({
		limit,
		page,
		sort_field,
	}: {
		limit?: number;
		page?: number;
		sort_field?: ReviewSortingEnum;
	}): Promise<{ data: IReviewResponse[]; meta: IMetaResponse }> {
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

		const response = await axios.get(
			`${youCanApiRoutes.reviews.show}?${query}`
		);
		return response.data;
	}

	async getAllReviews(): Promise<{ data: IReviewResponse[] }> {
		const data = await this.getReviews({ limit: 100, page: 1 });
		const youCanReviews = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getReviews({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanReviews.push(...newData.data);
			}
		}
		return { data: youCanReviews };
	}

	async getReviewById(reviewId: string): Promise<IReviewResponse> {
		const response = await axios.get(
			youCanApiRoutes.reviews.get(reviewId)
		);
		return response.data;
	}

	async createReview(
		productId: string,
		review: IReview
	): Promise<IReviewResponse> {
		const response = await axios.post(
			youCanApiRoutes.reviews.create(productId),
			review
		);
		return response.data;
	}

	async updateReview(
		reviewId: string,
		review: IReview
	): Promise<IDeleteReviewResponse> {
		const response = await axios.put(
			youCanApiRoutes.reviews.update(reviewId),
			review
		);

		return response.data;
	}

	async deleteReview(
		reviewId: string
	): Promise<IDeleteReviewResponse> {
		const response = await axios.delete(
			youCanApiRoutes.reviews.delete(reviewId)
		);
		return response.data;
	}

	async getReviewsByProductId(
		productId: string,
		{
			limit,
			page,
			sort_field,
		}: {
			limit?: number;
			page?: number;
			sort_field?: ReviewSortingEnum;
		}
	): Promise<{ data: IReviewResponse[]; meta: IMetaResponse }> {
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

		const response = await axios.get(
			`${youCanApiRoutes.reviews.showProductReviews(productId)}?${query}`
		);
		return response.data;
	}

	async getAllReviewsByProductId(
		productId: string
	): Promise<{ data: IReviewResponse[] }> {
		const data = await this.getReviewsByProductId(productId, {
			limit: 100,
			page: 1,
		});
		const youCanReviews = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getReviewsByProductId(productId, {
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanReviews.push(...newData.data);
			}
		}
		return { data: youCanReviews };
	}

	async rejectReview(reviewId: string): Promise<IDeleteReviewResponse> {
		const response = await axios.put(
			youCanApiRoutes.reviews.reject(reviewId)
		);
		return response.data;
	}

	async approveReview(reviewId: string): Promise<IDeleteReviewResponse> {
		const response = await axios.put(
			youCanApiRoutes.reviews.approve(reviewId)
		);
		return response.data;
	}

}

export default YouCanReviews;
