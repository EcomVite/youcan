interface ICustomer {
	first_name?: string;
	last_name?: string;
	email?: string;
	phone?: string;
	country?: string;
	region?: string;
	city?: string;
	notes?: string;
	address?: IAddress[];
}

interface ICustomerResponse {
	id: string;
	first_name: string;
	last_name: string;
	full_name: string;
	email: string;
	avatar: string;
	phone: string;
	country: string;
	region: string;
	city: string;
	notes: string;
	location: string;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date | null;
	links: any;
	address: IAddress[];
}

interface ICustomerMetaResponse {
	pagination: {
		total: number;
		count: number;
		per_page: number;
		current_page: number;
		total_pages: number;
		links: any;
	};
}

interface ICustomerUpdateDeleteResponse {
	message?: string;
	http_code?: number;
	code?: string;
	type?: string;
	status?: number;
	detail?: string;
	data?: any;
	meta?: any[];
}