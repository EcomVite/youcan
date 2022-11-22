interface IOrder {
	customer_id: strig;
	variants: IOrderVariant[];
	selected_shipping_estimation_id: strig;
	shipping_address?: IAddress;
	payment_address?: IAddress;
	extra_fields?: any;
	coupon_id?: strig;
	discount?: strig;
	notes?: strig;
	tags?: strig[];
}

interface IOrderVariant {
	id: string;
	price: number;
	quantity: number;
}

interface IOrderDiscount {
	value: number;
	type: number;
	reason?: string;
}

interface IAddress {
	is_new: boolean;
	id?: string;
	first_name?: string;
	last_name?: string;
	company?: string;
	phone?: string;
	first_line?: string;
	second_line?: string;
	region?: string;
	city?: string;
	zip_code?: string;
	country_code?: string;
	is_default?: boolean;
}

interface IOrderResponse {
	id: string;
	ref: string;
	vat: number;
	total: number;
	notes: string | null;
	status: number;
	tags: [];
	extra_fields: null;
	is_refunded_by_platform: false;
	platform_fee: 0;
	created_at: Date;
	updated_at: Date;
	links: any;
	payment: any;
	shipping: any;
	refunds: any[];
	variants: any[];
}

interface IOrderCloseResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
	data?: any;
	status?: number;
	detail?: string;
	meta?: any[];
}
