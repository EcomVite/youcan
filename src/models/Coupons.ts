import axios from 'axios';
import { youCanApiRoutes } from '../routes/YouCanApiRoutes';

class YouCanCoupons {
	async getCoupons({
		limit,
		page,
	}: {
		limit?: number;
		page?: number;
	}): Promise<{ data: ICouponResponse[]; meta: IMetaResponse }> {
		let query: string = '';
		if (limit) {
			query += `limit=${limit}&`;
		}
		if (page) {
			query += `page=${page}&`;
		}

		const response = await axios.get(
			`${youCanApiRoutes.coupons.show}?${query}`
		);
		return response.data;
	}

	async getAllCoupons(): Promise<{ data: ICouponResponse[] }> {
		const data = await this.getCoupons({ limit: 100, page: 1 });
		const youCanCoupons = data.data;

		if (data.meta.pagination.total_pages > 1) {
			for (let i = 2; i <= data.meta.pagination.total_pages; i++) {
				const newData = await this.getCoupons({
					limit: data.meta.pagination.per_page,
					page: i,
				});

				youCanCoupons.push(...newData.data);
			}
		}
		return { data: youCanCoupons };
	}

	async getCouponById(couponId: string): Promise<ICouponResponse> {
		const response = await axios.get(youCanApiRoutes.coupons.get(couponId));
		return response.data;
	}

	async createCoupon(coupon: ICoupon): Promise<ICouponResponse> {
		const response = await axios.post(youCanApiRoutes.coupons.create, coupon);
		return response.data;
	}

	async updateCoupon(
		couponId: string,
		coupon: ICoupon
	): Promise<ICouponResponse> {
		const response = await axios.put(
			youCanApiRoutes.coupons.update(couponId),
			coupon
		);

		return response.data;
	}

	async deleteCoupon(couponId: string): Promise<IDeleteCouponResponse> {
		const response = await axios.delete(
			youCanApiRoutes.coupons.delete(couponId)
		);
		return response.data;
	}

}

export default YouCanCoupons;
