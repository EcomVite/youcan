interface ICoupon {
	code: string;
	description: string;
	value: number;
	type: number;
	start_date: Date;
	end_date?: Date;
	max_usage?: number;
	product_ids: string[];
}

interface ICouponResponse {
	id: string;
	code: string;
	description: string;
	value: number;
	type: number;
	type_text: string;
	start_date: number;
	end_date: number;
	max_usage: number;
	status: string;
}

interface IDeleteCouponResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
}
